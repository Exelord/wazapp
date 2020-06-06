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

let guidController: GuidController | undefined;

export default function guidFor(value: any, suffix?: string | number): string {
  if (!guidController) throw new Error('Wazapp: GUID controller has not been setup.');

  return guidController.for(value, suffix);
}

export function setupGuid(): void {
  guidController = new GuidController();
}