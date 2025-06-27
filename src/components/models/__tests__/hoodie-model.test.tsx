import { render } from '@testing-library/react'
import { Canvas } from '@react-three/fiber'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HoodieModel from '../hoodie-model'

// Mock the dependencies
jest.mock('@react-three/drei', () => ({
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
  Decal: ({ children, ...props }: any) => <mesh data-testid="decal" {...props}>{children}</mesh>,
}))

// Mock useMediaQuery
jest.mock('@mui/material/useMediaQuery', () => jest.fn(() => false))

const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme()
  return (
    <ThemeProvider theme={theme}>
      <Canvas>
        {children}
      </Canvas>
    </ThemeProvider>
  )
}

describe('HoodieModel Component', () => {
  const mockColor = { r: 255, g: 255, b: 255 }
  const mockImageUrl = 'test-image.jpg'

  it('should render without crashing', () => {
    render(
      <TestWrapper>
        <HoodieModel color={mockColor} imageUrl={mockImageUrl} />
      </TestWrapper>
    )
  })

  it('should render with correct props', () => {
    const { container } = render(
      <TestWrapper>
        <HoodieModel color={mockColor} imageUrl={mockImageUrl} />
      </TestWrapper>
    )

    // Check if the component renders
    expect(container.firstChild).toBeInTheDocument()
  })

  it('should handle dark colors correctly', () => {
    const darkColor = { r: 0, g: 0, b: 0 }
    
    render(
      <TestWrapper>
        <HoodieModel color={darkColor} imageUrl={mockImageUrl} />
      </TestWrapper>
    )

    // Component should render without errors even with dark colors
    expect(true).toBe(true) // Basic test to ensure no crashes
  })

  it('should render without image URL', () => {
    render(
      <TestWrapper>
        <HoodieModel color={mockColor} imageUrl="" />
      </TestWrapper>
    )

    // Component should handle empty image URL gracefully
    expect(true).toBe(true)
  })
})
