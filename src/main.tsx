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
import '@fontsource/plus-jakarta-sans/800.css'
import '@fontsource/plus-jakarta-sans/800-italic.css'

// css reset
import CssBaseline from '@mui/material/CssBaseline'

// app wrapper
import AppWrapper from './app-wrapper'
import MuiThemeProvider from './plugins/@mui/components/@mui-theme.provider'

// router
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CssBaseline />
    <MuiThemeProvider>
      <AppWrapper />
    </MuiThemeProvider>
  </BrowserRouter>
)
