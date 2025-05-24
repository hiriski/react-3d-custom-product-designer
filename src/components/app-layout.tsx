// router
import { Outlet } from 'react-router-dom'

// components
import Box from '@mui/material/Box'

const AppLayout = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Outlet />
    </Box>
  )
}

export default AppLayout
