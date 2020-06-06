import { createElement, Fragment, ReactNode } from "react";
import { guidFor } from "@wazapp/utils";

function each<T>(collection: T[] | null | undefined, onItem: (item: T, index: number) => any | any, onEmpty: any = null): ReactNode {
  if (collection && collection.length) {
    const keys = new Set();

    return collection.map((item: any, index: number) => {
      const children =  typeof onItem === 'function' ? onItem(item, index) : onItem;
      let key = guidFor(item)

      if (keys.has(key)) {
        key = `${key}-i:${index}`;
      }

      keys.add(key);
      
      return createElement(Fragment, { key }, children)
    });
  }

  return onEmpty;
}

export default each;