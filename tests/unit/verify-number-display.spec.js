import { commaHandler } from '@/helpers/common';

describe('add comma every 3 digits of numbers', () => {
  test('should add comma every 3 digits of numbers', () => {
    expect(commaHandler(999)).toBe('999');
    expect(commaHandler(9999)).toBe('9,999');
    expect(commaHandler(999999)).toBe('999,999');
    expect(commaHandler(9999999)).toBe('9,999,999');
  });

  test('should not add comma for under 3 digits number', () => {
    expect(commaHandler(999)).toBe('999');
    expect(commaHandler(0)).toBe('0');
  });
});
