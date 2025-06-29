import { FC, ReactNode, useEffect, useMemo, useState } from 'react'

// @mui
import { createTheme } from '@/theme'
import { CssBaseline, Theme, ThemeProvider } from '@mui/material'

const MuiThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')

  const [isDarkMode, setIsDark] = useState(false)

  useEffect(() => {
    // const preferredMode = window?.localStorage.getItem(PREFERRED_MODE_KEY)

    if (mediaQuery?.matches) {
      setIsDark(true)
    } else {
      setIsDark(false)
    }

    const handleChange = (e: MediaQueryListEventMap['change']): void => {
      setIsDark(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    // Clean up the listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [mediaQuery?.matches])

  const theme = useMemo<Theme>(() => createTheme(false), [isDarkMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
