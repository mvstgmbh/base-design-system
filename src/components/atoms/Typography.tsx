type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';
  className?: string;
  children: React.ReactNode;
};

export const Typography = ({ as: Element = 'p', className, children }: Props) => {
  return <Element className={className}>{children}</Element>;
};
