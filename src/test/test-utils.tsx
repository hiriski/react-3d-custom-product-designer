import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ProductProvider from '@/contexts/product.context'
import DesignerContextProvider from '@/contexts/designer.context'

// Create a custom theme for testing
const testTheme = createTheme({
  palette: {
    mode: 'light',
  },
})

// Custom render function that includes all providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={testTheme}>
        <CssBaseline />
        <ProductProvider>
          <DesignerContextProvider>
            {children}
          </DesignerContextProvider>
        </ProductProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { customRender as render }

// Helper function to create mock product data
export const createMockProduct = (overrides?: Partial<IProduct>): IProduct => ({
  id: 1,
  title: 'Mock Product',
  price: 29.99,
  thumbnail: 'mock-product.jpg',
  variants: [
    { name: 'BLACK', colorValue: { r: 0, g: 0, b: 0 } },
    { name: 'WHITE', colorValue: { r: 255, g: 255, b: 255 } }
  ],
  ...overrides,
})

// Helper function to create mock color
export const createMockColor = (overrides?: Partial<IColor>): IColor => ({
  r: 255,
  g: 255,
  b: 255,
  ...overrides,
})

// Mock Three.js components for testing
export const mockThreeComponents = () => {
  // Mock useGLTF hook
  jest.mock('@react-three/drei', () => ({
    ...jest.requireActual('@react-three/drei'),
    useGLTF: jest.fn(() => ({
      nodes: {
        Object_2: {
          geometry: {},
        },
      },
      materials: {
        material1: {
          color: { r: 1, g: 1, b: 1 },
        },
      },
    })),
    useTexture: jest.fn(() => ({})),
    Decal: ({ children, ...props }: any) => <div data-testid="decal" {...props}>{children}</div>,
  }))

  // Mock Three.js Canvas
  jest.mock('@react-three/fiber', () => ({
    ...jest.requireActual('@react-three/fiber'),
    Canvas: ({ children, ...props }: any) => (
      <div data-testid="three-canvas" {...props}>
        {children}
      </div>
    ),
  }))
}
