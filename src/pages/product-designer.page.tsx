import { useEffect, useState } from 'react'

// components
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import ModelContainer from '@/components/model-container'
import { Stack } from '@mui/material'
import FakeApi from '@/api/fakeApi'
import { useLocation, useParams } from 'react-router-dom'
import { useDesign } from '@/hooks'

const fetchProduct = async (productId: number) => {
  const products = await FakeApi.fetchProductById(productId)
  return products
}

const ProductDesignerPage = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct)
  const { setCurrentColor } = useDesign()

  const params = useParams()
  const { state } = useLocation()

  const color = state?.color as IProductVariant

  useEffect(() => {
    if (params.id) {
      fetchProduct(Number(params.id)).then(product => {
        setProduct(product)
      })
    }
  }, [params])

  useEffect(() => {
    if (color?.colorValue) {
      setCurrentColor(color.colorValue)
    }
  }, [color])

  return (
    <Stack sx={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <Header />
      <ModelContainer product={product} />
      <Sidebar product={product} />
    </Stack>
  )
}

export default ProductDesignerPage
