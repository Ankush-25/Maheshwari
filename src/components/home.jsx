import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6">
              Spreading sweetness since 1940
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8">
              Traditional recipes, timeless taste — trusted for over 80 years in Dehradun.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/menu" 
                className="px-8 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
              >
                View Menu
              </Link>
              <Link 
                to="/order" 
                className="px-8 py-3 border-2 border-amber-600 text-amber-700 font-medium rounded-md hover:bg-amber-50 transition-colors"
              >
                Order Now
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-3 text-amber-700 font-medium hover:text-amber-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">Our Sweet Legacy</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Founded in 1940 by the late Subhash Singh Maheshwari, our sweet shop has been serving authentic sweets and snacks in Dehradun for over eight decades.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="./shop-interior.jpg" 
                alt="Maheshwari Sweet Shop Interior" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-600">
                From humble beginnings at Karanpur Chowk, we've grown into one of the city's most loved destinations for mithai, chaat, and catering services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Traditional recipes passed down through generations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pure vegetarian and freshly prepared sweets</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quality ingredients and consistent taste</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-amber-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Catering services for weddings, events, and special occasions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Offerings Section */}
      <div className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-12">Our Offerings</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍬',
                title: 'Sweets (Mithai)',
                items: 'Laddus, Barfi, Rasgullas, Gulab Jamun, Kaju Katli, and seasonal specialties'
              },
              {
                icon: '🌮',
                title: 'Chaat & Street Food',
                items: 'Golgappe, Dahi Puri, Aloo Tikki, Papdi Chaat, and more'
              },
              {
                icon: '🎉',
                title: 'Catering Services',
                items: 'Customized menus for weddings, birthdays, and corporate events'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.items}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-amber-800 font-medium">
              🛵 Home Delivery & Takeaway options available
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏛️', text: 'Established legacy since 1940' },
              { icon: '👨‍👩‍👧‍👦', text: 'Trusted by generations in Dehradun' },
              { icon: '🥬', text: 'Pure Veg & hygienic preparation' },
              { icon: '💳', text: 'All payment methods accepted' }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-amber-50 rounded-lg">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="block">Ready to place an order?</span>
            <span className="block text-amber-200">We're just a call away!</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:+919358100587"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-700 bg-white hover:bg-amber-50"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;