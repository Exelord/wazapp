import { isObject } from "./internals/is-object";

class GuidController {
  private id = 0;
  private objectStore = new WeakMap();
  private nonObjectStore = new Map();

  generate(value: any): string {
    const store = isObject(value) ? this.objectStore : this.nonObjectStore;

    let guid = store.get(value);

    if (guid === undefined) {
      guid = `guid-${++this.id}`
      store.set(value, guid);
    }
  
    return guid;
  }
}

let guidController = new GuidController();

export default function guidFor(value: any): string {
  return guidController.generate(value);
}

export function resetGuid(): void {
  guidController = new GuidController();
}