'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function SortDropdown() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get('sort') || 'recent';
  const category = searchParams.get('category');

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    const params = new URLSearchParams(searchParams);
    params.set('sort', newSort);
    if (category) {
      params.set('category', category);
    }
    router.push(`/prodotti?${params.toString()}`);
  };

  return (
    <div className="relative inline-block">
      <select
        value={sortBy}
        onChange={handleSortChange}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-gray-700 hover:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent cursor-pointer"
      >
        <option value="recent">🕒 Più Recenti</option>
        <option value="price-asc">💰 Prezzo: Dal Più Basso</option>
        <option value="price-desc">💰 Prezzo: Dal Più Alto</option>
        <option value="name-asc">🔤 Nome: A-Z</option>
        <option value="name-desc">🔤 Nome: Z-A</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
