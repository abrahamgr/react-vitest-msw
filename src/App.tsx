import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Footer, Header } from './components/layout'
import { Counter } from './pages'
import { theme } from './theme'

const Main = styled.main`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GlobalStyles = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  }
`
function App() {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    <Main>
      <Counter />
    </Main>
    <Footer />
  </ThemeProvider>
  )
}

export default App
