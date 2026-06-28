import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent-light/20 rounded-2xl blur-xl opacity-60 group-focus-within:opacity-100 transition-opacity" />
      <div className="relative flex items-center bg-white rounded-2xl shadow-xl shadow-black/5 group-focus-within:shadow-2xl group-focus-within:shadow-accent/10 transition-all duration-300 ring-1 ring-gray-200 group-focus-within:ring-accent/30">
        <Search size={20} className="text-gray-400 ml-5 shrink-0 group-focus-within:text-accent transition-colors" />
        <label htmlFor="search-input" className="sr-only">Search jobs, results, admit cards</label>
        <input
          id="search-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for jobs, results, admit cards..."
          aria-label="Search for government jobs, results, admit cards and answer keys"
          className="w-full bg-transparent px-4 py-4 text-gray-700 placeholder:text-gray-400 text-base focus:outline-none"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="mr-3 px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            Clear
          </button>
        )}
        <button aria-label="Submit search" className="mr-2 bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/30">
          Search
        </button>
      </div>
    </div>
  );
}
