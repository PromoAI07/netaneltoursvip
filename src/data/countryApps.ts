export interface AppItem {
  name: string;
  note: string;
}

export interface Category {
  name: string;
  color: string;
  borderColor: string;
  iconBg: string;
  textColor: string;
  icon: string;
  apps: AppItem[];
}

export interface CountryApps {
  name: string;
  flag: string;
  categories: Category[];
}

// Helper to generate consistent category styling
const getCategoryStyle = (
type: 'food' | 'ride' | 'nav' | 'msg' | 'pay' | 'ent') =>
{
  switch (type) {
    case 'food':
      return {
        name: 'Food Delivery',
        icon: '🍔',
        color: 'bg-orange-50',
        borderColor: 'border-orange-200',
        iconBg: 'bg-orange-100',
        textColor: 'text-orange-700'
      };
    case 'ride':
      return {
        name: 'Ride Hailing',
        icon: '🚕',
        color: 'bg-blue-50',
        borderColor: 'border-blue-200',
        iconBg: 'bg-blue-100',
        textColor: 'text-blue-700'
      };
    case 'nav':
      return {
        name: 'Navigation',
        icon: '🗺️',
        color: 'bg-green-50',
        borderColor: 'border-green-200',
        iconBg: 'bg-green-100',
        textColor: 'text-green-700'
      };
    case 'msg':
      return {
        name: 'Messaging',
        icon: '💬',
        color: 'bg-purple-50',
        borderColor: 'border-purple-200',
        iconBg: 'bg-purple-100',
        textColor: 'text-purple-700'
      };
    case 'pay':
      return {
        name: 'Payments',
        icon: '💳',
        color: 'bg-emerald-50',
        borderColor: 'border-emerald-200',
        iconBg: 'bg-emerald-100',
        textColor: 'text-emerald-700'
      };
    case 'ent':
      return {
        name: 'Entertainment',
        icon: '🍿',
        color: 'bg-pink-50',
        borderColor: 'border-pink-200',
        iconBg: 'bg-pink-100',
        textColor: 'text-pink-700'
      };
  }
};

export const countryApps: CountryApps[] = [
{
  name: 'Thailand',
  flag: '🇹🇭',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'GrabFood', note: '#1 choice' },
    { name: 'LINE MAN', note: 'Very popular locally' },
    { name: 'Foodpanda', note: 'Good coverage' },
    { name: 'Robinhood', note: 'Local alternative' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Grab', note: '#1 choice' },
    { name: 'Bolt', note: 'Often cheaper' },
    { name: 'InDrive', note: 'Negotiate fares' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Grab', note: 'Built-in maps' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'LINE', note: '#1, everyone uses it' },
    { name: 'WhatsApp', note: 'Good for foreigners' },
    { name: 'Facebook Messenger', note: 'Widely used' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'PromptPay', note: '#1 choice' },
    { name: 'TrueMoney Wallet', note: 'Very popular' },
    { name: 'Rabbit LINE Pay', note: 'Integrated with LINE' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'TrueID', note: 'Local content' }]

  }]

},
{
  name: 'Vietnam',
  flag: '🇻🇳',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'GrabFood', note: '#1 choice' },
    { name: 'ShopeeFood', note: 'Very popular' },
    { name: 'Baemin', note: 'Good alternatives' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Grab', note: '#1 choice' },
    { name: 'Be', note: 'Local competitor' },
    { name: 'Xanh SM', note: 'Electric vehicles' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Grab', note: 'For rides' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'Zalo', note: '#1, essential' },
    { name: 'Facebook Messenger', note: 'Very popular' },
    { name: 'WhatsApp', note: 'For foreigners' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'MoMo', note: '#1 choice' },
    { name: 'ZaloPay', note: 'Integrated with Zalo' },
    { name: 'VNPay', note: 'Widely accepted' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'FPT Play', note: 'Local content' }]

  }]

},
{
  name: 'Japan',
  flag: '🇯🇵',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Uber Eats', note: '#1 choice' },
    { name: 'Demae-can', note: 'Local favorite' },
    { name: 'Wolt', note: 'Growing popularity' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'GO Taxi', note: '#1 choice' },
    { name: 'Uber', note: 'Premium options' },
    { name: 'S.RIDE', note: 'Tokyo focused' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Navitime', note: 'Great for trains' },
    { name: 'Japan Travel', note: 'By NAVITIME' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'LINE', note: '#1, essential' },
    { name: 'WhatsApp', note: 'For foreigners' },
    { name: 'iMessage', note: 'High iPhone usage' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'Suica/Pasmo', note: '#1, IC cards' },
    { name: 'PayPay', note: 'QR payments' },
    { name: 'Apple Pay', note: 'Widely accepted' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Amazon Prime', note: 'Very popular' }]

  }]

},
{
  name: 'Indonesia',
  flag: '🇮🇩',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'GrabFood', note: '#1 choice' },
    { name: 'GoFood', note: 'By Gojek' },
    { name: 'ShopeeFood', note: 'Aggressive promos' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Gojek', note: '#1 choice' },
    { name: 'Grab', note: 'Strong competitor' },
    { name: 'InDrive', note: 'Negotiate fares' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Good for traffic' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1, everyone uses it' },
    { name: 'Telegram', note: 'Popular alternative' },
    { name: 'LINE', note: 'Used by younger demo' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'GoPay', note: '#1 choice' },
    { name: 'OVO', note: 'Widely accepted' },
    { name: 'Dana', note: 'Popular wallet' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Vidio', note: 'Local content' }]

  }]

},
{
  name: 'Philippines',
  flag: '🇵🇭',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'GrabFood', note: '#1 choice' },
    { name: 'Foodpanda', note: 'Strong competitor' },
    { name: 'Pick.A.Roo', note: 'Premium options' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Grab', note: '#1 choice' },
    { name: 'Angkas', note: 'Motorbike taxis' },
    { name: 'Joyride', note: 'Motorbike alternative' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Essential for traffic' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'Facebook Messenger', note: '#1 choice' },
    { name: 'WhatsApp', note: 'Business/foreigners' },
    { name: 'Viber', note: 'Still popular' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'GCash', note: '#1 choice' },
    { name: 'Maya', note: 'Formerly PayMaya' },
    { name: 'GrabPay', note: 'Integrated with Grab' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'iWantTFC', note: 'Local content' }]

  }]

},
{
  name: 'India',
  flag: '🇮🇳',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Zomato', note: '#1 choice' },
    { name: 'Swiggy', note: 'Strong competitor' },
    { name: 'EatSure', note: 'Cloud kitchens' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Uber', note: '#1 choice' },
    { name: 'Ola', note: 'Local giant' },
    { name: 'Rapido', note: 'Bike taxis' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'MapMyIndia', note: 'Detailed local maps' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1, essential' },
    { name: 'Telegram', note: 'Popular alternative' },
    { name: 'Signal', note: 'Privacy focused' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'Google Pay', note: '#1 choice' },
    { name: 'PhonePe', note: 'Very popular UPI' },
    { name: 'Paytm', note: 'Wallet & UPI' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Hotstar', note: 'Cricket & local' }]

  }]

},
{
  name: 'Cambodia',
  flag: '🇰🇭',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Nham24', note: '#1 choice' },
    { name: 'Grab', note: 'Growing presence' },
    { name: 'Foodpanda', note: 'Good coverage' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Grab', note: '#1 choice' },
    { name: 'PassApp', note: 'Local tuk-tuks' },
    { name: 'InDrive', note: 'Negotiate fares' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Grab', note: 'For rides' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'Telegram', note: '#1, very popular' },
    { name: 'WhatsApp', note: 'For foreigners' },
    { name: 'Facebook Messenger', note: 'Widely used' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'ABA Pay', note: '#1 choice' },
    { name: 'Wing', note: 'Money transfers' },
    { name: 'ACLEDA', note: 'Local bank' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'TikTok', note: 'Very popular' }]

  }]

},
{
  name: 'Malaysia',
  flag: '🇲🇾',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'GrabFood', note: '#1 choice' },
    { name: 'Foodpanda', note: 'Strong competitor' },
    { name: 'ShopeeFood', note: 'Aggressive promos' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Grab', note: '#1 choice' },
    { name: 'InDrive', note: 'Negotiate fares' },
    { name: 'MyCar', note: 'Local alternative' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Essential for traffic' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1 choice' },
    { name: 'Telegram', note: 'Popular alternative' },
    { name: 'WeChat', note: 'Popular with Chinese demo' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: "Touch 'n Go", note: '#1 choice' },
    { name: 'GrabPay', note: 'Integrated with Grab' },
    { name: 'Boost', note: 'Local wallet' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Astro GO', note: 'Local TV' }]

  }]

},
{
  name: 'South Korea',
  flag: '🇰🇷',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Baedal Minjok', note: '#1 choice' },
    { name: 'Yogiyo', note: 'Strong competitor' },
    { name: 'Coupang Eats', note: 'Fast delivery' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Kakao T', note: '#1 choice' },
    { name: 'Tada', note: 'Premium vans' },
    { name: 'UT', note: 'Uber partnership' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Naver Map', note: '#1, better than Google' },
    { name: 'KakaoMap', note: 'Excellent alternative' },
    { name: 'Google Maps', note: 'Limited functionality' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'KakaoTalk', note: '#1, essential' },
    { name: 'WhatsApp', note: 'For foreigners' },
    { name: 'iMessage', note: 'High iPhone usage' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'Samsung Pay', note: '#1 choice' },
    { name: 'Kakao Pay', note: 'Integrated with Kakao' },
    { name: 'Naver Pay', note: 'Online & offline' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Wavve', note: 'Local content' }]

  }]

},
{
  name: 'Turkey',
  flag: '🇹🇷',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Yemeksepeti', note: '#1 choice' },
    { name: 'Getir', note: 'Groceries & food' },
    { name: 'Trendyol Yemek', note: 'Growing fast' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'BiTaksi', note: '#1 choice' },
    { name: 'Uber', note: 'Works with yellow cabs' },
    { name: 'inDrive', note: 'Negotiate fares' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Yandex Maps', note: 'Very popular alternative' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1 choice' },
    { name: 'Telegram', note: 'Very popular' },
    { name: 'BiP', note: 'Local alternative' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'BKM Express', note: '#1 choice' },
    { name: 'Papara', note: 'Prepaid cards' },
    { name: 'Tosla', note: 'Youth focused' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'BluTV', note: 'Local content' }]

  }]

},
{
  name: 'Greece',
  flag: '🇬🇷',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Wolt', note: '#1 choice' },
    { name: 'efood', note: 'Very popular' },
    { name: 'Box', note: 'Local alternative' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Uber', note: '#1 choice' },
    { name: 'Beat', note: 'Local favorite' },
    { name: 'FREE NOW', note: 'European standard' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Good for traffic' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1 choice' },
    { name: 'Viber', note: 'Very popular locally' },
    { name: 'Facebook Messenger', note: 'Widely used' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'Apple Pay', note: '#1 choice' },
    { name: 'Google Pay', note: 'Widely accepted' },
    { name: 'Revolut', note: 'Popular for travel' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Cosmote TV', note: 'Local content' }]

  }]

},
{
  name: 'Portugal',
  flag: '🇵🇹',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Uber Eats', note: '#1 choice' },
    { name: 'Glovo', note: 'Very popular' },
    { name: 'Bolt Food', note: 'Good alternative' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Uber', note: '#1 choice' },
    { name: 'Bolt', note: 'Often cheaper' },
    { name: 'FREE NOW', note: 'European standard' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Good for traffic' },
    { name: 'Citymapper', note: 'Great for transit' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1 choice' },
    { name: 'Facebook Messenger', note: 'Widely used' },
    { name: 'Telegram', note: 'Popular alternative' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'MB Way', note: '#1, essential' },
    { name: 'Apple Pay', note: 'Widely accepted' },
    { name: 'Revolut', note: 'Popular for travel' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'HBO Max', note: 'Popular streaming' }]

  }]

},
{
  name: 'Colombia',
  flag: '🇨🇴',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Rappi', note: '#1 choice' },
    { name: 'Uber Eats', note: 'Global standard' },
    { name: 'Domicilios.com', note: 'Local alternative' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Uber', note: '#1 choice' },
    { name: 'InDrive', note: 'Negotiate fares' },
    { name: 'DiDi', note: 'Good alternative' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Essential for traffic' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1, essential' },
    { name: 'Telegram', note: 'Popular alternative' },
    { name: 'Facebook Messenger', note: 'Widely used' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'Nequi', note: '#1 choice' },
    { name: 'Daviplata', note: 'Very popular' },
    { name: 'PSE', note: 'Online payments' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'HBO Max', note: 'Popular streaming' }]

  }]

},
{
  name: 'Mexico',
  flag: '🇲🇽',
  categories: [
  {
    ...getCategoryStyle('food'),
    apps: [
    { name: 'Uber Eats', note: '#1 choice' },
    { name: 'Rappi', note: 'Very popular' },
    { name: 'DiDi Food', note: 'Good alternative' }]

  },
  {
    ...getCategoryStyle('ride'),
    apps: [
    { name: 'Uber', note: '#1 choice' },
    { name: 'DiDi', note: 'Strong competitor' },
    { name: 'InDrive', note: 'Negotiate fares' }]

  },
  {
    ...getCategoryStyle('nav'),
    apps: [
    { name: 'Google Maps', note: '#1 choice' },
    { name: 'Waze', note: 'Essential for traffic' }]

  },
  {
    ...getCategoryStyle('msg'),
    apps: [
    { name: 'WhatsApp', note: '#1, essential' },
    { name: 'Telegram', note: 'Popular alternative' },
    { name: 'Facebook Messenger', note: 'Widely used' }]

  },
  {
    ...getCategoryStyle('pay'),
    apps: [
    { name: 'Mercado Pago', note: '#1 choice' },
    { name: 'CoDi', note: 'QR payments' },
    { name: 'Spin by Oxxo', note: 'Convenience store wallet' }]

  },
  {
    ...getCategoryStyle('ent'),
    apps: [
    { name: 'YouTube', note: '#1 choice' },
    { name: 'Netflix', note: 'Global standard' },
    { name: 'Amazon Prime', note: 'Very popular' }]

  }]

}];