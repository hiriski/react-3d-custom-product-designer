import { FC, memo, useCallback } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import ProductCardVariants from './product-card-variants'

// router
import { useNavigate } from 'react-router-dom'

interface Props {
  product: IProduct
}
const ProductCard: FC<Props> = ({ product }) => {
  const navigation = useNavigate()

  const onClick = useCallback(
    (color?: IProductVariant) => {
      navigation(`/product/${product.id}`, { state: { color } })
    },
    [product?.id]
  )

  return (
    <Box
      sx={{
        p: 1.4,
        display: 'flex',
        borderRadius: 6,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'background.paper',
        boxShadow: 1,
        '&:hover': {
          boxShadow: 2,
          cursor: 'pointer',
          '.product-img': {
            transform: 'scale(1.1)',
            transformOrigin: 'center center',
          },
        },
      }}
    >
      <Box
        sx={{
          borderRadius: 4.2,
          lineHeight: 0,
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => onClick()}
      >
        <Box
          className='product-img'
          component='img'
          src={product.thumbnail}
          alt='product image'
          sx={{
            width: '100%',
            height: 'auto',
            transition: theme =>
              theme.transitions.create(['transform'], {
                duration: theme.transitions.duration.short,
              }),
          }}
        />
      </Box>
      <Stack direction='column' sx={{ px: 2, pt: 0.4, pb: 1.2 }}>
        <ProductCardVariants onClick={onClick} />
        <Typography sx={{ fontSize: 17, fontWeight: '700', mb: 0.5 }}>
          {product.title}
        </Typography>
        <Typography variant='body2' sx={{ fontWeight: '700' }}>
          ${product.price}
        </Typography>
      </Stack>
    </Box>
  )
}

export default memo(ProductCard)
