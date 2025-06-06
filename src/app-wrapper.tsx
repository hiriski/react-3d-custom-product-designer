// components

// context provider
import ProductProvider from './contexts/product.context'
import DesignerContextProvider from './contexts/designer.context'
import { Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/app-layout'
import CatalogPage from './pages/catalog.page'
import NotMatchPage from './pages/not-match.page'
import ProductDesignerPage from './pages/product-designer.page'

const App = () => {
  return (
    <ProductProvider>
      <DesignerContextProvider>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<CatalogPage />} />
            <Route path='/product/:id' element={<ProductDesignerPage />} />
            <Route path='*' element={<NotMatchPage />} />
          </Route>
        </Routes>
      </DesignerContextProvider>
    </ProductProvider>
  )
}

export default App
