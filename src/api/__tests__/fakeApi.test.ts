import FakeApi from '../fakeApi'

// Mock the JSON import
jest.mock('../raw/products.json', () => [
  {
    id: 1,
    title: 'Test Hoodie',
    price: 29.99,
    thumbnail: 'test-hoodie.jpg',
    variants: [
      { name: 'BLACK', colorValue: { r: 0, g: 0, b: 0 } },
      { name: 'WHITE', colorValue: { r: 255, g: 255, b: 255 } }
    ]
  },
  {
    id: 2,
    title: 'Test T-Shirt',
    price: 19.99,
    thumbnail: 'test-tshirt.jpg',
    variants: [
      { name: 'RED', colorValue: { r: 255, g: 0, b: 0 } }
    ]
  }
])

describe('FakeApi', () => {
  describe('fetchProducts', () => {
    it('should return all products', async () => {
      const products = await FakeApi.fetchProducts()
      
      expect(products).toHaveLength(2)
      expect(products[0]).toHaveProperty('id', 1)
      expect(products[0]).toHaveProperty('title', 'Test Hoodie')
      expect(products[1]).toHaveProperty('id', 2)
      expect(products[1]).toHaveProperty('title', 'Test T-Shirt')
    })

    it('should return products with correct structure', async () => {
      const products = await FakeApi.fetchProducts()
      
      products.forEach(product => {
        expect(product).toHaveProperty('id')
        expect(product).toHaveProperty('title')
        expect(product).toHaveProperty('price')
        expect(product).toHaveProperty('thumbnail')
        expect(product).toHaveProperty('variants')
        expect(Array.isArray(product.variants)).toBe(true)
      })
    })
  })

  describe('fetchProductById', () => {
    it('should return correct product for valid ID', async () => {
      const product = await FakeApi.fetchProductById(1)
      
      expect(product).toHaveProperty('id', 1)
      expect(product).toHaveProperty('title', 'Test Hoodie')
      expect(product).toHaveProperty('price', 29.99)
    })

    it('should throw error for non-existent product ID', async () => {
      await expect(FakeApi.fetchProductById(999)).rejects.toThrow('Product not found')
    })

    it('should throw error for invalid ID types', async () => {
      await expect(FakeApi.fetchProductById(null as any)).rejects.toThrow('Product not found')
      await expect(FakeApi.fetchProductById(undefined as any)).rejects.toThrow('Product not found')
    })
  })
})
