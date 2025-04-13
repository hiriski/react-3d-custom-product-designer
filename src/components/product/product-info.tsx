// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// hooks
import { useProduct } from '@/hooks'

const ProductInformation = () => {
  const { product, selectedVariant } = useProduct()
  return (
    <Stack gap={3}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Stack>
          <Typography variant='h4' gutterBottom>
            {product.title}
          </Typography>
          <Typography variant='h6'>( {selectedVariant} )</Typography>
        </Stack>
        <Stack sx={{ marginLeft: 'auto' }}>
          <Typography variant='h5'>${product.price}</Typography>
        </Stack>
      </Box>
      <Divider />
      <Stack>
        <Typography variant='h6'>About this product</Typography>
        <Box component='ul' sx={{ pl: 2 }}>
          {product.features.map((item, index) => (
            <Box component='li' key={String(index)} sx={{ mb: 1 }}>
              <Typography variant='body2'>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </Stack>
  )
}

export default ProductInformation
