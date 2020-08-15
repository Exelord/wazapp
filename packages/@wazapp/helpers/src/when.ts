import { ReactNode } from "react";

export default function when<T>(a: T, b: T, c: T | null = null): ReactNode {
  return a ? b : c;
}