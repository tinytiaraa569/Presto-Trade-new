import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grid, List, ChevronDown, Search, SlidersHorizontal, X } from 'lucide-react';
import { diamondProducts, diamondTypes, diamondCategories, diamondFilterOptions } from './DiamondData';
import DiamondCard from '../components/DiamondCard';
import DiamondListItem from '../components/DiamondListItem';

const DiamondPage = () => {
  const [viewMode, setViewMode] = useState('list');
  const [selectedType, setSelectedType] = useState('Natural');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [favorites, setFavorites] = useState([]);

  const [filters, setFilters] = useState({
    shape: [],
    color: [],
    clarity: [],
    cut: [],
    polish: [],
    symmetry: [],
    fluorescence: [],
    certification: [],
    caratMin: 0,
    caratMax: 10,
    priceMin: 0,
    priceMax: 100000,
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const toggleFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      shape: [],
      color: [],
      clarity: [],
      cut: [],
      polish: [],
      symmetry: [],
      fluorescence: [],
      certification: [],
      caratMin: 0,
      caratMax: 10,
      priceMin: 0,
      priceMax: 100000,
    });
    setSelectedCategory('all');
  };

  // Get categories based on selected type
  const categories = selectedType === 'Natural' 
    ? Object.values(diamondCategories.NATURAL)
    : Object.values(diamondCategories.LAB_GROWN);

  const filteredDiamonds = useMemo(() => {
    let result = diamondProducts;

    // Type filter
    result = result.filter(d => d.type === selectedType);

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter(d => d.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      result = result.filter(d => 
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.sku.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Shape filter
    if (filters.shape.length > 0) {
      result = result.filter(d => filters.shape.includes(d.shape));
    }

    // Color filter
    if (filters.color.length > 0) {
      result = result.filter(d => filters.color.includes(d.color));
    }

    // Clarity filter
    if (filters.clarity.length > 0) {
      result = result.filter(d => filters.clarity.includes(d.clarity));
    }

    // Cut filter
    if (filters.cut.length > 0) {
      result = result.filter(d => filters.cut.includes(d.cut));
    }

    // Polish filter
    if (filters.polish.length > 0) {
      result = result.filter(d => filters.polish.includes(d.polish));
    }

    // Symmetry filter
    if (filters.symmetry.length > 0) {
      result = result.filter(d => filters.symmetry.includes(d.symmetry));
    }

    // Fluorescence filter
    if (filters.fluorescence.length > 0) {
      result = result.filter(d => filters.fluorescence.includes(d.fluorescence));
    }

    // Certification filter
    if (filters.certification.length > 0) {
      result = result.filter(d => filters.certification.includes(d.certification));
    }

    // Carat range
    result = result.filter(d => d.carat >= filters.caratMin && d.carat <= filters.caratMax);

    // Price range
    result = result.filter(d => d.price >= filters.priceMin && d.price <= filters.priceMax);

    // Sort
    switch(sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'carat-high':
        result.sort((a, b) => b.carat - a.carat);
        break;
      case 'carat-low':
        result.sort((a, b) => a.carat - b.carat);
        break;
      default:
        break;
    }

    return result;
  }, [selectedType, selectedCategory, searchQuery, filters, sortBy]);

  const activeFiltersCount = 
    filters.shape.length + 
    filters.color.length + 
    filters.clarity.length + 
    filters.cut.length + 
    filters.polish.length + 
    filters.symmetry.length + 
    filters.fluorescence.length + 
    filters.certification.length;

  return (
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header */}
      <div className="bg-white  border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-light text-gray-900 mb-1">Fine Diamonds</h1>
            <p className="text-xs text-gray-500">Discover exceptional quality diamonds</p>
          </div>

          {/* Type Selection */}
          <div className="flex justify-center gap-2 mb-4">
            <button
              onClick={() => {
                setSelectedType('Natural');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                selectedType === 'Natural'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-400'
              }`}
            >
              Natural
            </button>
            <button
              onClick={() => {
                setSelectedType('Lab-Grown');
                setSelectedCategory('all');
              }}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                selectedType === 'Lab-Grown'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-gray-400'
              }`}
            >
              Lab-Grown
            </button>
          </div>

          {/* Categories */}
          <div className="flex justify-center gap-2 mb-5 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.replace(/Natural |Lab-Grown /g, '')}
              </button>
            ))}
          </div>

          {/* Search & Filter Bar */}
          <div className="flex gap-3 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors relative"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-4 p-5 bg-white border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-gray-900">Refine Your Search</h3>
                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1"
                      >
                        <X className="w-3 h-3" />
                        Clear all
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* Shape Filter */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Shape</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.shape.map((shape) => (
                          <label key={shape} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.shape.includes(shape)}
                              onChange={() => toggleFilter('shape', shape)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{shape}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Color Filter */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Color</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.color.map((color) => (
                          <label key={color} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.color.includes(color)}
                              onChange={() => toggleFilter('color', color)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{color}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Clarity Filter */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Clarity</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.clarity.map((clarity) => (
                          <label key={clarity} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.clarity.includes(clarity)}
                              onChange={() => toggleFilter('clarity', clarity)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{clarity}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Cut Filter */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Cut</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.cut.map((cut) => (
                          <label key={cut} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.cut.includes(cut)}
                              onChange={() => toggleFilter('cut', cut)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{cut}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Polish Filter */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Polish</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.polish.map((polish) => (
                          <label key={polish} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.polish.includes(polish)}
                              onChange={() => toggleFilter('polish', polish)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{polish}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Symmetry</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.symmetry.map((symmetry) => (
                          <label key={symmetry} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.symmetry.includes(symmetry)}
                              onChange={() => toggleFilter('symmetry', symmetry)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{symmetry}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Fluorescence</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.fluorescence.map((fluor) => (
                          <label key={fluor} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.fluorescence.includes(fluor)}
                              onChange={() => toggleFilter('fluorescence', fluor)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{fluor}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-2">Certification</label>
                      <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
                        {diamondFilterOptions.certification.map((cert) => (
                          <label key={cert} className="flex items-center cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={filters.certification.includes(cert)}
                              onChange={() => toggleFilter('certification', cert)}
                              className="w-3 h-3 rounded border-gray-300 text-black focus:ring-black"
                            />
                            <span className="ml-1.5 text-xs text-gray-600 group-hover:text-gray-900">{cert}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Carat Range */}
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Carat: {filters.caratMin.toFixed(1)} - {filters.caratMax.toFixed(1)} ct
                      </label>
                      <div className="px-2">
                        <input
                          type="range"
                          min="0"
                          max="10"
                          step="0.1"
                          value={filters.caratMax}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            setFilters(prev => ({ 
                              ...prev, 
                              caratMax: val,
                              caratMin: Math.min(prev.caratMin, val)
                            }));
                          }}
                          className="w-full h-1"
                        />
                        <div className="flex gap-2 mt-2">
                          <input
                            type="number"
                            value={filters.caratMin}
                            onChange={(e) => setFilters(prev => ({ ...prev, caratMin: Math.max(0, parseFloat(e.target.value) || 0) }))}
                            className="w-full px-2 py-1 text-xs border border-gray-200 rounded"
                            placeholder="Min"
                            step="0.1"
                            min="0"
                            max={filters.caratMax}
                          />
                          <input
                            type="number"
                            value={filters.caratMax}
                            onChange={(e) => setFilters(prev => ({ ...prev, caratMax: Math.min(10, parseFloat(e.target.value) || 10) }))}
                            className="w-full px-2 py-1 text-xs border border-gray-200 rounded"
                            placeholder="Max"
                            step="0.1"
                            min={filters.caratMin}
                            max="10"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="col-span-2">
                      <label className="block text-xs font-medium text-gray-700 mb-2">
                        Price: ${filters.priceMin.toLocaleString()} - ${filters.priceMax.toLocaleString()}
                      </label>
                      <div className="px-2">
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="1000"
                          value={filters.priceMax}
                          onChange={(e) => {
                            const val = parseInt(e.target.value);
                            setFilters(prev => ({ 
                              ...prev, 
                              priceMax: val,
                              priceMin: Math.min(prev.priceMin, val)
                            }));
                          }}
                          className="w-full h-1"
                        />
                        <div className="flex gap-2 mt-2">
                          <input
                            type="number"
                            value={filters.priceMin}
                            onChange={(e) => setFilters(prev => ({ ...prev, priceMin: Math.max(0, parseInt(e.target.value) || 0) }))}
                            className="w-full px-2 py-1 text-xs border border-gray-200 rounded"
                            placeholder="Min"
                            step="1000"
                            min="0"
                            max={filters.priceMax}
                          />
                          <input
                            type="number"
                            value={filters.priceMax}
                            onChange={(e) => setFilters(prev => ({ ...prev, priceMax: Math.min(100000, parseInt(e.target.value) || 100000) }))}
                            className="w-full px-2 py-1 text-xs border border-gray-200 rounded"
                            placeholder="Max"
                            step="1000"
                            min={filters.priceMin}
                            max="100000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            {filteredDiamonds.length} {selectedType} diamonds found
          </p>
          <div className="flex items-center gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="carat-high">Carat: High to Low</option>
              <option value="carat-low">Carat: Low to High</option>
            </select>
            <div className="flex border border-gray-200 rounded-full overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredDiamonds.map((diamond, index) => (
                <DiamondCard
                  key={diamond.id}
                  diamond={diamond}
                  isFavorite={favorites.includes(diamond.id)}
                  onToggleFavorite={toggleFavorite}
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {filteredDiamonds.map((diamond, index) => (
                <DiamondListItem
                  key={diamond.id}
                  diamond={diamond}
                  isFavorite={favorites.includes(diamond.id)}
                  onToggleFavorite={toggleFavorite}
                  index={index}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {filteredDiamonds.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No diamonds found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="text-black hover:underline font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiamondPage;