// mui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// images
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <Box display='flex' gap={2} mb={1}>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </Box>
      <Box>
        <Typography fontWeight='700'>
          React 3D Custom Product Designer
        </Typography>
      </Box>
    </Box>
  )
}

export default App
