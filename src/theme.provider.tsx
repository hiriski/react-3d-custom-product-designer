import { FC, ReactNode } from 'react'
import {
  Components,
  PaletteOptions,
  Shadows,
  ThemeOptions,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

/**
 * Theme config
 */
const theme_typography: TypographyOptions = {
  allVariants: {
    fontFamily: '"Plus Jakarta Sans","Helvetica","Arial",sans-serif',
  },
}

const theme_components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'unset',
      },
    },
  },
}

const theme_palette: PaletteOptions = {
  background: {
    paper: '#ffffff',
    default: '#ebeef2',
  },
}

const theme_shadows: Shadows = [
  'none',
  '0px 4px 10px 0px rgba(0,0,0,0.1)',
  '0px 5px 16px 0px rgba(0,0,0,0.1)',
  '0px 6px 20px 0px rgba(0,0,0,0.1)',
  '0px 6px 24px 0px rgba(0,0,0,0.1)',
  '0px 10px 30px 0px rgba(0,0,0,0.1)',
  '0px 12px 42px 0px rgba(0,0,0,0.1)',
  '0px 12px 54px 0px rgba(0,0,0,0.1)',
] as unknown as Shadows

const theme: ThemeOptions = createTheme({
  components: theme_components,
  typography: theme_typography,
  palette: theme_palette,
  shadows: theme_shadows,
})

interface Props {
  children: ReactNode
}
const MuiThemeProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>
}

export default MuiThemeProvider
