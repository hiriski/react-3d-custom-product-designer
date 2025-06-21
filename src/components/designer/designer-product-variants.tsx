import { FC, useCallback } from 'react'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'

// hooks
import { useDesign, useProduct } from '@/hooks'

interface Props {
  product: IProduct
}

const DesignerProductVariants: FC<Props> = ({ product }) => {
  const { selectedVariant, setSelectedVariant } = useProduct()
  const { currentColor, setCurrentColor, visibleUploadImage } = useDesign()

  const onChangeVariant = useCallback(
    (variant: IProductVariant) => {
      setCurrentColor(variant.colorValue)
      setSelectedVariant(variant.name)
    },
    [currentColor, selectedVariant]
  )

  if (product) {
    return (
      <Stack
        sx={{
          width: '100%',
          py: 2,
          transition: theme =>
            theme.transitions.create(['margin'], {
              duration: theme.transitions.duration.short,
            }),
          ...(visibleUploadImage && {
            margin: '0 0 -100px 0',
          }),
        }}
      >
        <Box
          component='ul'
          sx={theme => ({
            m: 0,
            gap: { xs: 0.5, sm: 0.8, md: 1 },
            py: {
              xs: 0.8,
              sm: 1,
              md: 1.8,
            },
            px: {
              xs: 1.8,
              sm: 2,
              lg: 3,
            },
            display: 'flex',
            flexWrap: 'wrap',
            borderRadius: 12,
            listStyle: 'none',
            backgroundColor: alpha(theme.palette.background.paper, 0.75),
            backdropFilter: 'blur(3px)',
          })}
        >
          {product?.variants?.map((item, index) => (
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
                  width: { xs: 22, sm: 26, lg: 32 },
                  height: { xs: 22, sm: 26, lg: 32 },
                  display: 'flex',
                  borderRadius: 6,
                  backgroundColor: alpha(
                    `rgb(${item.colorValue.r},${item.colorValue.g},${item.colorValue.b})`,
                    0.75
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

export default DesignerProductVariants
