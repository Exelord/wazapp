const IndexPage: React.FunctionComponent = () => {
  return (
    <div style={{ textAlign: 'center', backgroundColor: 'BlueViolet', color: 'white', padding: '100px' }}>
      <h1 style={{ color: 'GreenYellow' }}>Wazapp! 👽🖖</h1>
      <p>Change this page at <b>/src/pages/index.tsx</b></p>
      <p>
        📗 Visit documentation at
        {" "}
        <a href="https://exelord.gitbook.io/wazapp" style={{ color: 'GreenYellow' }}>
          https://exelord.gitbook.io/wazapp
        </a>
      </p>
      <p>
        🌟 Star the project at
        {" "}
        <a href="https://github.com/Wazappjs/wazapp" style={{ color: 'GreenYellow' }}>
          https://github.com/Wazappjs/wazapp
        </a>
      </p>
    </div>
  )
}

export default IndexPage;