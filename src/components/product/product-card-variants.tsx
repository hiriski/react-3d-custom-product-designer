import { FC } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

// hooks
import { useProduct } from '@/hooks'

// utils
import { alpha } from '@mui/material/styles'

interface Props {
  product: IProduct
  onClick: (color: IProductVariant) => void
}

const ProductCardVariants: FC<Props> = ({ product, onClick }) => {
  const { selectedVariant } = useProduct()

  if (product) {
    return (
      <Stack sx={{ width: '100%' }}>
        <Box
          component='ul'
          sx={() => ({
            p: 0,
            gap: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
          })}
        >
          {product.variants.map((item, index) => (
            <Box
              component='li'
              key={String(index)}
              aria-label={item.name}
              sx={theme => ({
                p: 0.2,
                boxShadow: 1,
                borderWidth: 3,
                borderRadius: 8,
                cursor: 'pointer',
                borderStyle: 'solid',
                borderColor: 'transparent',
                backgroundColor: theme.palette.background.paper,
                ...(selectedVariant === item.name && {
                  borderColor: `rgb(${item.colorValue.r},${item.colorValue.g},${item.colorValue.b})`,
                }),
              })}
              onClick={() => onClick(item)}
            >
              <Box
                sx={{
                  width: {
                    xs: 20,
                    sm: 24,
                    md: 30,
                  },
                  height: {
                    xs: 20,
                    sm: 24,
                    md: 30,
                  },
                  display: 'flex',
                  borderRadius: 6,
                  backgroundColor: alpha(
                    `rgb(${item.colorValue.r},${item.colorValue.g},${item.colorValue.b})`,
                    0.85
                  ),
                }}
              />
            </Box>
          ))}
        </Box>
      </Stack>
    )
  }
}

export default ProductCardVariants
