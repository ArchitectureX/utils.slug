import slug from './index'

describe('slug', () => {
  it('should return an empty string for empty input', () => {
    expect(slug('')).toBe('')
  })

  it('should convert basic strings to slugs', () => {
    expect(slug('Hello World')).toBe('hello-world')
  })

  it('should remove special characters from slugs', () => {
    expect(slug('Hello, World!')).toBe('hello-world')
  })

  it('should remove diacritics from characters', () => {
    expect(slug('Café con Leche')).toBe('cafe-con-leche')
  })

  it('should handle multiple spaces and hyphens', () => {
    expect(slug('Hello   World--Test')).toBe('hello-world-test')
  })
})
