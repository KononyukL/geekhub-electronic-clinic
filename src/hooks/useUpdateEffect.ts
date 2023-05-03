import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useUpdateEffect = (effect: EffectCallback, deps: DependencyList): void => {
  const isMounted = useRef(false);

  console.log(11111111, isMounted);

  useEffect(() => {
    console.log(222222222, isMounted);
    if (isMounted.current) {
      return effect();
    }
    isMounted.current = true;
  }, deps);
};
