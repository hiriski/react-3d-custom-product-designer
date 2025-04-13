// react
import { useContext } from 'react'

// context
import { ProductContext } from '@/contexts/product.context'

export const useProduct = () => {
  const productContext = useContext(ProductContext)
  return {
    ...productContext,
  }
}
