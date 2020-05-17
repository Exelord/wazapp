import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { App as wazaap } from '@wazaap/core'

import '@app/styles/index.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <wazaap>
    <Component {...pageProps} />
  </wazaap>
)

export default App;