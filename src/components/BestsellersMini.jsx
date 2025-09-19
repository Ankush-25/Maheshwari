import React, { useState, useMemo, useCallback } from 'react';
import { FaStar, FaSearch, FaRupeeSign, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Move data outside component to prevent recreation on every render
const ITEMS = [   
  {
    id: 1,
    name: 'Samosa',
    price: 20,
    unit: 'piece',
    rating: 4.7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Samosa-and-Chatni.jpg/1024px-Samosa-and-Chatni.jpg',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    category: 'Snacks',
    bestseller: true
  },
  {
    id: 2,
    name: 'Golgappe (Pani Puri)',
    price: 40,
    unit: 'plate (6 pcs)',
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pani_Puri1.JPG/1920px-Pani_Puri1.JPG',
    description: 'Hollow puris filled with spicy water, tamarind chutney, and potato filling',
    category: 'Street Food',
    bestseller: true
  },
  {
    id: 3,
    name: 'Aloo Tikki',
    price: 50,
    unit: 'plate',
    rating: 4.6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Aloo_Tikki_served_with_chutneys.jpg/500px-Aloo_Tikki_served_with_chutneys.jpg',
    description: 'Crispy potato patties served with chutneys and yogurt',
    category: 'Snacks',
    bestseller: true
  },
  {
    id: 4,
    name: 'Chaat Special',
    price: 70,
    unit: 'plate',
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Delhi_Chaat_with_saunth_chutney.jpg',
    description: 'A delightful mix of flavors and textures with chutneys and spices',
    category: 'Street Food',
    bestseller: true
  },
  {
    id: 5,
    name: 'Balusahi Chaat',
    price: 80,
    unit: 'plate',
    rating: 4.5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Balushahi.jpg/640px-Balushahi.jpg',
    description: 'Sweet and savory chaat made with balushahi, yogurt, and chutneys',
    category: 'Specialty',
    bestseller: true
  },
  {
    id: 6,
    name: 'Kalakand',
    price: 600,
    unit: 'kg',
    rating: 4.8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Koderma_Kalakand.jpg',
    description: 'Rich and creamy milk-based sweet garnished with nuts',
    category: 'Mithai',
    bestseller: true
  },
  {
    id: 7,
    name: 'Ras Malai',
    price: 500,
    unit: 'kg',
    rating: 4.9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Ras_Malai_2.JPG',
    description: 'Soft cottage cheese dumplings in sweet, creamy milk',
    category: 'Mithai',
    bestseller: true
  },
  {
    id: 8,
    name: 'Gulab Jamun',
    price: 20,
    unit: 'piece',
    rating: 4.7,
    image: 'https://www.foodie-trail.com/wp-content/uploads/2020/04/PHOTO-2022-02-12-20-04-41_1.jpg',
    description: 'Deep-fried milk-solid dumplings soaked in sugar syrup',
    category: 'Mithai',
    bestseller: true
  }]


// Price ranges for filtering
const PRICE_RANGES = [
  { label: 'Under ₹100', value: 100 },
  { label: 'Under ₹300', value: 300 },
  { label: 'Under ₹500', value: 500 },
  { label: 'Under ₹1000', value: 1000 },
  { label: 'All Prices', value: 10000 }
];

// Sort options
const SORT_OPTIONS = [
  { label: 'Rating', value: 'rating' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Name', value: 'name' }
];

// Extract unique categories from items
const CATEGORIES = ['All', ...new Set(ITEMS.map(item => item.category))];

const BestsellersMini = ({ id }) => {
  // State management
  const [priceRange, setPriceRange] = useState(1000);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(false);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    setIsLoading(true);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    let result = ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesPrice = item.price <= priceRange;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sorting logic
    switch (sortBy) {
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return () => clearTimeout(timer), result;
  }, [searchTerm, activeCategory, priceRange, sortBy]);

  // Function to render star ratings
  const renderStars = useCallback((rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-amber-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStar key={i} className="text-amber-500 opacity-70" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    
    return (
      <div className="flex items-center">
        <div className="flex mr-1">{stars}</div>
        <span className="text-sm text-gray-600">({rating})</span>
      </div>
    );
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setActiveCategory('All');
    setPriceRange(10000);
  }, []);

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x200/FFE4B5/7C2D12?text=Food+Image';
  };

  return (
    <div id={id} className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Menu</h2>

        {/* Search, Filter, and Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search items..."
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Category and Price Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          {/* Category Filter */}
          <div className="w-full md:w-2/3">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="w-full md:w-1/3">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
            <div className="flex flex-col gap-2">
              <input
                type="range"
                min="0"
                max="1000"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">₹0</span>
                <span className="text-sm font-medium text-amber-700">Up to ₹{priceRange}</span>
                <span className="text-sm text-gray-600">₹1000+</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {PRICE_RANGES.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`px-3 py-1 rounded-full text-xs ${priceRange === range.value
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <p className="text-gray-600">
            Showing {filteredItems.length} of {ITEMS.length} items
          </p>
          {(searchTerm || activeCategory !== 'All' || priceRange < 10000) && (
            <button
              onClick={clearFilters}
              className="text-sm text-amber-600 hover:text-amber-800 flex items-center"
            >
              <FaTimes className="mr-1" />
              Clear all filters
            </button>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-amber-200 h-12 w-12"></div>
            </div>
          </div>
        )}

        {/* Items Grid */}
        {!isLoading && filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                    loading="lazy"
                  />
                  {item.bestseller && (
                    <div className="absolute top-2 left-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Bestseller
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    <span className="text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 flex-1">{item.description}</p>
                  <div className="mb-4">
                    {renderStars(item.rating)}
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-xl font-bold text-amber-700 flex items-center">
                      <FaRupeeSign className="inline mr-1" size={14} />
                      {item.price}/{item.unit}
                    </span>
                    <Link
                      to="https://www.zomato.com/dehradun/maheshwari-sweet-shop-karanpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : !isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">No items found matching your criteria.</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
      <Link
      to ="/Menu"
      className='m-auto flex justify-center max-w-fit mt-[10px] px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 transition-colors'>
      View More
      </Link>
    </div>
  );
};

export default BestsellersMini;