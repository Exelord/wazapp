import { createElement, Fragment, ReactNode } from "react";
import { guidFor } from "@wazapp/utils";

function each<T>(collection: T[] | null | undefined, onItem: (item: T, index: number) => any | any, onEmpty: any = null): ReactNode {
  if (collection && collection.length) {
    return collection.map((item: any, index: number) => {
      const children =  typeof onItem === 'function' ? onItem(item, index) : onItem;
      return createElement(Fragment, { key: guidFor(item, index) }, children)
    });
  }

  return onEmpty;
}

export default each;