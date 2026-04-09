import { describe, it, expect } from 'vitest';
import { countryApps, CountryApps, Category } from '../data/countryApps';

const EXPECTED_CATEGORY_TYPES = ['Food Delivery', 'Ride Hailing', 'Navigation', 'Messaging', 'Payments', 'Entertainment'];

describe('countryApps', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(countryApps)).toBe(true);
    expect(countryApps.length).toBeGreaterThan(0);
  });

  it('every country has name and flag', () => {
    countryApps.forEach((country: CountryApps) => {
      expect(typeof country.name).toBe('string');
      expect(country.name.length).toBeGreaterThan(0);
      expect(typeof country.flag).toBe('string');
      expect(country.flag.length).toBeGreaterThan(0);
    });
  });

  it('every country has exactly 6 categories', () => {
    countryApps.forEach((country: CountryApps) => {
      expect(country.categories).toHaveLength(6);
    });
  });

  it('every country has all 6 required category types', () => {
    countryApps.forEach((country: CountryApps) => {
      const names = country.categories.map((c: Category) => c.name);
      EXPECTED_CATEGORY_TYPES.forEach((type) => {
        expect(names).toContain(type);
      });
    });
  });

  it('every category has at least one app', () => {
    countryApps.forEach((country: CountryApps) => {
      country.categories.forEach((cat: Category) => {
        expect(cat.apps.length).toBeGreaterThan(0);
      });
    });
  });

  it('every app has a name and a note', () => {
    countryApps.forEach((country: CountryApps) => {
      country.categories.forEach((cat: Category) => {
        cat.apps.forEach((app) => {
          expect(typeof app.name).toBe('string');
          expect(app.name.length).toBeGreaterThan(0);
          expect(typeof app.note).toBe('string');
        });
      });
    });
  });

  it('every category has required style properties', () => {
    countryApps.forEach((country: CountryApps) => {
      country.categories.forEach((cat: Category) => {
        expect(typeof cat.color).toBe('string');
        expect(cat.color.startsWith('bg-')).toBe(true);
        expect(typeof cat.borderColor).toBe('string');
        expect(cat.borderColor.startsWith('border-')).toBe(true);
        expect(typeof cat.iconBg).toBe('string');
        expect(cat.iconBg.startsWith('bg-')).toBe(true);
        expect(typeof cat.textColor).toBe('string');
        expect(cat.textColor.startsWith('text-')).toBe(true);
        expect(typeof cat.icon).toBe('string');
      });
    });
  });

  it('Food Delivery category in Thailand has GrabFood', () => {
    const thailand = countryApps.find((c) => c.name === 'Thailand')!;
    const food = thailand.categories.find((c) => c.name === 'Food Delivery')!;
    const appNames = food.apps.map((a) => a.name);
    expect(appNames).toContain('GrabFood');
  });

  it('Messaging category in Indonesia is WhatsApp-first', () => {
    const indonesia = countryApps.find((c) => c.name === 'Indonesia')!;
    const msg = indonesia.categories.find((c) => c.name === 'Messaging')!;
    expect(msg.apps[0].name).toBe('WhatsApp');
  });

  it('South Korea navigation includes Naver Map as first choice', () => {
    const korea = countryApps.find((c) => c.name === 'South Korea')!;
    const nav = korea.categories.find((c) => c.name === 'Navigation')!;
    expect(nav.apps[0].name).toBe('Naver Map');
  });

  it('Food Delivery categories use orange styling', () => {
    countryApps.forEach((country: CountryApps) => {
      const food = country.categories.find((c) => c.name === 'Food Delivery')!;
      expect(food.color).toContain('orange');
    });
  });

  it('Ride Hailing categories use blue styling', () => {
    countryApps.forEach((country: CountryApps) => {
      const ride = country.categories.find((c) => c.name === 'Ride Hailing')!;
      expect(ride.color).toContain('blue');
    });
  });
});
