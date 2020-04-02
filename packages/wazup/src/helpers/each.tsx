export default function each(collection: any, onItems: (item?: any, index?: number) => {} | any, onEmpty: any = null) {
  if (collection && collection.length) {
    return collection.map((item: any, index: number) => typeof onItems === 'function' ? onItems(item, index) : onItems);
  }

  return onEmpty;
}