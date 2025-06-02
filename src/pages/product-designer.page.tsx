import { Fragment, useEffect, useState } from 'react'

// components
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import ModelContainer from '@/components/model-container'
import { Stack } from '@mui/material'
import FakeApi from '@/api/fakeApi'
import { useParams } from 'react-router-dom'

const fetchProduct = async (productId: number) => {
  const products = await FakeApi.fetchProductById(productId)
  return products
}

const ProductDesignerPage = () => {
  const [product, setProduct] = useState<IProduct>({} as IProduct)

  const params = useParams()

  useEffect(() => {
    if (params.id) {
      fetchProduct(Number(params.id)).then(product => {
        setProduct(product)
      })
    }
  }, [params])

  return (
    <Stack sx={{ height: '100vh', width: '100%' }}>
      <Header />
      <ModelContainer product={product} />
      <Sidebar product={product} />
    </Stack>
  )
}

export default ProductDesignerPage
