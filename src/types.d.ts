import { Dispatch, SetStateAction } from 'react'

declare global {
  interface IRgb {
    r: number
    g: number
    b: number
  }

  type ProductVariantColor =
    | 'BLACK'
    | 'BLUE'
    | 'GREEN'
    | 'GREY'
    | 'YELLOW'
    | 'RED'
    | 'WHITE'

  // please, i wanna use interface instead of type :(
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IProductColor extends Record<ProductVariantColor, IRgb> {}

  interface IProductVariant {
    name: ProductVariantColor
    colorValue: IRgb
  }

  interface IProduct {
    id: number
    title: string
    description: string
    categories: string[]
    price: string
    variants: IProductVariant[]
    thumbnail: string
  }

  interface IDesignerContext {
    currentColor: IRgb
    setCurrentColor: Dispatch<SetStateAction<IRgb>>
    visibleUploadImage: boolean
    setVisibleUploadImage: Dispatch<SetStateAction<boolean>>
    imageUrl: string
    setImageUrl: Dispatch<SetStateAction<string>>
  }

  interface IProductContext {
    listOfProducts: IProduct[]
    setListOfProducts: Dispatch<SetStateAction<IProduct[]>>
    selectedVariant: ProductVariantColor
    setSelectedVariant: Dispatch<SetStateAction<ProductVariantColor>>
  }
}

export {}
