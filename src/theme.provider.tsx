import { FC, ReactNode } from 'react'
import {
  Components,
  PaletteOptions,
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

const theme: ThemeOptions = createTheme({
  components: theme_components,
  typography: theme_typography,
  palette: theme_palette,
})

interface Props {
  children: ReactNode
}
const MuiThemeProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children} </ThemeProvider>
}

export default MuiThemeProvider
