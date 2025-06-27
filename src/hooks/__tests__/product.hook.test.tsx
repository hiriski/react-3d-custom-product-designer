import { renderHook } from '@testing-library/react'
import { ReactNode } from 'react'
import { useProduct } from '../product.hook'
import ProductProvider from '@/contexts/product.context'

// Test wrapper component
const createWrapper = () => {
  return ({ children }: { children: ReactNode }) => (
    <ProductProvider>{children}</ProductProvider>
  )
}

describe('useProduct hook', () => {
  it('should return product context values', () => {
    const wrapper = createWrapper()
    const { result } = renderHook(() => useProduct(), { wrapper })

    expect(result.current).toHaveProperty('selectedVariant')
    expect(result.current).toHaveProperty('setSelectedVariant')
    expect(result.current).toHaveProperty('listOfProducts')
    expect(result.current).toHaveProperty('setListOfProducts')
    expect(result.current).toHaveProperty('showProductInfo')
    expect(result.current).toHaveProperty('setShowProductInfo')
  })

  it('should have default values', () => {
    const wrapper = createWrapper()
    const { result } = renderHook(() => useProduct(), { wrapper })

    expect(result.current.selectedVariant).toBe('BLACK')
    expect(result.current.listOfProducts).toEqual([])
    expect(result.current.showProductInfo).toBe(null)
  })

  it('should provide setter functions', () => {
    const wrapper = createWrapper()
    const { result } = renderHook(() => useProduct(), { wrapper })

    expect(typeof result.current.setSelectedVariant).toBe('function')
    expect(typeof result.current.setListOfProducts).toBe('function')
    expect(typeof result.current.setShowProductInfo).toBe('function')
  })
})
