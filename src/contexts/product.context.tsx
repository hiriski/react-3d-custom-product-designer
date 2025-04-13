import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

// constants
import { PRODUCT_DATA } from '@/constants/product.constant'

interface IProductContext {
  product: IProduct
  selectedVariant: AvailableProductColor
  setSelectedVariant: Dispatch<SetStateAction<AvailableProductColor>>
}

// product context
export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
)

interface Props {
  children: ReactNode
}

const ProductProvider: FC<Props> = ({ children }) => {
  // Imagine you get this product data from another galaxy 😆
  const [data] = useState(PRODUCT_DATA)

  const [selectedVariant, setSelectedVariant] =
    useState<AvailableProductColor>('BLACK')

  return (
    <ProductContext.Provider
      value={{ product: data, selectedVariant, setSelectedVariant }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
