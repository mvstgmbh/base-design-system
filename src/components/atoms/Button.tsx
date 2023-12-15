import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC, forwardRef } from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = cva(`px-md py-sm rounded-md text-white`, {
  variants: {
    variant: {
      primary: 'bg-primary-500 hover:bg-primary-900',
      secondary:
        'border-neutral-background-900 text-neutral-background-900/90 border hover:text-light-900 hover:bg-neutral-background-900',
      warning: 'bg-warning-500 hover:bg-warning-900',
      error: 'bg-error-500 hover:bg-error-900',
      success: 'bg-success-500 hover:bg-success-900',
    },
    size: {
      small: 'py-sm px-lg',
      large: 'text-xl py-md px-xl',
    },
  },
  defaultVariants: {
    size: 'small',
    variant: 'primary',
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
}

export const Button: FC<ButtonProps> = forwardRef(({ size, variant, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type='button'
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});

Button.displayName = 'Button';
