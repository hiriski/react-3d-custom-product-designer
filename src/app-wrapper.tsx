// mui
import Box from '@mui/material/Box'

// components
import Header from './components/header'
import Designer from './components/designer'
import Sidebar from './components/sidebar'

const App = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'background.default',
      }}
    >
      <Header />
      <Designer />
      <Sidebar />
    </Box>
  )
}

export default App
