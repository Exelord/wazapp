import 'mobx-react-lite/batchingForReactDom'

import { FunctionComponent } from 'react';
import { observer, useAsObservableSource, useStaticRendering } from 'mobx-react-lite';

if (typeof window === 'undefined') {
  useStaticRendering(true);
};

const hoistExcludedList: any = {
  $$typeof: true,
  render: true,
  compare: true,
  type: true
}

function copyStaticProperties(base: any, target: any) {
  Object.keys(base).forEach(key => {
    if (!hoistExcludedList[key]) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key)!)
    }
  })
}

export default function Component<P = {}>(baseComponent: FunctionComponent<P>) {
  const baseComponentName = baseComponent.displayName || baseComponent.name

  const WazappAnonymousComponent = (props: P, context?: any) => {
    const observableProps = useAsObservableSource(props);
    return baseComponent(observableProps, context);
  }
  
  copyStaticProperties(baseComponent, WazappAnonymousComponent)
  WazappAnonymousComponent.displayName = baseComponentName;
  
  return observer(WazappAnonymousComponent);
}