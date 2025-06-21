import { FC, Suspense, useCallback } from 'react'

// react three
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// components
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DesignerUploadImage from './designer/designer-upload-image'
import DesignerProductVariants from './designer/designer-product-variants'

// hooks
import { useDesign, useProduct } from '@/hooks'
import Preloader from './preload'

// model components
import TshirtModel from './models/tshirt-model'
import HoodieModel from './models/hoodie-model'
import { SIDEBAR_WIDTH } from '@/constants/designer.constant'

// icons
import InfoIcon from '@/assets/icons/heroicons--information-circle-20-solid.svg'

interface Props {
  product: IProduct
}

const ModelContainer: FC<Props> = ({ product }) => {
  const { currentColor, imageUrl } = useDesign()

  const { setShowProductInfo, showProductInfo } = useProduct()

  const defineModelComponent = useCallback(() => {
    if (product.id === 1) {
      return <HoodieModel color={currentColor} imageUrl={imageUrl} />
    } else if (product.id === 2) {
      return <TshirtModel color={currentColor} imageUrl={imageUrl} />
    } else {
      return null
    }
  }, [product, currentColor, imageUrl])

  const onClickToggleSidebar = useCallback(() => {
    setShowProductInfo(!showProductInfo)
  }, [showProductInfo])

  if (product) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: {
            xs: '100vh',
            lg: '100%',
          },
          width: '100%',
          pr: {
            xs: 0,
            lg: `${SIDEBAR_WIDTH}px`,
          },
        }}
      >
        <Canvas
          shadows
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 18,
            position: [0, 2, 16],
          }}
        >
          <Suspense fallback={<Preloader />}>
            <hemisphereLight
              isLight={true}
              groundColor={'#000'}
              intensity={0.01}
            />
            {defineModelComponent()}
            <OrbitControls
              target={[0, 0.4, 0]}
              maxDistance={30}
              minDistance={8}
              maxPolarAngle={Math.PI / 1.94}
              minPolarAngle={Math.PI / 4}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
        <Stack sx={{ position: 'absolute', bottom: 6 }}>
          <DesignerUploadImage />
          <DesignerProductVariants product={product} />
        </Stack>

        <Stack
          sx={{
            display: { xs: 'block', lg: 'none' },
            position: 'absolute',
            bottom: 28,
            right: { xs: 4, sm: 8 },
          }}
        >
          <IconButton onClick={onClickToggleSidebar}>
            <Box
              component='img'
              src={InfoIcon}
              sx={{ height: 24, width: 24 }}
            />
          </IconButton>
        </Stack>
      </Box>
    )
  }
}

export default ModelContainer
