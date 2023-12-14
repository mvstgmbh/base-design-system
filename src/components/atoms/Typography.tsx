import { VariantProps, cva } from 'class-variance-authority';
import { FC, HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import { twMerge } from 'tailwind-merge';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-5xl',
      h2: 'text-4xl',
      h3: 'text-3xl',
      h4: 'text-2xl',
      h5: 'text-xl',
      h6: 'text-lg',
      subHeading: 'text-lg font-medium',
      body1: 'text-base',
      body2: 'text-sm',
      caption: 'text-xs',
    },
  },
  defaultVariants: {
    variant: 'body1',
  },
});

interface TypographyVariants extends VariantProps<typeof typographyVariants> {}

const typographyStyles = (variants: TypographyVariants) => twMerge(typographyVariants(variants));

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  as?: HTMLTag;
  ref?: React.Ref<HTMLHeadingElement>;
}

export const Typography: FC<TypographyProps> = forwardRef(
  ({ as: Element = 'p', variant = 'h1', className, ...props }, ref) => {
    return (
      <Element {...props} className={cn(typographyStyles({ variant }), className)} ref={ref} />
    );
  }
);

Typography.displayName = 'Typography';
