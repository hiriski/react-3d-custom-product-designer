import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Footer from '../footer'

// Mock window.open
const mockWindowOpen = jest.fn()
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true,
})

// Test wrapper with theme
const TestWrapper = ({ children, mode = 'light' }: { children: React.ReactNode; mode?: 'light' | 'dark' }) => {
  const theme = createTheme({
    palette: {
      mode,
    },
  })
  
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

describe('Footer Component', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear()
  })

  it('should render footer image', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )

    const footerImage = screen.getByAltText('Copyright')
    expect(footerImage).toBeInTheDocument()
    expect(footerImage).toHaveAttribute('src', expect.stringContaining('banner-copyright-light'))
  })

  it('should use dark theme image when theme is dark', () => {
    render(
      <TestWrapper mode="dark">
        <Footer />
      </TestWrapper>
    )

    const footerImage = screen.getByAltText('Copyright')
    expect(footerImage).toHaveAttribute('src', expect.stringContaining('banner-copyright-dark'))
  })

  it('should open GitHub profile when clicked', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )

    const footerImage = screen.getByAltText('Copyright')
    fireEvent.click(footerImage)

    expect(mockWindowOpen).toHaveBeenCalledWith('https://github.com/hiriski', '_blank')
  })

  it('should have proper styling and cursor pointer', () => {
    render(
      <TestWrapper>
        <Footer />
      </TestWrapper>
    )

    const footerImage = screen.getByAltText('Copyright')
    expect(footerImage).toHaveStyle('cursor: pointer')
    expect(footerImage).toHaveStyle('width: 100%')
  })
})
