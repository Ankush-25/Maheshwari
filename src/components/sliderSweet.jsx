import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaStar, FaSpinner } from 'react-icons/fa';
import { href, Link } from 'react-router-dom';

// Custom hook for slider logic
const useSlider = (items, visibleItems) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const autoPlayRef = useRef();
  const itemsRef = useRef(items);

  // Handle infinite items
  const extendedItems = useMemo(() => {
    return [...items, ...items, ...items];
  }, [items]);

  // Calculate total slides based on items and visible items
  const totalSlides = Math.ceil(items.length / Math.floor(visibleItems));
  
  // Handle next slide with animation
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      // Reset to start if at the end of the cloned set
      return newIndex >= items.length ? 0 : newIndex;
    });

    // Reset animation flag after transition
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, items.length]);

  // Handle previous slide with animation
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setCurrentIndex(prev => {
      const newIndex = prev - 1;
      // Reset to end if at the start of the cloned set
      return newIndex < 0 ? items.length - 1 : newIndex;
    });

    // Reset animation flag after transition
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, items.length]);

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    const touchDiff = touchStartX - touchEndX;
    if (Math.abs(touchDiff) > 50) { // Minimum swipe distance
      if (touchDiff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  }, [nextSlide, prevSlide]);

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Increased interval for better UX
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  // Add keyboard event listeners
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return {
    currentIndex,
    isPaused,
    extendedItems,
    totalSlides,
    nextSlide,
    prevSlide,
    setIsPaused,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

// Memoized product card component
const ProductCard = memo(({ item }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  

  return (
    <div className="h-full">
      <div className="relative h-full rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
        {item.discount && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            {item.discount}% OFF
          </div>
        )}
        <div className="h-48 bg-gray-100 overflow-hidden relative">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <FaSpinner className="animate-spin text-amber-400 text-2xl" />
            </div>
          )}
          {!imageError ? (
            <img
              src={item.image}
              alt={item.name}
              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-200 text-gray-500">
              <span>Image not available</span>
            </div>
          )}
          <div className="absolute  group-hover:bg-opacity-10 transition-all duration-300"></div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
            <div className="flex items-center text-amber-600">
              <FaStar className="mr-1" />
              <span className="text-sm font-semibold">{item.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{item.description}</p>
          <div className="flex items-center justify-between">
            <div></div>
            <Link 
              className="flex items-center rounded-full bg-amber-600 px-4 py-2 text-sm text-white hover:bg-amber-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              aria-label={`Add ${item.name} to cart`}
              onClick={()=>{
                window.location.href='https://www.zomato.com/dehradun/maheshwari-sweet-shop-karanpur'
              }}
            >
              <FaShoppingCart className="mr-2" />
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    discount: PropTypes.number,
  }).isRequired,
};

// Sample items
// const sliderItems = [
//   {
//     id: 1,
//     name: 'Kalakand',
//     price: 600,
//     unit: 'kg',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Koderma_Kalakand.jpg',
//     description: 'Rich and creamy milk-based sweet',
//     rating: 4.8,
//     discount: 10
//   },
//   {
//     id: 2,
//     name: 'Ras Malai',
//     price: 500,
//     unit: 'kg',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Ras_Malai_2.JPG/1280px-Ras_Malai_2.JPG',
//     description: 'Soft cottage cheese dumplings',
//     rating: 4.9,
//     discount: 5
//   },
//   {
//     id: 3,
//     name: 'Gulab Jamun',
//     price: 450,
//     unit: 'kg',
//     image: 'https://www.foodie-trail.com/wp-content/uploads/2020/04/PHOTO-2022-02-12-20-04-41_1.jpg',
//     description: 'Deep-fried milk-solid dumplings',
//     rating: 4.7,
//     discount: 15
//   },
//   {
//     id: 4,
//     name: 'Milk Cake',
//     price: 550,
//     unit: 'kg',
//     image: 'https://static.toiimg.com/thumb/52820530.cms?imgsize=364313&width=509&height=340',
//     description: 'Sweet milk cake with rich texture',
//     rating: 4.6
//   },
//   {
//     id: 5,
//     name: 'Samosa',
//     price: 20,
//     unit: 'piece',
//     image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Pooja_Thakur/Samosa_Chutney_Recipe.jpg',
//     description: 'Crispy pastry with spiced potatoes',
//     rating: 4.5,
//     discount: 20
//   },
//   {
//     id: 6,
//     name: 'Golgappe',
//     price: 40,
//     unit: 'plate',
//     image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/pani-puri-recipe-1-500x500.jpg',
//     description: 'Crispy puris with tangy water',
//     rating: 4.9
//   },
//   {
//     id: 7,
//     name: 'Jalebi',
//     price: 350,
//     unit: 'kg',
//     image: 'https://www.whiskaffair.com/wp-content/uploads/2020/03/Jalebi-1-1.jpg',
//     description: 'Crispy swirls soaked in syrup',
//     rating: 4.4,
//     discount: 10
//   }
// ];
const sliderItems = [
  {
    id: 1,
    name: 'Kalakand',
    price: 600,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Koderma_Kalakand.jpg',
    description: 'Rich and creamy milk-based sweet garnished with nuts',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Ras Malai',
    price: 500,
    unit: 'kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Ras_Malai_2.JPG',
    description: 'Soft cottage cheese dumplings in sweet, creamy milk',
    rating: 4.9,
    discount: 5,
  },
  {
    id: 3,
    name: 'Gulab Jamun',
    image: 'https://www.foodie-trail.com/wp-content/uploads/2020/04/PHOTO-2022-02-12-20-04-41_1.jpg',
    description: 'Deep-fried milk-solid dumplings soaked in sugar syrup',
    rating: 4.7,
    discount: 15,
  },
  {
    id: 4,
    name: 'Milk Cake',
    price: 550,
    unit: 'kg',
    image: 'https://static.toiimg.com/thumb/52820530.cms?imgsize=364313&width=509&height=340',
    description: 'Sweet milk cake with a rich, dense texture',
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Samosa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Samosa-and-Chatni.jpg/1024px-Samosa-and-Chatni.jpg',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    rating: 4.7,
    discount: 20,
  },
  {
    id: 6,
    name: 'Golgappe (Pani Puri)',
    price: 40,
    unit: 'plate (6 pcs)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Pani_Puri1.JPG/1920px-Pani_Puri1.JPG',
    description: 'Hollow puris filled with spicy water, tamarind chutney, and potato filling',
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Jalebi',
    price: 15,
    unit: 'piece',
    image: 'https://www.tamarindnthyme.com/wp-content/uploads/2020/11/Instant-Jalebi4.jpg',
    description: 'Crispy deep-fried spirals soaked in sugar syrup',
    rating: 4.8,
  },
];

const SliderSweet = ({ items = sliderItems }) => {
  const [visibleItems, setVisibleItems] = useState(3);
  const sliderRef = useRef(null);
  const resizeTimeoutRef = useRef();
  const containerRef = useRef(null);

  // Use the custom slider hook
  const {
    currentIndex,
    isPaused,
    extendedItems,
    totalSlides,
    nextSlide,
    prevSlide,
    setIsPaused,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useSlider(items, visibleItems);

  // Calculate visible items based on screen size with debounce
  const getVisibleItems = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 768) return 1.5;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 4;
  }, []);

  // Update visible items on window resize with debounce
  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      
      resizeTimeoutRef.current = setTimeout(() => {
        setVisibleItems(getVisibleItems());
      }, 100);
    };

    setVisibleItems(getVisibleItems());
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [getVisibleItems]);

  // Calculate item width based on number of visible items
  const itemWidth = 100 / (visibleItems + 0.3);

  // Handle dot navigation
  const goToSlide = (index) => {
    if (index >= 0 && index < sliderItems.length) {
      const slider = sliderRef.current;
      if (slider) {
        slider.style.transition = 'transform 0.5s ease-in-out';
        setCurrentIndex(index);
      }
    }
  };

  // Handle infinite scroll effect
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Reset position when at the end/beginning for infinite effect
    if (currentIndex >= sliderItems.length) {
      setTimeout(() => {
        slider.style.transition = 'none';
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        slider.style.transition = 'none';
        setCurrentIndex(sliderItems.length - 1);
      }, 500);
    }
  }, [currentIndex]);

  return (
    <section 
      className="relative overflow-hidden py-12 bg-gradient-to-b from-amber-50 to-amber-100 z-50"
      style={{
        position: 'relative',
        zIndex: 9999
      }}
      aria-label="Featured sweets carousel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-4"> Best Seller</h2>
        <p className="text-center text-amber-700 mb-10 max-w-2xl mx-auto">
          Discover our handcrafted traditional sweets made with love and the finest ingredients
        </p>
        
        <div 
          className="relative"
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured sweets"
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg hover:bg-amber-100 transition-all duration-200 hover:scale-110 -left-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label="Previous slide"
            aria-controls="slider-content"
          >
            <FaChevronLeft className="h-5 w-5 text-amber-700" />
          </button>

          {/* Slider Container */}
          <div 
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              ref={sliderRef}
              id="slider-content"
              className="flex transition-transform duration-500 ease-in-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%`,
              }}
              aria-live="polite"
              aria-atomic="true"
              aria-label={`Item ${currentIndex + 1} of ${sliderItems.length}`}
            >
              {extendedItems.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="px-2 py-4 transition-all duration-300 flex-shrink-0"
                  style={{ 
                    width: `${100 / visibleItems}%`,
                    minWidth: '200px' // Ensure minimum width for better mobile display
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${sliderItems.length}`}
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-3 shadow-lg hover:bg-amber-100 transition-all duration-200 hover:scale-110 -right-4 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            aria-label="Next slide"
            aria-controls="slider-content"
          >
            <FaChevronRight className="h-5 w-5 text-amber-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        {sliderItems.length > 1 && (
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                  currentIndex % sliderItems.length === index
                    ? 'w-8 bg-amber-600'
                    : 'w-3 bg-amber-200 hover:bg-amber-300'
                }`}
                aria-label={`Go to slide ${index + 1} of ${totalSlides}`}
                aria-current={currentIndex % sliderItems.length === index ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

// Add prop types validation
// Default props
SliderSweet.defaultProps = {
  items: sliderItems
};

SliderSweet.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      discount: PropTypes.number,
    })
  ),
};

// Set default props
SliderSweet.defaultProps = {
  items: sliderItems,
};

export default SliderSweet;