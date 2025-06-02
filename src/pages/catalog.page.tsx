import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ProductCard from '@/components/product/product-card'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import FakeApi from '@/api/fakeApi'

// components

const fetchProducts = async () => {
  const products = await FakeApi.fetchProducts()
  return products
}

const CatalogPage = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    fetchProducts().then(products => {
      setProducts(products)
    })
  }, [])

  return (
    <Container maxWidth='md' sx={{ minHeight: '100vh' }}>
      <Stack
        sx={{
          pt: 12,
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          fontWeight: '800',
        }}
      >
        <Box
          component='img'
          src='/react.svg'
          alt='product image'
          sx={{
            width: 60,
            height: 60,
            mb: 1,
            transition: 'transform 1s',
            '&:hover': {
              transform: 'rotate(180deg)',
            },
          }}
        />
        <Typography
          variant='h2'
          component='h1'
          sx={{ fontWeight: '800', mb: 2 }}
        >
          Custom Products
        </Typography>
        <Typography>Choose the product you want to customize</Typography>
      </Stack>
      <Grid container spacing={3} sx={{ mt: 4, pb: 12 }}>
        {products.map((item, index) => (
          <Grid key={String(index)} size={{ xs: 12, md: 6 }}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  )
}

export default CatalogPage
