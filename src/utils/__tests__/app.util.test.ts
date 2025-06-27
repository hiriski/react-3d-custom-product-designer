import { mimeTypeToExtension } from '../app.uti'

describe('app.util', () => {
  describe('mimeTypeToExtension', () => {
    it('should return correct extension for valid MIME types', () => {
      expect(mimeTypeToExtension('image/jpeg')).toBe('jpg')
      expect(mimeTypeToExtension('image/png')).toBe('png')
      expect(mimeTypeToExtension('image/gif')).toBe('gif')
      expect(mimeTypeToExtension('image/webp')).toBe('webp')
      expect(mimeTypeToExtension('image/svg+xml')).toBe('svg')
      expect(mimeTypeToExtension('image/bmp')).toBe('bmp')
      expect(mimeTypeToExtension('image/tiff')).toBe('tiff')
    })

    it('should return empty string for invalid MIME types', () => {
      expect(mimeTypeToExtension('invalid/type')).toBe('')
      expect(mimeTypeToExtension('text/plain')).toBe('')
      expect(mimeTypeToExtension('')).toBe('')
    })

    it('should return empty string for undefined or null input', () => {
      expect(mimeTypeToExtension(undefined as any)).toBe('')
      expect(mimeTypeToExtension(null as any)).toBe('')
    })

    it('should be case sensitive', () => {
      expect(mimeTypeToExtension('IMAGE/JPEG')).toBe('')
      expect(mimeTypeToExtension('Image/Png')).toBe('')
    })
  })
})
