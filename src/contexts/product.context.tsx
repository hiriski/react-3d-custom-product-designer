import { createContext, FC, ReactNode, useState } from 'react'

// product context
export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
)

interface Props {
  children: ReactNode
}

const ProductProvider: FC<Props> = ({ children }) => {
  // Imagine you get this product data from another galaxy 😆
  const [listOfProducts, setListOfProducts] = useState<IProduct[]>([])
  const [showProductInfo, setShowProductInfo] = useState<boolean | null>(null)

  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariantColor>('BLACK')

  return (
    <ProductContext.Provider
      value={{
        selectedVariant,
        setSelectedVariant,
        listOfProducts,
        setListOfProducts,
        showProductInfo,
        setShowProductInfo,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
