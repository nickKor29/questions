import type { SVGProps } from 'react';
import { iconMap, type IconType } from './icons';
import clsx from 'clsx';
export type IconProps = {
  type: IconType;
  size?: number;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ type, className, size = 22, width, height, ...props }: IconProps) => {
  const Icon = iconMap[type];

  if (!Icon) {
    return null;
  }

  return (
    <Icon className={clsx(className)} width={width ?? size} height={height ?? size} {...props} />
  );
};
