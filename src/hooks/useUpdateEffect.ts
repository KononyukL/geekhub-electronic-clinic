import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useUpdateEffect = (effect: EffectCallback, deps: DependencyList): void => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      console.log(111111111);
      return effect();
    }
    isMounted.current = true;
  }, deps);
};
