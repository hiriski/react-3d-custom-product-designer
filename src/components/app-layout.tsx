// router
import { Outlet } from 'react-router-dom'

// components
import Box from '@mui/material/Box'

const AppLayout = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <Outlet />
    </Box>
  )
}

export default AppLayout
