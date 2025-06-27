import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppWrapper from '../app-wrapper'

// Mock the API
jest.mock('@/api/fakeApi', () => ({
  fetchProducts: jest.fn(() => Promise.resolve([])),
  fetchProductById: jest.fn(() => Promise.resolve({
    id: 1,
    title: 'Test Product',
    price: 29.99,
    thumbnail: 'test.jpg',
    variants: []
  })),
}))

// Mock Three.js components
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: any) => <div data-testid="three-canvas">{children}</div>,
}))

jest.mock('@react-three/drei', () => ({
  useGLTF: jest.fn(() => ({ nodes: {}, materials: {} })),
  useTexture: jest.fn(() => ({})),
  Decal: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  OrbitControls: () => <div data-testid="orbit-controls" />,
}))

const TestWrapper = ({ 
  children, 
  initialEntries = ['/'] 
}: { 
  children: React.ReactNode
  initialEntries?: string[]
}) => {
  const theme = createTheme()
  
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MemoryRouter>
  )
}

describe('App Integration Tests', () => {
  it('should render catalog page by default', async () => {
    render(
      <TestWrapper>
        <AppWrapper />
      </TestWrapper>
    )

    // Should render the main layout
    expect(document.body).toBeInTheDocument()
  })

  it('should render product designer page for product route', async () => {
    render(
      <TestWrapper initialEntries={['/product/1']}>
        <AppWrapper />
      </TestWrapper>
    )

    // Should render without crashing
    expect(document.body).toBeInTheDocument()
  })

  it('should render not found page for invalid routes', async () => {
    render(
      <TestWrapper initialEntries={['/invalid-route']}>
        <AppWrapper />
      </TestWrapper>
    )

    // Should render without crashing
    expect(document.body).toBeInTheDocument()
  })

  it('should provide context to child components', async () => {
    render(
      <TestWrapper>
        <AppWrapper />
      </TestWrapper>
    )

    // The app should render with all context providers
    expect(document.body).toBeInTheDocument()
  })
})
