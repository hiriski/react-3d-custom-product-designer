// components
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import { useCallback, useMemo } from 'react'

const Footer = () => {
  const { palette } = useTheme()

  const getFooterImg = useMemo(() => {
    const paletteMode = palette.mode
    return `https://github.com/hiriski/hiriski/raw/master/banners/banner-copyright-${paletteMode}(2025).png`
    // return palette.mode === 'dark'
    //   ? GITHUB_FOOTER_IMG.replace('light', 'dark')
    //   : GITHUB_FOOTER_IMG
  }, [palette])

  const onClick = useCallback(() => {
    window.open('https://github.com/hiriski', '_blank')
  }, [])
  return (
    <Box
      sx={{
        mt: 'auto',
        pb: 4,
        width: {
          xs: '90%',
          md: 820,
        },
        mx: 'auto',
      }}
    >
      <Box
        onClick={onClick}
        component='img'
        src={getFooterImg}
        alt='Copyright'
        sx={{ width: '100%', cursor: 'pointer' }}
      />
    </Box>
  )
}

export default Footer
