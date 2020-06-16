import 'mobx-react/batchingForReactDom';
import { useStaticRendering } from "mobx-react"

const isServer = typeof window === 'undefined';

useStaticRendering(isServer);