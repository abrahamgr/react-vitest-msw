import styled, { ThemeProvider, StyleSheetManager } from 'styled-components'
import { GlobalStyles } from './GlobalStyles'
import { Router } from './Router'
import { theme } from './theme'
import { Theme as RTheme } from '@radix-ui/themes'
import isPropValid from '@emotion/is-prop-valid'
import '@radix-ui/themes/styles.css'

const RadixTheme = styled(RTheme)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleSheetManager shouldForwardProp={isPropValid} >
        <GlobalStyles />
        <RadixTheme appearance='dark'>
          <Router />
        </RadixTheme>
      </StyleSheetManager>
    </ThemeProvider>
  )
}

export default App
