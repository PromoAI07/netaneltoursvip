import { describe, it, expect } from 'vitest';
import {
  visaDatabase,
  passportCountries,
  destinationCountries,
  statusLabels,
  VisaStatus,
  VisaInfo,
} from '../data/visaData';

const validStatuses: VisaStatus[] = ['visa-free', 'voa', 'evisa', 'embassy'];

describe('visaData', () => {
  describe('passportCountries', () => {
    it('is a non-empty array', () => {
      expect(passportCountries.length).toBeGreaterThan(0);
    });

    it('each entry has value, label and flag', () => {
      passportCountries.forEach((c) => {
        expect(c).toHaveProperty('value');
        expect(typeof c.value).toBe('string');
        expect(c).toHaveProperty('label');
        expect(typeof c.label).toBe('string');
        expect(c).toHaveProperty('flag');
        expect(typeof c.flag).toBe('string');
      });
    });

    it('includes Israel (il)', () => {
      const values = passportCountries.map((c) => c.value);
      expect(values).toContain('il');
    });

    it('includes the United States (us)', () => {
      const values = passportCountries.map((c) => c.value);
      expect(values).toContain('us');
    });
  });

  describe('destinationCountries', () => {
    it('is a non-empty array', () => {
      expect(destinationCountries.length).toBeGreaterThan(0);
    });

    it('each entry has value, label and flag', () => {
      destinationCountries.forEach((c) => {
        expect(c).toHaveProperty('value');
        expect(c).toHaveProperty('label');
        expect(c).toHaveProperty('flag');
      });
    });

    it('includes Thailand (th)', () => {
      const values = destinationCountries.map((c) => c.value);
      expect(values).toContain('th');
    });

    it('includes Japan (jp)', () => {
      const values = destinationCountries.map((c) => c.value);
      expect(values).toContain('jp');
    });
  });

  describe('statusLabels', () => {
    it('has a label for every valid VisaStatus', () => {
      validStatuses.forEach((status) => {
        expect(statusLabels).toHaveProperty(status);
        expect(typeof statusLabels[status]).toBe('string');
        expect(statusLabels[status].length).toBeGreaterThan(0);
      });
    });
  });

  describe('visaDatabase', () => {
    it('has an entry for every passport country', () => {
      const passportValues = passportCountries.map((c) => c.value);
      passportValues.forEach((passport) => {
        expect(visaDatabase).toHaveProperty(passport);
      });
    });

    it('each passport entry covers every destination country', () => {
      const destValues = destinationCountries.map((c) => c.value);
      const passportValues = passportCountries.map((c) => c.value);
      passportValues.forEach((passport) => {
        destValues.forEach((dest) => {
          expect(visaDatabase[passport]).toHaveProperty(dest);
        });
      });
    });

    it('every visa entry has required fields', () => {
      Object.values(visaDatabase).forEach((destinations) => {
        Object.values(destinations).forEach((info: VisaInfo) => {
          expect(validStatuses).toContain(info.status);
          expect(typeof info.maxStay).toBe('string');
          expect(info.maxStay.length).toBeGreaterThan(0);
          expect(typeof info.cost).toBe('string');
          expect(info.cost.length).toBeGreaterThan(0);
          expect(Array.isArray(info.requirements)).toBe(true);
          expect(info.requirements.length).toBeGreaterThan(0);
        });
      });
    });

    it('Israel (il) → Malaysia (my) entry has embassy status', () => {
      // Known diplomatic situation
      expect(visaDatabase.il.my.status).toBe('embassy');
    });

    it('EU → Greece (gr) entry is visa-free with unlimited stay', () => {
      const entry = visaDatabase.eu.gr;
      expect(entry.status).toBe('visa-free');
      expect(entry.maxStay.toLowerCase()).toContain('unlimited');
    });

    it('US → Vietnam (vn) entry is evisa', () => {
      expect(visaDatabase.us.vn.status).toBe('evisa');
    });
  });
});
