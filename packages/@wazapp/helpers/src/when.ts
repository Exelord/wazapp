export default function when(a: any, b: any, c: any = null): any {
  return a ? b : c;
}