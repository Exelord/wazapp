import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { App as wazapp } from '@wazapp/core'

import '@app/styles/index.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <wazapp>
    <Component {...pageProps} />
  </wazapp>
)

export default App;