import { FC, memo, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
// import * as THREE from 'three'

// hoodie model
import modelGltf from '@/assets/3d/hoodie.glb'

interface Props {
  color: IRgb
}

const HoodieModel: FC<Props> = ({ color }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials } = useGLTF(modelGltf) as unknown

  // const logo = useTexture('/svelte-logo.png')

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
    <group scale={4.5}>
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
        {/* <Decal 
          position={[0.075, 0.08, 0.13]}
          rotation={-1}
          scale={0.15}
          map={logo}
          depthTest={true}
        /> */}

        {/* center */}
        {/* <Decal 
          // position={[0.02, 0, 0]}
          position={new THREE.Vector3(0.2, 0, 0)}
          rotation={-1}
          scale={0.4}
          map={logo}
          depthTest={true}
        /> */}
      </mesh>
    </group>
  )
}

HoodieModel.displayName = 'HoodieModel'

export default memo(HoodieModel)
