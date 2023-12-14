import { cva } from 'class-variance-authority';
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

const typographyVariants = cva({
  variants: {
    variant: {
      h1: 'text-sm ',
    },
  },
  defaultVariants: {
    size: 'small',
    variant: 'primary',
  },
});

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

type TypographyVariant = 'default' | 'primary' | 'secondary';

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HTMLTag;
  variant?: TypographyVariant;
}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ as: Element = 'p', className, ...props }, ref) => {
    return <Element {...props} className={cn(typographyVariants, className)} ref={ref} />;
  }
);

Typography.displayName = 'Typography';
