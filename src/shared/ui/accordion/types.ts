import type { JSX, PropsWithChildren } from 'react';

export type AccordionProps = {
  className?: string;
  isActive?: boolean;
  content: JSX.Element;
  heading: JSX.Element;
};
