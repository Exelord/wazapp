import { isObject } from "./internals/is-object";
import { uuid } from '@wazapp/utils';

const OBJECT_STORE = new WeakMap();
const NON_OBJECT_STORE = new Map();

export default function guidFor(value: any | null | undefined) {
  const store = isObject(value) ? OBJECT_STORE : NON_OBJECT_STORE;

  let guid = store.get(value);

  if (guid === undefined) {
    guid = uuid(7);
    store.set(value, guid);
  }

  return guid;
}