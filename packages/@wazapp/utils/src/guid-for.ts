import { isObject } from "./internals/is-object";

class GuidController {
  private id = 0;
  private objectStore = new WeakMap();
  private nonObjectStore = new Map();

  for(value?: any, suffix?: string | number): string {
    const valueGuid = this.generate(value);
  
    if (suffix === undefined) return valueGuid;
  
    const suffixGuid = this.generate(suffix);
  
    return `${valueGuid}-${suffixGuid}`;
  }

  private generate(value?: any): string {
    const store = isObject(value) ? this.objectStore : this.nonObjectStore;

    if (value !== undefined) {
      let guid = store.get(value);
  
      if (guid === undefined) {
        guid = `w:${(this.id++).toString(36)}`
        store.set(value, guid);
      }
      
      return guid;
    }

    return `w:${(this.id++).toString(36)}`
  }
}

let guidController = new GuidController();

export default function guidFor(value: any, suffix?: string | number): string {
  return guidController.for(value, suffix);
}

export function resetGuid(): void {
  guidController = new GuidController();
}