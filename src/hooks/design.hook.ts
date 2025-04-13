// react
import { useContext } from 'react'

// context
import { DesignContext } from '@/contexts/design.context'

export const useDesign = () => {
  const designContext = useContext(DesignContext)
  return {
    ...designContext,
  }
}
