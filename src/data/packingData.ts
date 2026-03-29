export interface PackingItem {
  name: string;
  essential: boolean;
}

export interface PackingCategory {
  name: string;
  icon: string;
  items: PackingItem[];
}

type TripType = 'beach' | 'city' | 'mountain' | 'backpacking' | 'business';
type Duration = 'weekend' | '1week' | '2weeks' | '1month';

const baseItems: Record<string, PackingCategory[]> = {
  documents: [
  {
    name: 'Documents',
    icon: '📄',
    items: [
    { name: 'Passport (+ copies)', essential: true },
    { name: 'Travel insurance docs', essential: true },
    { name: 'Flight tickets / boarding passes', essential: true },
    { name: 'Hotel confirmations', essential: true },
    { name: 'Visa documents (if needed)', essential: true },
    { name: 'Emergency contacts list', essential: false },
    { name: 'Credit/debit cards', essential: true },
    { name: 'Local currency cash', essential: true }]

  }],

  electronics: [
  {
    name: 'Electronics',
    icon: '🔌',
    items: [
    { name: 'Phone + charger', essential: true },
    { name: 'Power bank', essential: true },
    { name: 'Universal adapter', essential: true },
    { name: 'Earbuds / headphones', essential: false },
    { name: 'Camera + charger', essential: false }]

  }],

  toiletries: [
  {
    name: 'Toiletries',
    icon: '🧴',
    items: [
    { name: 'Toothbrush & toothpaste', essential: true },
    { name: 'Deodorant', essential: true },
    { name: 'Shampoo & conditioner (travel size)', essential: false },
    { name: 'Sunscreen', essential: true },
    { name: 'Razor / grooming kit', essential: false },
    { name: 'Medications (personal)', essential: true }]

  }],

  health: [
  {
    name: 'Health & Safety',
    icon: '🩺',
    items: [
    { name: 'First aid kit (basic)', essential: false },
    { name: 'Hand sanitizer', essential: true },
    { name: 'Insect repellent', essential: false },
    { name: 'Face masks', essential: false },
    { name: 'Prescription medications', essential: true }]

  }]

};

const tripClothing: Record<TripType, PackingItem[]> = {
  beach: [
  { name: 'Swimsuit(s)', essential: true },
  { name: 'Flip flops / sandals', essential: true },
  { name: 'Light shorts (3-4)', essential: true },
  { name: 'Tank tops / t-shirts (4-5)', essential: true },
  { name: 'Sunhat / cap', essential: true },
  { name: 'Sunglasses', essential: true },
  { name: 'Light cover-up / sarong', essential: false },
  { name: 'Casual evening outfit', essential: false },
  { name: 'Underwear (7+)', essential: true },
  { name: 'Light sneakers', essential: false }],

  city: [
  { name: 'Comfortable walking shoes', essential: true },
  { name: 'Jeans / trousers (2-3)', essential: true },
  { name: 'T-shirts / tops (4-5)', essential: true },
  { name: 'Light jacket / hoodie', essential: true },
  { name: 'Smart casual outfit', essential: false },
  { name: 'Underwear (7+)', essential: true },
  { name: 'Socks (5-7 pairs)', essential: true },
  { name: 'Sunglasses', essential: false },
  { name: 'Scarf / light layer', essential: false }],

  mountain: [
  { name: 'Hiking boots (broken in)', essential: true },
  { name: 'Moisture-wicking base layers (2-3)', essential: true },
  { name: 'Fleece / mid-layer', essential: true },
  { name: 'Waterproof jacket', essential: true },
  { name: 'Hiking pants (2)', essential: true },
  { name: 'Warm hat & gloves', essential: true },
  { name: 'Thermal underwear', essential: false },
  { name: 'Thick socks (5+ pairs)', essential: true },
  { name: 'Sunglasses (UV protection)', essential: true },
  { name: 'Gaiters', essential: false }],

  backpacking: [
  { name: 'Quick-dry t-shirts (3-4)', essential: true },
  { name: 'Convertible pants / shorts (2)', essential: true },
  { name: 'Light rain jacket', essential: true },
  { name: 'Comfortable sandals', essential: true },
  { name: 'Walking shoes / trainers', essential: true },
  { name: 'Underwear (5-7)', essential: true },
  { name: 'Swimsuit', essential: false },
  { name: 'Sarong (multi-purpose)', essential: false },
  { name: 'Compression packing cubes', essential: false },
  { name: 'Laundry bag', essential: false }],

  business: [
  { name: 'Dress shirts (3-4)', essential: true },
  { name: 'Dress pants / skirt (2)', essential: true },
  { name: 'Blazer / sport coat', essential: true },
  { name: 'Dress shoes', essential: true },
  { name: 'Ties / accessories', essential: false },
  { name: 'Casual outfit (off-hours)', essential: false },
  { name: 'Underwear (5-7)', essential: true },
  { name: 'Dress socks (5 pairs)', essential: true },
  { name: 'Belt', essential: true },
  { name: 'Garment bag', essential: false }]

};

const tripExtras: Record<TripType, PackingItem[]> = {
  beach: [
  { name: 'Beach towel', essential: false },
  { name: 'Waterproof phone pouch', essential: true },
  { name: 'Snorkel gear (or rent)', essential: false },
  { name: 'Reef-safe sunscreen', essential: true },
  { name: 'Aloe vera gel', essential: false },
  { name: 'Dry bag', essential: false }],

  city: [
  { name: 'Day backpack / crossbody bag', essential: true },
  { name: 'Reusable water bottle', essential: false },
  { name: 'Guidebook / offline maps', essential: false },
  { name: 'Umbrella (compact)', essential: false },
  { name: 'Notebook & pen', essential: false }],

  mountain: [
  { name: 'Backpack (40-60L)', essential: true },
  { name: 'Trekking poles', essential: false },
  { name: 'Headlamp + batteries', essential: true },
  { name: 'Water purification tablets', essential: false },
  { name: 'Sleeping bag liner', essential: false },
  { name: 'Trail snacks / energy bars', essential: true },
  { name: 'Blister kit / moleskin', essential: true }],

  backpacking: [
  { name: 'Backpack (40-50L)', essential: true },
  { name: 'Padlock (for hostel lockers)', essential: true },
  { name: 'Travel towel (microfiber)', essential: true },
  { name: 'Reusable water bottle', essential: true },
  { name: 'Earplugs + sleep mask', essential: true },
  { name: 'Clothesline / clips', essential: false },
  { name: 'Pocket knife / multi-tool', essential: false }],

  business: [
  { name: 'Laptop + charger', essential: true },
  { name: 'Business cards', essential: false },
  { name: 'Portfolio / notebook', essential: false },
  { name: 'Portable steamer / wrinkle spray', essential: false },
  { name: 'Shoe polish kit', essential: false }]

};

export function getPackingList(
tripType: TripType,
duration: Duration)
: PackingCategory[] {
  const clothing: PackingCategory = {
    name: 'Clothing',
    icon: '👕',
    items: [...tripClothing[tripType]]
  };

  const extras: PackingCategory = {
    name: 'Extras',
    icon: '🎒',
    items: [...tripExtras[tripType]]
  };

  // Add more items for longer trips
  if (duration === '2weeks' || duration === '1month') {
    clothing.items.push({ name: 'Extra underwear set', essential: false });
    clothing.items.push({ name: 'Laundry detergent sheets', essential: false });
    extras.items.push({ name: 'Travel laundry bag', essential: false });
  }

  if (duration === '1month') {
    extras.items.push({ name: 'Portable clothesline', essential: false });
    extras.items.push({ name: 'Extra power bank', essential: false });
    baseItems.health[0].items.push({
      name: 'Extra medication supply (30+ days)',
      essential: true
    });
  }

  return [
  ...baseItems.documents,
  clothing,
  ...baseItems.electronics,
  ...baseItems.toiletries,
  ...baseItems.health,
  extras];

}

export const tripTypes: {value: TripType;label: string;icon: string;}[] = [
{ value: 'beach', label: 'Beach', icon: '🏖️' },
{ value: 'city', label: 'City', icon: '🏙️' },
{ value: 'mountain', label: 'Mountain', icon: '⛰️' },
{ value: 'backpacking', label: 'Backpacking', icon: '🎒' },
{ value: 'business', label: 'Business', icon: '💼' }];


export const durations: {value: Duration;label: string;}[] = [
{ value: 'weekend', label: 'Weekend' },
{ value: '1week', label: '1 Week' },
{ value: '2weeks', label: '2 Weeks' },
{ value: '1month', label: '1 Month+' }];