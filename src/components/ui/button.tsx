import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-700/30 active:scale-[0.98]",
        secondary:
          "bg-sky-500 text-white hover:bg-sky-600 shadow-md shadow-sky-500/20 hover:shadow-lg active:scale-[0.98]",
        outline:
          "border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 active:scale-[0.98]",
        ghost:
          "hover:bg-blue-50 text-blue-600",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        link:
          "text-blue-600 underline-offset-4 hover:underline p-0 h-auto",
        white:
          "bg-white text-blue-700 hover:bg-blue-50 shadow-md shadow-black/10 active:scale-[0.98]",
        "white-outline":
          "border-2 border-white/60 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm active:scale-[0.98]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm:      "h-8 px-3.5 text-xs rounded-lg",
        lg:      "h-11 px-7 text-sm",
        xl:      "h-13 px-9 text-base",
        icon:    "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
