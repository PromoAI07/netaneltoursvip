export type VisaStatus = 'visa-free' | 'voa' | 'evisa' | 'embassy';

export interface VisaInfo {
  status: VisaStatus;
  maxStay: string;
  cost: string;
  requirements: string[];
  officialLink?: string;
  notes?: string;
}

export interface VisaEntry {
  passport: string;
  destination: string;
  info: VisaInfo;
}

const statusLabels: Record<VisaStatus, string> = {
  'visa-free': 'Visa Free',
  voa: 'Visa on Arrival',
  evisa: 'eVisa Available',
  embassy: 'Embassy Visa Required'
};

export { statusLabels };

export const passportCountries = [
{ value: 'us', label: 'United States', flag: '🇺🇸' },
{ value: 'uk', label: 'United Kingdom', flag: '🇬🇧' },
{ value: 'eu', label: 'EU / Schengen', flag: '🇪🇺' },
{ value: 'il', label: 'Israel', flag: '🇮🇱' },
{ value: 'au', label: 'Australia', flag: '🇦🇺' },
{ value: 'ca', label: 'Canada', flag: '🇨🇦' }];


export const destinationCountries = [
{ value: 'th', label: 'Thailand', flag: '🇹🇭' },
{ value: 'vn', label: 'Vietnam', flag: '🇻🇳' },
{ value: 'jp', label: 'Japan', flag: '🇯🇵' },
{ value: 'id', label: 'Indonesia', flag: '🇮🇩' },
{ value: 'ph', label: 'Philippines', flag: '🇵🇭' },
{ value: 'in', label: 'India', flag: '🇮🇳' },
{ value: 'kh', label: 'Cambodia', flag: '🇰🇭' },
{ value: 'my', label: 'Malaysia', flag: '🇲🇾' },
{ value: 'kr', label: 'South Korea', flag: '🇰🇷' },
{ value: 'tr', label: 'Turkey', flag: '🇹🇷' },
{ value: 'gr', label: 'Greece', flag: '🇬🇷' },
{ value: 'pt', label: 'Portugal', flag: '🇵🇹' }];


// Visa data: passport → destination → info
export const visaDatabase: Record<string, Record<string, VisaInfo>> = {
  us: {
    th: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: [
      'Passport valid 6+ months',
      'Return/onward ticket',
      'Proof of accommodation'],

      officialLink: 'https://www.thaiembassy.com',
      notes: 'Can extend 30 more days at immigration office for ~1,900 THB.'
    },
    vn: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$25',
      requirements: [
      'Passport valid 6+ months',
      'Digital passport photo',
      'Online application'],

      officialLink: 'https://evisa.xuatnhapcanh.gov.vn',
      notes:
      'Single or multiple entry. Apply at least 3 business days before travel.'
    },
    jp: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid for duration of stay', 'Return ticket'],
      officialLink: 'https://www.mofa.go.jp'
    },
    id: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$35',
      requirements: [
      'Passport valid 6+ months',
      'Return ticket',
      'Payment at arrival'],

      officialLink: 'https://molina.imigrasi.go.id',
      notes: 'Extendable once for 30 more days. eVOA also available online.'
    },
    ph: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket'],
      officialLink: 'https://www.philippineembassy-usa.org'
    },
    in: {
      status: 'evisa',
      maxStay: '30-180 days',
      cost: '$10-$80',
      requirements: [
      'Passport valid 6+ months',
      'Digital photo',
      'Online application',
      'Hotel details'],

      officialLink: 'https://indianvisaonline.gov.in'
    },
    kh: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$30',
      requirements: [
      'Passport valid 6+ months',
      'Passport photo',
      'Cash payment'],

      officialLink: 'https://www.evisa.gov.kh',
      notes: 'eVisa also available online for $36.'
    },
    my: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    kr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'K-ETA registration ($10)'],
      officialLink: 'https://www.k-eta.go.kr',
      notes: 'K-ETA temporarily waived until Dec 2025.'
    },
    tr: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$50',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://www.evisa.gov.tr'
    },
    gr: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: [
      'Passport valid 3+ months beyond stay',
      'Schengen area rules apply']

    },
    pt: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: [
      'Passport valid 3+ months beyond stay',
      'Schengen area rules apply']

    }
  },
  uk: {
    th: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: [
      'Passport valid 6+ months',
      'Return ticket',
      'Proof of funds'],

      notes: 'Extendable at immigration for ~1,900 THB.'
    },
    vn: {
      status: 'visa-free',
      maxStay: '45 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months'],
      notes: 'UK passport holders get 45 days visa-free (extended in 2023).'
    },
    jp: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid for duration of stay']
    },
    id: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$35',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    ph: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    in: {
      status: 'evisa',
      maxStay: '30-180 days',
      cost: '$10-$80',
      requirements: [
      'Passport valid 6+ months',
      'Online application',
      'Digital photo'],

      officialLink: 'https://indianvisaonline.gov.in'
    },
    kh: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$30',
      requirements: ['Passport valid 6+ months', 'Passport photo']
    },
    my: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    kr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    tr: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$20',
      requirements: ['Passport valid 6+ months'],
      officialLink: 'https://www.evisa.gov.tr'
    },
    gr: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: ['Passport valid 3+ months beyond stay']
    },
    pt: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: ['Passport valid 3+ months beyond stay']
    }
  },
  eu: {
    th: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    vn: {
      status: 'visa-free',
      maxStay: '45 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months'],
      notes: 'Most EU passports qualify for 45-day visa exemption.'
    },
    jp: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid for duration of stay']
    },
    id: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$35',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    ph: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    in: {
      status: 'evisa',
      maxStay: '30-180 days',
      cost: '$10-$80',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://indianvisaonline.gov.in'
    },
    kh: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$30',
      requirements: ['Passport valid 6+ months', 'Passport photo']
    },
    my: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    kr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    tr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months'],
      notes: 'Most EU passports are visa-free for Turkey.'
    },
    gr: {
      status: 'visa-free',
      maxStay: 'Unlimited (EU)',
      cost: 'Free',
      requirements: ['EU passport or ID card'],
      notes: 'Freedom of movement within EU.'
    },
    pt: {
      status: 'visa-free',
      maxStay: 'Unlimited (EU)',
      cost: 'Free',
      requirements: ['EU passport or ID card'],
      notes: 'Freedom of movement within EU.'
    }
  },
  il: {
    th: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    vn: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$25',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://evisa.xuatnhapcanh.gov.vn'
    },
    jp: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid for duration of stay']
    },
    id: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$35',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    ph: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    in: {
      status: 'evisa',
      maxStay: '30-180 days',
      cost: '$10-$80',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://indianvisaonline.gov.in'
    },
    kh: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$30',
      requirements: ['Passport valid 6+ months', 'Passport photo']
    },
    my: {
      status: 'embassy',
      maxStay: 'Varies',
      cost: 'Varies',
      requirements: [
      'Passport valid 6+ months',
      'Embassy application required',
      'Invitation letter may be needed'],

      notes:
      'Malaysia does not have diplomatic relations with Israel. Entry may be difficult.'
    },
    kr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    tr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    gr: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: [
      'Passport valid 3+ months beyond stay',
      'Schengen area rules']

    },
    pt: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: [
      'Passport valid 3+ months beyond stay',
      'Schengen area rules']

    }
  },
  au: {
    th: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    vn: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$25',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://evisa.xuatnhapcanh.gov.vn'
    },
    jp: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid for duration of stay']
    },
    id: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$35',
      requirements: ['Passport valid 6+ months']
    },
    ph: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    in: {
      status: 'evisa',
      maxStay: '30-180 days',
      cost: '$10-$80',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://indianvisaonline.gov.in'
    },
    kh: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$30',
      requirements: ['Passport valid 6+ months']
    },
    my: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    kr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    tr: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$60',
      requirements: ['Passport valid 6+ months'],
      officialLink: 'https://www.evisa.gov.tr'
    },
    gr: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: ['Passport valid 3+ months beyond stay']
    },
    pt: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: ['Passport valid 3+ months beyond stay']
    }
  },
  ca: {
    th: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months', 'Return ticket']
    },
    vn: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$25',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://evisa.xuatnhapcanh.gov.vn'
    },
    jp: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid for duration of stay']
    },
    id: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$35',
      requirements: ['Passport valid 6+ months']
    },
    ph: {
      status: 'visa-free',
      maxStay: '30 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    in: {
      status: 'evisa',
      maxStay: '30-180 days',
      cost: '$10-$80',
      requirements: ['Passport valid 6+ months', 'Online application'],
      officialLink: 'https://indianvisaonline.gov.in'
    },
    kh: {
      status: 'voa',
      maxStay: '30 days',
      cost: '$30',
      requirements: ['Passport valid 6+ months']
    },
    my: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    kr: {
      status: 'visa-free',
      maxStay: '90 days',
      cost: 'Free',
      requirements: ['Passport valid 6+ months']
    },
    tr: {
      status: 'evisa',
      maxStay: '90 days',
      cost: '$60',
      requirements: ['Passport valid 6+ months'],
      officialLink: 'https://www.evisa.gov.tr'
    },
    gr: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: ['Passport valid 3+ months beyond stay']
    },
    pt: {
      status: 'visa-free',
      maxStay: '90 days in 180',
      cost: 'Free',
      requirements: ['Passport valid 3+ months beyond stay']
    }
  }
};