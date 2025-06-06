import { TEXTURE_DEFAULT } from '@/constants/designer.constant'
import { FC, ReactNode, useState, createContext } from 'react'

const DEFAULT_COLOR: IRgb = {
  r: 18,
  g: 19,
  b: 22,
}

// Design context
export const DesignContext = createContext<IDesignerContext>(
  {} as IDesignerContext
)

interface Props {
  children: ReactNode
}

const DesignerContextProvider: FC<Props> = ({ children }) => {
  const [currentColor, setCurrentColor] = useState<IRgb>(DEFAULT_COLOR)
  const [visibleUploadImage, setVisibleUploadImage] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>(TEXTURE_DEFAULT)

  return (
    <DesignContext.Provider
      value={{
        imageUrl,
        setImageUrl,
        currentColor,
        setCurrentColor,
        visibleUploadImage,
        setVisibleUploadImage,
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}

export default DesignerContextProvider
