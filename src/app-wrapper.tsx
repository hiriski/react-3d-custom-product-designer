// components

// context provider
import ProductProvider from './contexts/product.context'
import DesignContextProvider from './contexts/design.context'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/app-layout'
import CatalogPage from './pages/catalog.page'
import NotMatchPage from './pages/not-match.page'
import ProductDesignerPage from './pages/product-designer.page'

const App = () => {
  return (
    <ProductProvider>
      <DesignContextProvider>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<CatalogPage />} />
            <Route path='/product/:id' element={<ProductDesignerPage />} />
            <Route path='*' element={<NotMatchPage />} />
          </Route>
        </Routes>
      </DesignContextProvider>
    </ProductProvider>
  )
}

export default App
