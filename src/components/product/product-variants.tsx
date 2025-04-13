import { useCallback } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

// hooks
import { useDesign, useProduct } from '@/hooks'

// utils
import { alpha } from '@mui/material/styles'

const ProductVariants = () => {
  const { product, selectedVariant, setSelectedVariant } = useProduct()
  const { currentColor, setCurrentColor } = useDesign()

  const onChangeVariant = useCallback(
    (variant: IProductVariant) => {
      setCurrentColor(variant.colorValue)
      setSelectedVariant(variant.name)
    },
    [currentColor, selectedVariant]
  )

  return (
    <Stack>
      <Box
        component='ul'
        sx={theme => ({
          gap: 1.2,
          py: 1.8,
          px: 3,
          display: 'flex',
          flexWrap: 'wrap',
          borderRadius: 12,
          listStyle: 'none',
          backgroundColor: alpha(theme.palette.background.paper, 0.85),
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
            onClick={() => onChangeVariant(item)}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                display: 'flex',
                borderRadius: 6,
                backgroundColor: alpha(
                  `rgb(${item.colorValue.r},${item.colorValue.g},${item.colorValue.b})`,
                  0.85
                ),
              }}
            />
            {/* <ProductVariantItem color={item.colorValue} /> */}
          </Box>
        ))}
      </Box>
    </Stack>
  )
}

export default ProductVariants
