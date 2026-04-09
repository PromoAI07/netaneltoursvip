import { describe, it, expect } from 'vitest';
import {
  getPackingList,
  tripTypes,
  durations,
  PackingCategory,
} from '../data/packingData';

describe('getPackingList', () => {
  it('returns an array of PackingCategory objects', () => {
    const list = getPackingList('beach', 'weekend');
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
    list.forEach((cat: PackingCategory) => {
      expect(cat).toHaveProperty('name');
      expect(cat).toHaveProperty('icon');
      expect(cat).toHaveProperty('items');
      expect(Array.isArray(cat.items)).toBe(true);
    });
  });

  it('always includes Documents, Clothing, Electronics, Toiletries, Health & Safety, Extras sections', () => {
    const list = getPackingList('city', '1week');
    const names = list.map((c) => c.name);
    expect(names).toContain('Documents');
    expect(names).toContain('Clothing');
    expect(names).toContain('Electronics');
    expect(names).toContain('Toiletries');
    expect(names).toContain('Health & Safety');
    expect(names).toContain('Extras');
  });

  describe('beach trip', () => {
    it('includes swimsuit in clothing', () => {
      const list = getPackingList('beach', '1week');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('swimsuit'))).toBe(true);
    });

    it('marks swimsuit as essential', () => {
      const list = getPackingList('beach', '1week');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const swimsuit = clothing.items.find((i) => i.name.toLowerCase().includes('swimsuit'));
      expect(swimsuit?.essential).toBe(true);
    });

    it('includes reef-safe sunscreen in extras', () => {
      const list = getPackingList('beach', '1week');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('sunscreen'))).toBe(true);
    });
  });

  describe('mountain trip', () => {
    it('includes hiking boots in clothing', () => {
      const list = getPackingList('mountain', '1week');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('hiking boots'))).toBe(true);
    });

    it('includes headlamp in extras', () => {
      const list = getPackingList('mountain', 'weekend');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('headlamp'))).toBe(true);
    });
  });

  describe('business trip', () => {
    it('includes dress shirts in clothing', () => {
      const list = getPackingList('business', '1week');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('dress shirts'))).toBe(true);
    });

    it('includes laptop in extras', () => {
      const list = getPackingList('business', '1week');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('laptop'))).toBe(true);
    });
  });

  describe('backpacking trip', () => {
    it('includes a padlock in extras', () => {
      const list = getPackingList('backpacking', '2weeks');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('padlock'))).toBe(true);
    });
  });

  describe('city trip', () => {
    it('includes comfortable walking shoes in clothing', () => {
      const list = getPackingList('city', 'weekend');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names.some((n) => n.toLowerCase().includes('walking shoes'))).toBe(true);
    });
  });

  describe('duration effects', () => {
    it('adds extra underwear set for 2-week trips', () => {
      const list = getPackingList('beach', '2weeks');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names).toContain('Extra underwear set');
    });

    it('adds laundry detergent sheets for 2-week trips', () => {
      const list = getPackingList('city', '2weeks');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names).toContain('Laundry detergent sheets');
    });

    it('adds travel laundry bag to extras for 2-week trips', () => {
      const list = getPackingList('mountain', '2weeks');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names).toContain('Travel laundry bag');
    });

    it('adds portable clothesline for 1-month trips', () => {
      const list = getPackingList('backpacking', '1month');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names).toContain('Portable clothesline');
    });

    it('adds extra power bank for 1-month trips', () => {
      const list = getPackingList('business', '1month');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names).toContain('Extra power bank');
    });

    it('does NOT add extra underwear set for weekend trips', () => {
      const list = getPackingList('beach', 'weekend');
      const clothing = list.find((c) => c.name === 'Clothing')!;
      const names = clothing.items.map((i) => i.name);
      expect(names).not.toContain('Extra underwear set');
    });

    it('does NOT add portable clothesline for 1-week trips', () => {
      const list = getPackingList('city', '1week');
      const extras = list.find((c) => c.name === 'Extras')!;
      const names = extras.items.map((i) => i.name);
      expect(names).not.toContain('Portable clothesline');
    });
  });

  describe('tripTypes and durations metadata', () => {
    it('exports all 5 trip types', () => {
      const values = tripTypes.map((t) => t.value);
      expect(values).toContain('beach');
      expect(values).toContain('city');
      expect(values).toContain('mountain');
      expect(values).toContain('backpacking');
      expect(values).toContain('business');
    });

    it('exports all 4 duration options', () => {
      const values = durations.map((d) => d.value);
      expect(values).toContain('weekend');
      expect(values).toContain('1week');
      expect(values).toContain('2weeks');
      expect(values).toContain('1month');
    });

    it('each trip type entry has value, label and icon', () => {
      tripTypes.forEach((t) => {
        expect(t).toHaveProperty('value');
        expect(t).toHaveProperty('label');
        expect(t).toHaveProperty('icon');
      });
    });

    it('each duration entry has value and label', () => {
      durations.forEach((d) => {
        expect(d).toHaveProperty('value');
        expect(d).toHaveProperty('label');
      });
    });
  });
});
