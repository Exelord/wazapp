import { isObject } from "./internals/is-object";

let _guid = 0;

function generateGuid() {
  return `guid-${++_guid}`
}

export function resetGuid() {
  _guid = 0;
}

const OBJECT_STORE = new WeakMap();
const NON_OBJECT_STORE = new Map();

export default function guidFor(value: any | null | undefined) {
  const store = isObject(value) ? OBJECT_STORE : NON_OBJECT_STORE;

  let guid = store.get(value);

  if (guid === undefined) {
    guid = generateGuid();
    store.set(value, guid);
  }

  return guid;
}