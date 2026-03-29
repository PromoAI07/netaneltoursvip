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
{ value: 'au', label: 'Australia', flag: '🇦🇺' },
{ value: 'ca', label: 'Canada', flag: '🇨🇦' },
{ value: 'nz', label: 'New Zealand', flag: '🇳🇿' },
{ value: 'sg', label: 'Singapore', flag: '🇸🇬' },
{ value: 'jp', label: 'Japan', flag: '🇯🇵' },
{ value: 'kr', label: 'South Korea', flag: '🇰🇷' },
{ value: 'br', label: 'Brazil', flag: '🇧🇷' },
{ value: 'mx', label: 'Mexico', flag: '🇲🇽' },
{ value: 'za', label: 'South Africa', flag: '🇿🇦' },
{ value: 'ar', label: 'Argentina', flag: '🇦🇷' },
{ value: 'ae', label: 'UAE', flag: '🇦🇪' },
{ value: 'de', label: 'Germany', flag: '🇩🇪' }];


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
  },
  nz: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months', 'Return ticket'] },
    vn: { status: 'evisa', maxStay: '90 days', cost: '$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://evisa.xuatnhapcanh.gov.vn' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'voa', maxStay: '30 days', cost: '$35', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'evisa', maxStay: '90 days', cost: '$60', requirements: ['Passport valid 6+ months'], officialLink: 'https://www.evisa.gov.tr' },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  sg: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    vn: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'Singapore passport holders get 30 days visa-free.' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'Visa-free under ASEAN agreement.' },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'Visa-free under ASEAN agreement.' },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  jp: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    vn: { status: 'visa-free', maxStay: '15 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'Japanese passport holders get 15 days visa-free.' },
    id: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  kr: {
    th: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    vn: { status: 'visa-free', maxStay: '45 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'South Korean passport holders get 45 days visa-free.' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  br: {
    th: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    vn: { status: 'evisa', maxStay: '90 days', cost: '$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://evisa.xuatnhapcanh.gov.vn' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'], notes: 'Visa exemption agreement between Brazil and Japan.' },
    id: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  mx: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months', 'Return ticket'] },
    vn: { status: 'evisa', maxStay: '90 days', cost: '$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://evisa.xuatnhapcanh.gov.vn' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'], notes: 'Mexico has a visa exemption agreement with Japan.' },
    id: { status: 'voa', maxStay: '30 days', cost: '$35', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'evisa', maxStay: '90 days', cost: '$50', requirements: ['Passport valid 6+ months'], officialLink: 'https://www.evisa.gov.tr' },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  za: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months', 'Return ticket'] },
    vn: { status: 'evisa', maxStay: '90 days', cost: '$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://evisa.xuatnhapcanh.gov.vn' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'voa', maxStay: '30 days', cost: '$35', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  ar: {
    th: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    vn: { status: 'evisa', maxStay: '90 days', cost: '$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://evisa.xuatnhapcanh.gov.vn' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  ae: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    vn: { status: 'evisa', maxStay: '90 days', cost: '$25', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://evisa.xuatnhapcanh.gov.vn' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'voa', maxStay: '30 days', cost: '$35', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-60 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    gr: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] },
    pt: { status: 'visa-free', maxStay: '90 days in 180', cost: 'Free', requirements: ['Passport valid 3+ months beyond stay'] }
  },
  de: {
    th: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months', 'Return ticket'] },
    vn: { status: 'visa-free', maxStay: '45 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'German passport holders get 45 days visa-free.' },
    jp: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid for duration of stay'] },
    id: { status: 'voa', maxStay: '30 days', cost: '$35', requirements: ['Passport valid 6+ months'] },
    ph: { status: 'visa-free', maxStay: '30 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    in: { status: 'evisa', maxStay: '30-180 days', cost: '$10-$80', requirements: ['Passport valid 6+ months', 'Online application'], officialLink: 'https://indianvisaonline.gov.in' },
    kh: { status: 'voa', maxStay: '30 days', cost: '$30', requirements: ['Passport valid 6+ months', 'Passport photo'] },
    my: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    kr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'] },
    tr: { status: 'visa-free', maxStay: '90 days', cost: 'Free', requirements: ['Passport valid 6+ months'], notes: 'German passport holders are visa-free for Turkey.' },
    gr: { status: 'visa-free', maxStay: 'Unlimited (EU)', cost: 'Free', requirements: ['EU passport or ID card'], notes: 'Freedom of movement within EU.' },
    pt: { status: 'visa-free', maxStay: 'Unlimited (EU)', cost: 'Free', requirements: ['EU passport or ID card'], notes: 'Freedom of movement within EU.' }
  }
};