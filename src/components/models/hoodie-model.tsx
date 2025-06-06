import { FC, memo, useEffect } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
// import * as THREE from 'three'

// hoodie model
import modelGltf from '@/assets/3d/hoodie.glb'

interface Props {
  color: IRgb
  imageUrl: string
}

const HoodieModel: FC<Props> = ({ color, imageUrl }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials } = useGLTF(modelGltf) as unknown

  const texture = useTexture(imageUrl)

  useEffect(() => {
    if (color.r < 5 && color.g < 5 && color.b < 5) {
      materials.material1.color.r = 5
      materials.material1.color.g = 5
      materials.material1.color.b = 5
    } else {
      materials.material1.color.r = color.r
      materials.material1.color.g = color.g
      materials.material1.color.b = color.b
    }
  }, [color])

  return (
    <group scale={4}>
      <mesh
        castShadow
        receiveShadow
        name='hoodie'
        geometry={nodes.Object_2.geometry}
        material={materials?.material1}
        position={[0, 0, 0]}
        rotation={[4.75, 0, -1.5]}
        dispose={null}
      >
        {texture && (
          <Decal
            position={[0.075, 0.08, 0.13]}
            rotation={-1}
            scale={0.15}
            map={texture}
            depthTest={true}
          />
        )}
      </mesh>
    </group>
  )
}

HoodieModel.displayName = 'HoodieModel'

export default memo(HoodieModel)
