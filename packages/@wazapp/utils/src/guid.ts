import { isObject } from "./internals/is-object";
import { uuid } from '@wazapp/utils';

const OBJECT_GUIDS = new WeakMap();
const NON_OBJECT_GUIDS = new Map();

export function guidFor(value: any | null | undefined) {
  if (isObject(value)) {
    let guid = OBJECT_GUIDS.get(value);

    if (guid === undefined) {
      guid = uuid(7);
      OBJECT_GUIDS.set(value, guid);
    }

    return guid;
  } else {
    let guid = NON_OBJECT_GUIDS.get(value);

    if (guid === undefined) {
      guid = uuid(5);
      NON_OBJECT_GUIDS.set(value, guid);
    }

    return guid;
  }
}