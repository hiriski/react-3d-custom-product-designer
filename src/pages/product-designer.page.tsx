import { useEffect, useState } from 'react'

// components
import Stack from '@mui/material/Stack'
import DesignerHeader from '@/components/designer/designer-header'
import Sidebar from '@/components/sidebar'
import ModelContainer from '@/components/model-container'

// apis
import FakeApi from '@/api/fakeApi'

// navigation
import { useLocation, useParams } from 'react-router-dom'

// hooks
import { useDesign, useProduct } from '@/hooks'

const fetchProduct = async (productId: number) => {
  const product = await FakeApi.fetchProductById(productId)
  return product
}

const ProductDesignerPage = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct)
  const { setCurrentColor } = useDesign()
  const { setSelectedVariant } = useProduct()

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
      setSelectedVariant(color.name)
    }
  }, [color])

  return (
    <Stack sx={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
      <DesignerHeader />
      <ModelContainer product={product} />
      <Sidebar product={product} />
    </Stack>
  )
}

export default ProductDesignerPage
