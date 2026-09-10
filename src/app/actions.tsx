import type { ComponentPropsWithoutRef } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "secondary" | "text" | "nav" | "display";
  size?: "regular" | "compact";
  arrow?: "diagonal" | "up" | null;
};

export function ActionLink({
  variant = "text",
  size = "regular",
  arrow = variant === "nav" ? null : "diagonal",
  className = "",
  children,
  ...props
}: ActionLinkProps) {
  return (
    <a
      {...props}
      className={`action action--${variant} action--${size} ${className}`.trim()}
    >
      <span className="action-label">{children}</span>
      {arrow && (
        <span className="action-icon" aria-hidden="true">
          {arrow === "up" ? "↑" : "↗"}
        </span>
      )}
    </a>
  );
}
