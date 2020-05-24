import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { App as Wazapp } from '@wazapp/core'

import '@src/styles/index.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Wazapp>
    <Component {...pageProps} />
  </Wazapp>
)

export default App;