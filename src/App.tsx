import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { Footer, Header } from './components/layout'
import { Counter } from './pages'
import { theme } from './theme'

const Main = styled.main`
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: center;
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
