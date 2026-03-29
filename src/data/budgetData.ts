export interface BudgetBreakdown {
  accommodation: number;
  food: number;
  transport: number;
  activities: number;
  sim: number;
  misc: number;
}

export interface CountryBudget {
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
  budget: BudgetBreakdown;
  midRange: BudgetBreakdown;
  luxury: BudgetBreakdown;
}

export const countryBudgets: CountryBudget[] = [
{
  name: 'Thailand',
  flag: '🇹🇭',
  currency: 'THB',
  currencySymbol: '฿',
  budget: {
    accommodation: 12,
    food: 8,
    transport: 5,
    activities: 5,
    sim: 1,
    misc: 4
  },
  midRange: {
    accommodation: 40,
    food: 20,
    transport: 12,
    activities: 15,
    sim: 2,
    misc: 8
  },
  luxury: {
    accommodation: 150,
    food: 60,
    transport: 40,
    activities: 50,
    sim: 3,
    misc: 20
  }
},
{
  name: 'Vietnam',
  flag: '🇻🇳',
  currency: 'VND',
  currencySymbol: '₫',
  budget: {
    accommodation: 10,
    food: 6,
    transport: 4,
    activities: 4,
    sim: 1,
    misc: 3
  },
  midRange: {
    accommodation: 35,
    food: 15,
    transport: 10,
    activities: 12,
    sim: 2,
    misc: 6
  },
  luxury: {
    accommodation: 120,
    food: 45,
    transport: 30,
    activities: 40,
    sim: 3,
    misc: 15
  }
},
{
  name: 'Japan',
  flag: '🇯🇵',
  currency: 'JPY',
  currencySymbol: '¥',
  budget: {
    accommodation: 35,
    food: 20,
    transport: 15,
    activities: 10,
    sim: 2,
    misc: 8
  },
  midRange: {
    accommodation: 80,
    food: 40,
    transport: 25,
    activities: 25,
    sim: 3,
    misc: 15
  },
  luxury: {
    accommodation: 250,
    food: 100,
    transport: 60,
    activities: 60,
    sim: 5,
    misc: 30
  }
},
{
  name: 'Indonesia',
  flag: '🇮🇩',
  currency: 'IDR',
  currencySymbol: 'Rp',
  budget: {
    accommodation: 10,
    food: 7,
    transport: 5,
    activities: 5,
    sim: 1,
    misc: 3
  },
  midRange: {
    accommodation: 35,
    food: 18,
    transport: 12,
    activities: 15,
    sim: 2,
    misc: 7
  },
  luxury: {
    accommodation: 130,
    food: 50,
    transport: 35,
    activities: 45,
    sim: 3,
    misc: 18
  }
},
{
  name: 'Philippines',
  flag: '🇵🇭',
  currency: 'PHP',
  currencySymbol: '₱',
  budget: {
    accommodation: 10,
    food: 6,
    transport: 5,
    activities: 5,
    sim: 1,
    misc: 3
  },
  midRange: {
    accommodation: 30,
    food: 15,
    transport: 10,
    activities: 12,
    sim: 2,
    misc: 6
  },
  luxury: {
    accommodation: 100,
    food: 40,
    transport: 30,
    activities: 35,
    sim: 3,
    misc: 15
  }
},
{
  name: 'India',
  flag: '🇮🇳',
  currency: 'INR',
  currencySymbol: '₹',
  budget: {
    accommodation: 8,
    food: 5,
    transport: 3,
    activities: 3,
    sim: 1,
    misc: 3
  },
  midRange: {
    accommodation: 25,
    food: 12,
    transport: 8,
    activities: 10,
    sim: 2,
    misc: 5
  },
  luxury: {
    accommodation: 100,
    food: 40,
    transport: 25,
    activities: 30,
    sim: 3,
    misc: 15
  }
},
{
  name: 'Cambodia',
  flag: '🇰🇭',
  currency: 'USD',
  currencySymbol: '$',
  budget: {
    accommodation: 8,
    food: 5,
    transport: 4,
    activities: 4,
    sim: 1,
    misc: 3
  },
  midRange: {
    accommodation: 30,
    food: 15,
    transport: 10,
    activities: 12,
    sim: 2,
    misc: 6
  },
  luxury: {
    accommodation: 100,
    food: 40,
    transport: 25,
    activities: 35,
    sim: 3,
    misc: 15
  }
},
{
  name: 'Malaysia',
  flag: '🇲🇾',
  currency: 'MYR',
  currencySymbol: 'RM',
  budget: {
    accommodation: 12,
    food: 8,
    transport: 5,
    activities: 5,
    sim: 1,
    misc: 4
  },
  midRange: {
    accommodation: 35,
    food: 18,
    transport: 12,
    activities: 15,
    sim: 2,
    misc: 7
  },
  luxury: {
    accommodation: 120,
    food: 45,
    transport: 30,
    activities: 40,
    sim: 3,
    misc: 18
  }
},
{
  name: 'South Korea',
  flag: '🇰🇷',
  currency: 'KRW',
  currencySymbol: '₩',
  budget: {
    accommodation: 25,
    food: 15,
    transport: 10,
    activities: 8,
    sim: 2,
    misc: 5
  },
  midRange: {
    accommodation: 60,
    food: 30,
    transport: 18,
    activities: 20,
    sim: 3,
    misc: 10
  },
  luxury: {
    accommodation: 180,
    food: 70,
    transport: 40,
    activities: 50,
    sim: 5,
    misc: 25
  }
},
{
  name: 'Turkey',
  flag: '🇹🇷',
  currency: 'TRY',
  currencySymbol: '₺',
  budget: {
    accommodation: 15,
    food: 10,
    transport: 5,
    activities: 5,
    sim: 1,
    misc: 4
  },
  midRange: {
    accommodation: 45,
    food: 22,
    transport: 12,
    activities: 15,
    sim: 2,
    misc: 8
  },
  luxury: {
    accommodation: 150,
    food: 60,
    transport: 35,
    activities: 45,
    sim: 3,
    misc: 20
  }
},
{
  name: 'Greece',
  flag: '🇬🇷',
  currency: 'EUR',
  currencySymbol: '€',
  budget: {
    accommodation: 25,
    food: 15,
    transport: 8,
    activities: 8,
    sim: 2,
    misc: 5
  },
  midRange: {
    accommodation: 70,
    food: 35,
    transport: 18,
    activities: 20,
    sim: 3,
    misc: 12
  },
  luxury: {
    accommodation: 200,
    food: 80,
    transport: 45,
    activities: 50,
    sim: 5,
    misc: 25
  }
},
{
  name: 'Portugal',
  flag: '🇵🇹',
  currency: 'EUR',
  currencySymbol: '€',
  budget: {
    accommodation: 20,
    food: 12,
    transport: 6,
    activities: 6,
    sim: 2,
    misc: 4
  },
  midRange: {
    accommodation: 55,
    food: 28,
    transport: 15,
    activities: 18,
    sim: 3,
    misc: 10
  },
  luxury: {
    accommodation: 170,
    food: 65,
    transport: 35,
    activities: 45,
    sim: 5,
    misc: 22
  }
},
{
  name: 'Colombia',
  flag: '🇨🇴',
  currency: 'COP',
  currencySymbol: '$',
  budget: {
    accommodation: 10,
    food: 6,
    transport: 4,
    activities: 4,
    sim: 1,
    misc: 3
  },
  midRange: {
    accommodation: 30,
    food: 15,
    transport: 10,
    activities: 12,
    sim: 2,
    misc: 6
  },
  luxury: {
    accommodation: 100,
    food: 40,
    transport: 25,
    activities: 35,
    sim: 3,
    misc: 15
  }
},
{
  name: 'Mexico',
  flag: '🇲🇽',
  currency: 'MXN',
  currencySymbol: '$',
  budget: {
    accommodation: 12,
    food: 8,
    transport: 5,
    activities: 5,
    sim: 1,
    misc: 4
  },
  midRange: {
    accommodation: 40,
    food: 20,
    transport: 12,
    activities: 15,
    sim: 2,
    misc: 8
  },
  luxury: {
    accommodation: 140,
    food: 55,
    transport: 35,
    activities: 45,
    sim: 3,
    misc: 20
  }
}];