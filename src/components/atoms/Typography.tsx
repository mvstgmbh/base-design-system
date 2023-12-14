import { HTMLAttributes, forwardRef } from 'react';

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

type TypographyVariant = 'default' | 'primary' | 'secondary';

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  as: HTMLTag;
  variant?: TypographyVariant;
}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ as: Element = 'p', className, children, ...props }, ref) => {
    return (
      <Element {...props} className={className} ref={ref}>
        {children}
      </Element>
    );
  }
);

Typography.displayName = 'Typography';
