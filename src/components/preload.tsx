// components
import { Html } from '@react-three/drei'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

const Preloader = () => {
  return (
    <Html center>
      <Box
        sx={{
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    </Html>
  )
}

export default Preloader
