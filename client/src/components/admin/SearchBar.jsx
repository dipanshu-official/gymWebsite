import { useState } from 'react'

const SearchBar = ({ onSearch, placeholder = "Search...", filters = [] }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const handleSearch = (value) => {
    setSearchTerm(value)
    onSearch(value, selectedFilter)
  }

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter)
    onSearch(searchTerm, filter)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Search Input */}
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          placeholder={placeholder}
        />
      </div>

      {/* Filter Dropdown */}
      {filters.length > 0 && (
        <div className="sm:w-48">
          <select
            value={selectedFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="block w-full px-3 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          >
            <option value="all">All</option>
            {filters.map((filter) => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Clear Button */}
      {searchTerm && (
        <button
          onClick={() => handleSearch('')}
          className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default SearchBar