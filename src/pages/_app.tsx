import { AppProps } from 'next/app';
import { FunctionComponent } from 'react';
import { App as Wazup } from '@wazup/core'

import '@app/styles/index.scss';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <Wazup>
    <Component {...pageProps} />
  </Wazup>
)

export default App;