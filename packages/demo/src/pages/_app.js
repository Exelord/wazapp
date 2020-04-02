import { App as Wazup } from 'wazup'

const App = ({ Component, pageProps }) => (
  <Wazup>
    <Component {...pageProps} />
  </Wazup>
)

export default App;