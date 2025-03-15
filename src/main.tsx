import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'

// fonts
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/300-italic.css'
import '@fontsource/plus-jakarta-sans/400-italic.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/500-italic.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/600-italic.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/700-italic.css'

// css reset
import CssBaseline from '@mui/material/CssBaseline'
import MuiThemeProvider from './theme.provider.tsx'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Fragment>
)
