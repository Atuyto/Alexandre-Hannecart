import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  id?: string;
  align?: "left" | "center";
}

export function PageHeader({
  title,
  description,
  className,
  id,
  align = "left",
}: PageHeaderProps) {
  return (
    <header className={cn(align === "center" && "text-center mx-auto max-w-2xl", className)}>
      <h1 id={id} className="page-header">
        {title}
      </h1>
      {description ? (
        <p className={cn("page-lead", align === "center" && "mx-auto")}>{description}</p>
      ) : null}
    </header>
  );
}
