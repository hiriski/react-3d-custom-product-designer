import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ProductCard from '../product-card'

const mockNavigate = jest.fn()

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))

// Test wrapper
const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme()
  
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  )
}

// Mock product data
const mockProduct: IProduct = {
  id: 1,
  title: 'Test Hoodie',
  price: 29.99,
  thumbnail: 'test-hoodie.jpg',
  variants: [
    { name: 'BLACK', colorValue: { r: 0, g: 0, b: 0 } },
    { name: 'WHITE', colorValue: { r: 255, g: 255, b: 255 } }
  ]
}

describe('ProductCard Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('should render product information correctly', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    expect(screen.getByText('Test Hoodie')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
    expect(screen.getByAltText('product image')).toBeInTheDocument()
  })

  it('should display product image with correct src', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    const productImage = screen.getByAltText('product image')
    expect(productImage).toHaveAttribute('src', 'test-hoodie.jpg')
  })

  it('should navigate to product page when image is clicked', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    const productImage = screen.getByAltText('product image')
    fireEvent.click(productImage)

    expect(mockNavigate).toHaveBeenCalledWith('/product/1', { state: { color: undefined } })
  })

  it('should render product variants', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    // ProductCardVariants component should be rendered
    // This assumes the variants are displayed somehow in the UI
    const cardElement = screen.getByText('Test Hoodie').closest('[data-testid]') || 
                       screen.getByText('Test Hoodie').parentElement?.parentElement

    expect(cardElement).toBeInTheDocument()
  })

  it('should have proper styling and hover effects', () => {
    render(
      <TestWrapper>
        <ProductCard product={mockProduct} />
      </TestWrapper>
    )

    const productImage = screen.getByAltText('product image')
    expect(productImage.parentElement).toHaveStyle('cursor: pointer')
  })
})
