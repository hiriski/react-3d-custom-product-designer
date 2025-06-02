import { FC, memo, useEffect } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

// t-shirt model
import modelGltf from '@/assets/3d/tshirt.glb'

interface Props {
  color: IRgb
}

const TshirtModel: FC<Props> = ({ color }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials } = useGLTF(modelGltf) as unknown

  const logo = useTexture('/svelte-logo.png')

  useEffect(() => {
    if (color.r < 5 && color.g < 5 && color.b < 5) {
      materials.color.color.r = 5
      materials.color.color.g = 5
      materials.color.color.b = 5
    } else {
      materials.color.color.r = color.r
      materials.color.color.g = color.g
      materials.color.color.b = color.b
    }
  }, [color])

  return (
    <group scale={5.75}>
      <mesh
        castShadow
        receiveShadow
        name='tshirt'
        geometry={nodes.tshirt.geometry}
        material={materials.color}
        position={[0, 0.1, 0]}
        dispose={null}
      >
        {/* <Decal
          position={[genP(), 0.08, 0.13]}
          rotation={[0, 0, 0]}
          scale={genS()}
          map={logoTex}
          depthTest={true}
          // depthWrite={true}
        /> */}
      </mesh>
    </group>
  )
}

TshirtModel.displayName = 'TshirtModel'

export default memo(TshirtModel)
