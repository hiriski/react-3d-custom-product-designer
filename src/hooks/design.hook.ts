// react
import { useContext } from 'react'

// context
import { DesignContext } from '@/contexts/designer.context'

export const useDesign = () => {
  const designContext = useContext(DesignContext)
  return {
    ...designContext,
  }
}
