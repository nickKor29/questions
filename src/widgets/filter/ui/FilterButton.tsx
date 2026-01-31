import { useUrlParam } from '@/shared/ui/pagination/useUrlParams';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function FilterButton({ children }: Props) {
  const { value, setValue, searchParams } = useUrlParam<string>({
    paramName: 'specialization',
    defaultValue: 'all',
  });
  return <div onClick={() => setValue('React')}>{children}</div>;
}

export default FilterButton;
