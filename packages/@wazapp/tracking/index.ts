import { action as mobxAction } from 'mobx';

export const action = mobxAction.bound;

export {
  isArrayLike,
  isObservable,
  isBoxedObservable,
  isObservableObject,
  isObservableArray,
  isObservableMap,
  isObservableSet,
  isObservableProp,
  isComputedProp,
  isComputed,
  isAction,
  observable,
  ObservableMap,
  ObservableSet,
  computed,
  
  observe,
  intercept,
  autorun,
  reaction,
  when,
  runInAction,
  
  keys,
  values,
  entries,
  set,
  remove,
  has,
  get,

  toJS
} from "mobx";

export type {
  IObservable,
  IReactionPublic,
  IReactionDisposer,
  IAction,
  IComputedValue,
  IInterceptor,
  IObservableObject,
  IObservableValue,
  IObservableArray,
  IComputed,
  IAutorunOptions,
  IReactionOptions,
  IWhenOptions,
  IComputedValueOptions,
} from "mobx";
