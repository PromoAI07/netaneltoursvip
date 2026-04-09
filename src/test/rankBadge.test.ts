import { describe, it, expect } from 'vitest';
import { getRankBadgeClass } from '../utils/rankBadge';

describe('getRankBadgeClass', () => {
  it('returns gold classes for index 0', () => {
    const cls = getRankBadgeClass(0);
    expect(cls).toContain('yellow');
  });

  it('returns silver/grey classes for index 1', () => {
    const cls = getRankBadgeClass(1);
    expect(cls).toContain('gray-100');
    expect(cls).toContain('gray-600');
  });

  it('returns bronze/orange classes for index 2', () => {
    const cls = getRankBadgeClass(2);
    expect(cls).toContain('orange');
  });

  it('returns default grey classes for index 3', () => {
    const cls = getRankBadgeClass(3);
    expect(cls).toContain('gray-50');
    expect(cls).toContain('gray-500');
  });

  it('returns default grey classes for a large index', () => {
    const cls = getRankBadgeClass(99);
    expect(cls).toContain('gray-50');
  });

  it('returns default grey classes for negative index', () => {
    const cls = getRankBadgeClass(-1);
    expect(cls).toContain('gray-50');
  });

  it('returns a non-empty string for every index 0-5', () => {
    for (let i = 0; i <= 5; i++) {
      expect(getRankBadgeClass(i).length).toBeGreaterThan(0);
    }
  });
});
