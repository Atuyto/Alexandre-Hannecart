import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface BeforeAfterSliderProps {
  beforeImageUrl: string;
  afterImageUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImageUrl,
  afterImageUrl,
  beforeLabel = "AVANT",
  afterLabel = "APRÈS",
  className = "",
}: BeforeAfterSliderProps) {
  const reduced = usePrefersReducedMotion();
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeWrapRef = useRef<HTMLDivElement>(null);
  const afterWrapRef = useRef<HTMLDivElement>(null);
  const beforeCanvasRef = useRef<HTMLCanvasElement>(null);
  const afterCanvasRef = useRef<HTMLCanvasElement>(null);
  const beforeAnimatorRef = useRef<{ stop: () => void } | null>(null);
  const afterAnimatorRef = useRef<{ stop: () => void } | null>(null);
  const isDraggingRef = useRef(false);

  const clamp = (value: number) => Math.min(100, Math.max(0, value));

  const updatePosition = useCallback(
    (clientX: number) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = (x / rect.width) * 100;
      setPosition(clamp(pct));
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      isDraggingRef.current = true;
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDraggingRef.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    isDraggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  // URLs uniques par montage pour forcer le chargement et l'animation des deux GIFs
  const cacheBuster = useMemo(() => `t=${Date.now()}`, []);
  const beforeSrc = useMemo(
    () => `${beforeImageUrl}${beforeImageUrl.includes("?") ? "&" : "?"}${cacheBuster}&v=before`,
    [beforeImageUrl, cacheBuster]
  );
  const afterSrc = useMemo(
    () => `${afterImageUrl}${afterImageUrl.includes("?") ? "&" : "?"}${cacheBuster}&v=after`,
    [afterImageUrl, cacheBuster]
  );

  // Vidéo = pas de throttling navigateur, animation fluide en continu
  const isVideo = (url: string) => /\.(mp4|webm)(\?|$)/i.test(url);
  const useVideo = isVideo(beforeImageUrl) || isVideo(afterImageUrl);

  const isGif = !useVideo && (/\.gif(\?|$)/i.test(beforeImageUrl) || /\.gif(\?|$)/i.test(afterImageUrl));

  const afterWidthPct = 100 - position;
  const afterInnerWidthPct = position >= 100 ? 0 : (100 / afterWidthPct) * 100;

  // GIF sur canvas via gifler (import dynamique pour éviter le conflit CJS/ESM avec Vite)
  useEffect(() => {
    if (!isGif || reduced) return;
    const beforeCanvas = beforeCanvasRef.current;
    const afterCanvas = afterCanvasRef.current;
    if (!beforeCanvas || !afterCanvas) return;
    let cancelled = false;
    import("gifler").then((m: unknown) => {
      if (cancelled) return;
      const mod = m as Record<string, unknown> & ((u: string) => unknown);
      const giflerFn = typeof mod === "function" ? mod : mod?.default ?? mod?.gifler ?? mod;
      if (typeof giflerFn !== "function") return;
      const gifler = giflerFn as (url: string) => { get: (cb: (a: { animateInCanvas: (c: HTMLCanvasElement) => void; stop: () => void }) => void) => void };
      gifler(beforeSrc).get((animator) => {
        if (cancelled) return;
        animator.animateInCanvas(beforeCanvas);
        beforeAnimatorRef.current = animator;
      });
      gifler(afterSrc).get((animator) => {
        if (cancelled) return;
        animator.animateInCanvas(afterCanvas);
        afterAnimatorRef.current = animator;
      });
    });
    return () => {
      cancelled = true;
      beforeAnimatorRef.current?.stop();
      afterAnimatorRef.current?.stop();
      beforeAnimatorRef.current = null;
      afterAnimatorRef.current = null;
    };
  }, [isGif, beforeSrc, afterSrc, reduced]);

  const renderVideo = (src: string, className: string) =>
    reduced ? (
      <video
        src={src}
        controls
        muted
        playsInline
        preload="metadata"
        className={className}
      />
    ) : (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={className}
      />
    );

  const beforeContent = useVideo ? (
    renderVideo(beforeSrc, "absolute inset-0 w-full h-full object-contain")
  ) : isGif ? (
    reduced ? (
      <img
        src={beforeSrc}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
        loading="lazy"
      />
    ) : (
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src={beforeSrc}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-contain"
        draggable={false}
      />
      <canvas
        ref={beforeCanvasRef}
        key="before-canvas"
        className="relative max-w-full max-h-full z-[1]"
      />
    </div>
    )
  ) : (
    <img
      key="before"
      src={beforeSrc}
      alt={beforeLabel}
      className="absolute inset-0 w-full h-full object-contain"
      draggable={false}
      loading="eager"
    />
  );

  const afterContent = useVideo ? (
    renderVideo(
      afterSrc,
      "absolute right-0 top-0 bottom-0 w-full h-full object-contain object-right"
    )
  ) : isGif ? (
    reduced ? (
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-contain object-right"
        draggable={false}
        loading="lazy"
      />
    ) : (
    <div className="absolute right-0 top-0 bottom-0 left-0 flex items-center justify-center">
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-contain object-right"
        draggable={false}
      />
      <canvas
        ref={afterCanvasRef}
        key="after-canvas"
        className="relative max-w-full max-h-full z-[1]"
      />
    </div>
    )
  ) : (
    <img
      key="after"
      src={afterSrc}
      alt={afterLabel}
      className="absolute right-0 top-0 bottom-0 w-full h-full object-contain object-right"
      draggable={false}
      loading="eager"
    />
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-xl border border-border bg-secondary/30 select-none touch-none ${className}`}
      style={{ aspectRatio: "16/10" }}
    >
      {/* Image AVANT (fond) */}
      <div ref={beforeWrapRef} className="absolute inset-0">
        {beforeContent}
      </div>

      {/* Image APRÈS (masquage par overflow) */}
      <div
        className="absolute top-0 bottom-0 right-0 overflow-hidden pointer-events-none"
        style={{ width: `${afterWidthPct}%` }}
      >
        <div
          ref={afterWrapRef}
          className="absolute top-0 bottom-0 right-0 h-full"
          style={{ width: `${afterInnerWidthPct}%` }}
        >
          {afterContent}
        </div>
      </div>

      {/* Labels */}
      <div className="absolute inset-0 pointer-events-none flex justify-between items-start p-4">
        <span className="rounded-md border border-border bg-card/90 px-2 py-1 text-sm font-bold text-foreground shadow-sm md:text-base">
          {beforeLabel}
        </span>
        <span className="rounded-md border border-border bg-card/90 px-2 py-1 text-sm font-bold text-foreground shadow-sm md:text-base">
          {afterLabel}
        </span>
      </div>

      {/* Ligne verticale + poignée draggable */}
      <div
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-10 flex items-center justify-center touch-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        role="slider"
        aria-label="Comparaison avant après"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        tabIndex={0}
        onKeyDown={(e) => {
          const step = e.shiftKey ? 10 : 5;
          if (e.key === "ArrowLeft") setPosition((p) => clamp(p - step));
          if (e.key === "ArrowRight") setPosition((p) => clamp(p + step));
        }}
      >
        <div className="absolute inset-y-0 w-px bg-foreground/80 shadow-[0_0_0_1px_hsl(var(--border))]" />
        <div className="absolute flex h-11 w-11 items-center justify-center gap-0.5 rounded-full border-2 border-border bg-card shadow-md">
          <ChevronLeft className="h-4 w-4 text-muted-foreground" aria-hidden />
          <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden />
        </div>
      </div>
    </div>
  );
}
