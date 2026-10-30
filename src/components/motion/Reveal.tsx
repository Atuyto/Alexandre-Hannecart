import { motion, type HTMLMotionProps } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

type RevealVariant = "fade" | "rise" | "slide" | "blur";

const variants: Record<
  RevealVariant,
  { hidden: object; visible: object }
> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  rise: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  },
  slide: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(8px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

interface RevealProps extends HTMLMotionProps<"div"> {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function Reveal({
  children,
  className,
  variant = "rise",
  delay = 0,
  duration = 0.45,
  once = true,
  ...props
}: RevealProps) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
