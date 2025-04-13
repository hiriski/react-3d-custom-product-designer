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

  return (
    <DesignContext.Provider value={{ currentColor, setCurrentColor }}>
      {children}
    </DesignContext.Provider>
  )
}

export default DesignContextProvider
