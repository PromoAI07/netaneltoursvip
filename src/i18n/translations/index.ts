import { en } from './en';
import { vi } from './vi';
import { ru } from './ru';
import { es } from './es';
import { ar } from './ar';
import { zh } from './zh';
import type { Language } from '../types';
import type { Translations } from './en';

export const translations: Record<Language, Translations> = { en, vi, ru, es, ar, zh };

export type { Translations };
export { en, vi, ru, es, ar, zh };
