import { FC, Suspense, useCallback } from 'react'

// react three
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// components

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import ProductVariants from './product/product-variants'

// hooks
import { useDesign } from '@/hooks'
import Preloader from './preload'

// model components
import TshirtModel from './models/tshirt-model'
import HoodieModel from './models/hoodie-model'

interface Props {
  product: IProduct
}

const ModelContainer: FC<Props> = ({ product }) => {
  const { currentColor } = useDesign()

  const defineModelComponent = useCallback(() => {
    if (product.id === 1) {
      return <HoodieModel color={currentColor} />
    } else if (product.id === 2) {
      return <TshirtModel color={currentColor} />
    } else {
      return null
    }
  }, [product, currentColor])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        paddingRight: '640px',
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
        <ProductVariants />
      </Stack>
    </Box>
  )
}

export default ModelContainer
