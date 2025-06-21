import { useEffect, useState } from 'react'

// apis
import FakeApi from '@/api/fakeApi'

// components
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ProductCard from '@/components/product/product-card'
import Footer from '@/components/footer'

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
          mb: 5,
          pt: { xs: 4, md: 8 },
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
        <Stack sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography
            component='h1'
            sx={{
              fontWeight: '800',
              textAlign: 'center',
              lineHeight: 1.32,
              fontSize: {
                xs: 24,
                md: 28,
              },
            }}
          >
            React 3D <br /> Custom Product Designer
          </Typography>
        </Stack>
        <Typography sx={{ color: 'text.secondary' }}>
          Choose the product you want to customize
        </Typography>
      </Stack>
      <Grid container spacing={3} sx={{ mt: 4, pb: 12 }}>
        {products.map((item, index) => (
          <Grid key={String(index)} size={{ xs: 12, sm: 6 }}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Container>
  )
}

export default CatalogPage
