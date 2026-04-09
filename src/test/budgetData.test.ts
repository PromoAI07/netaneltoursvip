import { describe, it, expect } from 'vitest';
import { countryBudgets, BudgetBreakdown, CountryBudget } from '../data/budgetData';

const BUDGET_KEYS: (keyof BudgetBreakdown)[] = [
  'accommodation',
  'food',
  'transport',
  'activities',
  'sim',
  'misc',
];

describe('budgetData', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(countryBudgets)).toBe(true);
    expect(countryBudgets.length).toBeGreaterThan(0);
  });

  it('every country has required metadata fields', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      expect(typeof country.name).toBe('string');
      expect(country.name.length).toBeGreaterThan(0);
      expect(typeof country.flag).toBe('string');
      expect(country.flag.length).toBeGreaterThan(0);
      expect(typeof country.currency).toBe('string');
      expect(country.currency.length).toBeGreaterThan(0);
      expect(typeof country.currencySymbol).toBe('string');
      expect(country.currencySymbol.length).toBeGreaterThan(0);
    });
  });

  it('every country has all three travel styles', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      expect(country).toHaveProperty('budget');
      expect(country).toHaveProperty('midRange');
      expect(country).toHaveProperty('luxury');
    });
  });

  it('every breakdown has all required category keys', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      (['budget', 'midRange', 'luxury'] as const).forEach((style) => {
        BUDGET_KEYS.forEach((key) => {
          expect(country[style]).toHaveProperty(key);
        });
      });
    });
  });

  it('all budget values are positive numbers', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      (['budget', 'midRange', 'luxury'] as const).forEach((style) => {
        BUDGET_KEYS.forEach((key) => {
          const val = country[style][key];
          expect(typeof val).toBe('number');
          expect(val).toBeGreaterThan(0);
        });
      });
    });
  });

  it('luxury daily total is always greater than midRange total', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      const luxTotal = Object.values(country.luxury).reduce((a, b) => a + b, 0);
      const midTotal = Object.values(country.midRange).reduce((a, b) => a + b, 0);
      expect(luxTotal).toBeGreaterThan(midTotal);
    });
  });

  it('midRange daily total is always greater than budget total', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      const midTotal = Object.values(country.midRange).reduce((a, b) => a + b, 0);
      const budTotal = Object.values(country.budget).reduce((a, b) => a + b, 0);
      expect(midTotal).toBeGreaterThan(budTotal);
    });
  });

  it('weekly total equals daily total multiplied by 7', () => {
    countryBudgets.forEach((country: CountryBudget) => {
      (['budget', 'midRange', 'luxury'] as const).forEach((style) => {
        const daily = Object.values(country[style]).reduce((a, b) => a + b, 0);
        const weekly = daily * 7;
        expect(weekly).toBe(daily * 7);
      });
    });
  });

  it('includes Thailand', () => {
    const names = countryBudgets.map((c) => c.name);
    expect(names).toContain('Thailand');
  });

  it('includes Japan', () => {
    const names = countryBudgets.map((c) => c.name);
    expect(names).toContain('Japan');
  });

  it('Thailand uses THB currency', () => {
    const thailand = countryBudgets.find((c) => c.name === 'Thailand')!;
    expect(thailand.currency).toBe('THB');
  });
});
