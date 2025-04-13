// components
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// images
import reactLogo from '@/assets/react.svg'
import { appConfig } from '@/configs'

const Header = () => {
  return (
    <Box
      sx={{
        p: 4,
        gap: 1,
        top: 0,
        left: 0,
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        zIndex: 9,
      }}
    >
      <Box
        sx={{
          width: 24,
          height: 'auto',
        }}
        component='img'
        src={reactLogo}
        alt='React logo'
      />
      <Box>
        <Typography fontWeight='700'>{appConfig.appTitle}</Typography>
      </Box>
    </Box>
  )
}

export default Header
