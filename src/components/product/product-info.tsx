// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

// hooks
import { useProduct } from '@/hooks'
import { FC } from 'react'

interface Props {
  product: IProduct
}

const ProductInformation: FC<Props> = ({ product }) => {
  const { selectedVariant } = useProduct()
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
        <Typography variant='h5' sx={{ mb: 2 }}>
          About this product
        </Typography>
        <Box sx={{}}>
          <Typography variant='body2'>{product.description}</Typography>
        </Box>
      </Stack>
    </Stack>
  )
}

export default ProductInformation
