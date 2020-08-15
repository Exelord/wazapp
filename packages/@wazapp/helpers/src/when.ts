import { ReactNode } from "react";

export default function when<T>(a: any, b: T, c: any = null): ReactNode {
  return a ? b : c;
}