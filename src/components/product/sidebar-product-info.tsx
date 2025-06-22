// components
import { FC, memo, useCallback, useMemo } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

// hooks
import { useProduct } from '@/hooks'

// constants
import { SIDEBAR_WIDTH } from '@/constants/designer.constant'
import { useMediaQuery, useTheme } from '@mui/material'

// icons
import ArrowDownIcon from '@/assets/icons/solar--alt-arrow-down-line-duotone.svg?react'

interface Props {
  product: IProduct
}

const SidebarProductInfo: FC<Props> = ({ product }) => {
  const theme = useTheme()
  const { selectedVariant, setShowProductInfo, showProductInfo } = useProduct()

  const matchSmallScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const visibleSidebarOnMobileView = useMemo(() => {
    return matchSmallScreen && showProductInfo
  }, [matchSmallScreen, showProductInfo])

  const onCloseProductInfo = useCallback(() => {
    setShowProductInfo(false)
  }, [showProductInfo])

  return (
    <Box
      sx={{
        bottom: 0,
        right: 0,
        display: 'flex',
        position: 'fixed',
        minHeight: '100vh',
        width: {
          xs: '100%',
          lg: SIDEBAR_WIDTH,
        },
        flexDirection: 'column',
        transition: theme => theme.transitions.create(['all']),

        ...(matchSmallScreen && {
          bottom: '-100vh',
        }),

        ...(visibleSidebarOnMobileView && {
          padding: 0,
          // mt: theme => theme.spacing(8),
          zIndex: 1000,
          bottom: '-100px !important',

          // bottom: 0,
        }),
      }}
    >
      <Box
        sx={{
          position: 'relative',
          flex: 1,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: theme.shadows[1],
          backgroundColor: theme.palette.background.paper,
          py: 4.4,
          px: 4,

          ...(visibleSidebarOnMobileView && {
            borderTopLeftRadius: theme => theme.spacing(3),
            borderTopRightRadius: theme => theme.spacing(3),
          }),
          ...(!visibleSidebarOnMobileView && {
            borderTopLeftRadius: theme => theme.spacing(3),
            borderBottomLeftRadius: theme => theme.spacing(3),
          }),
          zIndex: 1001,
        }}
      >
        <IconButton
          onClick={onCloseProductInfo}
          color='primary'
          size='small'
          sx={{
            position: 'absolute',
            top: -13,
            right: 100,
            backgroundColor: 'primary.main',
            boxShadow: theme => theme.shadows[2],
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            display: visibleSidebarOnMobileView ? 'inline-flex' : 'none',
          }}
        >
          <Box component={ArrowDownIcon} sx={{ height: 24, width: 24 }} />
        </IconButton>
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
              <Typography variant='body2' sx={{ lineHeight: 1.75 }}>
                {product.description}
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      {/* backdrop */}
      <Box
        onClick={onCloseProductInfo}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
          display: visibleSidebarOnMobileView ? 'block' : 'none',
        }}
      />
    </Box>
  )
}

export default memo(SidebarProductInfo)
