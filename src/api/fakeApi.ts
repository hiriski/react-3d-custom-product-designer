import raw from './raw/products.json'
const products = raw as IProduct[]

const FakeApi = {
  fetchProducts: async (): Promise<IProduct[]> => {
    return Promise.resolve(products)
  },
  fetchProductById: async (id: number): Promise<IProduct> => {
    const product = products.find((product: IProduct) => product.id === id)
    if (!product) {
      throw new Error('Product not found')
    }
    return Promise.resolve(product)
  },
}

export default FakeApi
