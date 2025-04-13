interface IRgb {
  r: number
  g: number
  b: number
}

type AvailableProductColor =
  | 'BLACK'
  | 'BLUE'
  | 'GREEN'
  | 'GREY'
  | 'YELLOW'
  | 'WHITE'

// please, i wanna use interface instead of type :(
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProductColor extends Record<AvailableProductColor, IRgb> {}

interface IProductVariant {
  name: AvailableProductColor
  colorValue: IRgb
}

interface IProduct {
  title: string
  description: string
  features: string[]
  price: string
  variants: IProductVariant[]
}
