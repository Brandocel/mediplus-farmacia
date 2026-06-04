import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default:  "bg-blue-100 text-blue-700",
        secondary:"bg-sky-100 text-sky-700",
        outline:  "border border-blue-200 text-blue-600",
        discount: "bg-red-500 text-white",
        new:      "bg-blue-600 text-white",
        hot:      "bg-amber-500 text-white",
        muted:    "bg-slate-100 text-slate-600",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
