// components
import Box from '@mui/material/Box'
import Header from './components/header'
import Sidebar from './components/sidebar'
import ModelContainer from './components/model-container'

// context provider
import ProductProvider from './contexts/product.context'
import DesignContextProvider from './contexts/design.context'

const App = () => {
  return (
    <ProductProvider>
      <DesignContextProvider>
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            backgroundColor: 'background.default',
          }}
        >
          <Header />
          <ModelContainer />
          <Sidebar />
        </Box>
      </DesignContextProvider>
    </ProductProvider>
  )
}

export default App
