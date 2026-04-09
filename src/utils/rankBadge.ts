/**
 * Returns Tailwind CSS classes for a rank badge based on the app's position (0-indexed).
 * 0 = gold, 1 = silver, 2 = bronze, 3+ = default grey.
 */
export function getRankBadgeClass(index: number): string {
  switch (index) {
    case 0:
      return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 1:
      return 'bg-gray-100 text-gray-600 border-gray-300';
    case 2:
      return 'bg-orange-100 text-orange-600 border-orange-300';
    default:
      return 'bg-gray-50 text-gray-500 border-gray-200';
  }
}
