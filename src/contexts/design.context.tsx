import { TEXTURE_DEFAULT } from '@/constants/designer.constant'
import {
  FC,
  Dispatch,
  ReactNode,
  useState,
  SetStateAction,
  createContext,
} from 'react'

interface IDesignContext {
  currentColor: IRgb
  setCurrentColor: Dispatch<SetStateAction<IRgb>>
  visibleUploadImage: boolean
  setVisibleUploadImage: Dispatch<SetStateAction<boolean>>
  imageUrl: string
  setImageUrl: Dispatch<SetStateAction<string>>
}

const DEFAULT_COLOR: IRgb = {
  r: 18,
  g: 19,
  b: 22,
}

// Design context
export const DesignContext = createContext<IDesignContext>({} as IDesignContext)

interface Props {
  children: ReactNode
}

const DesignContextProvider: FC<Props> = ({ children }) => {
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

export default DesignContextProvider
