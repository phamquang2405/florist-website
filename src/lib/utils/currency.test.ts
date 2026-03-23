import { formatCurrency } from '@/lib/utils/currency';

describe('formatCurrency', () => {
  it('formats a numeric value as USD currency', () => {
    expect(formatCurrency(89)).toBe('$89.00');
  });
});
