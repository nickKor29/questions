// useUrlParam.ts
import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

type UseUrlParamOptions<T> = {
  paramName: string;
  defaultValue: T;
  parse?: (value: string) => T;
  scrollToTop?: boolean;
};

export function useUrlParam<T extends string | number | boolean>({
  paramName,
  defaultValue,
  parse,
  scrollToTop = false,
}: UseUrlParamOptions<T>) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = (() => {
    const paramValue = searchParams.get(paramName);
    if (!paramValue) return defaultValue;

    if (parse) {
      try {
        return parse(paramValue);
      } catch {
        return defaultValue;
      }
    }

    const defaultType = typeof defaultValue;

    if (defaultType === 'number') {
      const num = parseInt(paramValue, 10);
      return (isNaN(num) ? defaultValue : num) as T;
    }

    if (defaultType === 'boolean') {
      return (paramValue === 'true') as T;
    }

    return paramValue as T;
  })();

  const setValue = useCallback(
    (newValue: T) => {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams(prev);
        if (newValue === defaultValue) {
          newParams.delete(paramName);
        } else {
          newParams.set(paramName, String(newValue));
        }
        return newParams;
      });
      if (scrollToTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [setSearchParams, paramName, defaultValue, scrollToTop]
  );

  return {
    value,
    setValue,
    searchParams,
  };
}
