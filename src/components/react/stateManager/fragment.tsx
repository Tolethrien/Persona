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
  atom: Fragment<FragmentType>
): [FragmentType, (newVal: FragmentType) => void] => {
  return [useSyncExternalStore(atom.subscribe, atom.get, atom.get), atom.set];
};
export const useFragmentValue = <FragmentType,>(
  atom: Fragment<FragmentType>
): FragmentType => {
  return useSyncExternalStore(atom.subscribe, atom.get, atom.get);
};
