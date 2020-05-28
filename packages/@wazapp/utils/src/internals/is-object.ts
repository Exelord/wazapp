export function isObject(value: any | null | undefined): value is object {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}