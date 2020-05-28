import { guidFor as guidForUtil } from '@wazapp/utils';

export default function guidFor(value: any | null | undefined, suffix: string) {
  return `${guidForUtil(value)}-${suffix}`;
}