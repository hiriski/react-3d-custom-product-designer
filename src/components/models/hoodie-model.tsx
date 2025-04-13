import { FC, memo, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

// hoodie model
import modelGltf from '@/assets/3d/hoodie.glb'

interface Props {
  color: IRgb
}

const HoodieModel: FC<Props> = ({ color }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { nodes, materials } = useGLTF(modelGltf) as unknown

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
    <group scale={4.7}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials?.material1}
        position={[0, 0, 0]}
        rotation={[4.75, 0, -1.5]}
        dispose={null}
      ></mesh>
    </group>
  )
}

HoodieModel.displayName = 'HoodieModel'

export default memo(HoodieModel)
