import { useSyncExternalStore } from "react";

export interface Fragment<FragmentType> {
  get: () => FragmentType;
  set: (newVal: FragmentType) => void;
  subscribe: (callback: (newVal: FragmentType) => void) => () => void;
}
export const createFragment = <FragmentType,>(
  initVal: FragmentType
): Fragment<FragmentType> => {
  let value = initVal;
  const subscribers = new Set<(newVal: FragmentType) => void>();
  return {
    get: () => value,
    set: (newVal) => {
      value = newVal;
      subscribers.forEach((calback) => calback(value));
    },
    subscribe: (callback) => {
      subscribers.add(callback);
      return () => {
        subscribers.delete(callback);
      };
    },
  };
};
export const useFragment = <FragmentType,>(
  fragment: Fragment<FragmentType>
): [FragmentType, (newVal: FragmentType) => void] => {
  return [
    useSyncExternalStore(fragment.subscribe, fragment.get, fragment.get),
    fragment.set,
  ];
};
export const useFragmentValue = <FragmentType,>(
  fragment: Fragment<FragmentType>
): FragmentType => {
  return useSyncExternalStore(fragment.subscribe, fragment.get, fragment.get);
};
