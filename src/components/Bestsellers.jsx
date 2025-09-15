import React, { useState } from 'react';
import { FaStar, FaFilter, FaSearch } from 'react-icons/fa';

const Bestsellers = ({id}) => {
  // Sample data for bestsellers
  const sweets =[
    {
      id: 1,
      name: 'Kalakand',
      price: 600,
      rating: 4.8,
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Koderma_Kalakand.jpg',
      description: 'Rich and creamy milk-based sweet garnished with nuts'
    },
    {
      id: 2,
      name: 'Ras Malai',
      price: 500,
      rating: 4.9,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ras_Malai_2.JPG/1280px-Ras_Malai_2.JPG',
      description: 'Soft cottage cheese dumplings in sweet, creamy milk'
    },
    {
      id: 3,
      name: 'Gulab Jamun',
      price: 450,
      rating: 4.7,
      image: 'https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=509&height=340',
      description: 'Deep-fried milk-solid dumplings soaked in sugar syrup'
    },
    {
      id: 4,
      name: 'Milk Cake',
      price: 550,
      rating: 4.6,
      image: 'https://static.toiimg.com/thumb/52820530.cms?imgsize=364313&width=509&height=340',
      description: 'Sweet milk cake with a rich, dense texture'
    },
    {
      id: 5,
      name: 'Samosa Chaat',
      price: 350,
      rating: 4.5,
      image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-1.jpg',
      description: 'Crushed samosas topped with chutneys and yogurt'
    }
  ];
  
  

  const [priceRange, setPriceRange] = useState(1000);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSweets = sweets.filter(sweet => 
    sweet.price <= priceRange && 
    sweet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const priceRanges = [
    { label: 'Under ₹300', value: 300 },
    { label: 'Under ₹500', value: 500 },
    { label: 'Under ₹1000', value: 1000 },
    { label: 'All', value: 10000 }
  ];

  return (
    <div id={id} className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Bestsellers</h2>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search sweets..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <FaFilter className="text-amber-600" />
            <div className="flex gap-2 flex-wrap">
              {priceRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setPriceRange(range.value)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    priceRange === range.value
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

        {/* Sweets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSweets.map((sweet) => (
            <div key={sweet.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={sweet.image}
                  alt={sweet.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{sweet.name}</h3>
                  <div className="flex items-center bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-sm">
                    <FaStar className="text-amber-500 mr-1" />
                    {sweet.rating}
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{sweet.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-700">₹{sweet.price}/kg</span>
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSweets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No sweets found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bestsellers;