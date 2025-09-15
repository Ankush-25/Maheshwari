import React, { useState, useEffect } from 'react';
import { FaUtensils, FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaUsers, FaRupeeSign, FaHeart, FaCheck, FaTimes } from 'react-icons/fa';

const Catering = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const menuItems = [
    {
      id: 1,
      name: 'Corporate Events',
      description: 'Impress your clients and employees with our delicious catering options for meetings, conferences, and corporate gatherings.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      details: {
        capacity: '50-500 people',
        popularOptions: ['Executive Lunch Boxes', 'Buffet Setup', 'Coffee Break Packages'],
        startingPrice: '₹250 per person'
      }
    },
    {
      id: 2,
      name: 'Weddings',
      description: 'Make your special day even more memorable with our exquisite wedding catering services, customized to your preferences.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/419704740/PH/BG/SZ/56917177/wedding-catering-services-500x500.jpeg',
      details: {
        capacity: '100-1000 people',
        popularOptions: ['Traditional Thali', 'Live Counters', 'Premium Dessert Station'],
        startingPrice: '₹450 per person'
      }
    },
    {
      id: 3,
      name: 'Private Parties',
      description: 'From birthday celebrations to anniversaries, we provide delicious food that will make your event unforgettable.',
      image: 'https://the-garden.in/wp-content/uploads/2024/07/2-13.webp',
      details: {
        capacity: '20-200 people',
        popularOptions: ['Theme-based Menus', 'Finger Foods', 'Custom Cakes & Desserts'],
        startingPrice: '₹350 per person'
      }
    }
  ];

  const features = [
    {
      name: 'Authentic Flavors',
      description: 'Experience the true taste of traditional Indian cuisine prepared by our expert chefs.',
      icon: FaUtensils
    },
    {
      name: 'Flexible Scheduling',
      description: 'We work around your schedule to ensure your event is catered to perfection.',
      icon: FaCalendarAlt
    },
    {
      name: 'Competitive Pricing',
      description: 'High-quality catering services at prices that fit your budget.',
      icon: FaRupeeSign
    },
    {
      name: 'Experienced Staff',
      description: 'Professional servers and chefs with years of event experience.',
      icon: FaUsers
    },
    {
      name: 'Custom Menus',
      description: 'Tailored menus to match your event theme and dietary requirements.',
      icon: FaHeart
    },
    {
      name: 'Hygienic Preparation',
      description: 'Stringent hygiene standards maintained throughout food preparation.',
      icon: FaCheck
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Amit Sharma',
      event: 'Corporate Event',
      text: '"The food was exceptional and the service was impeccable. Our clients were thoroughly impressed!"',
      initials: 'AS'
    },
    {
      id: 2,
      name: 'Priya Kapoor',
      event: 'Wedding Reception',
      text: '"They made our special day even more memorable with their delicious food and professional staff."',
      initials: 'PK'
    },
    {
      id: 3,
      name: 'Rahul Singh',
      event: 'Birthday Party',
      text: '"The finger foods and custom cake were the highlight of the party. Will definitely hire them again!"',
      initials: 'RS'
    }
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <div className="relative bg-amber-50 overflow-hidden pt-16">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="Catering spread"
          />
        </div>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-amber-900 sm:text-5xl md:text-6xl">
                <span className="block">Catering Services</span>
                <span className="block text-amber-600">By Maheshwari Sweets</span>
              </h1>
              <p className="mt-4 text-xl text-amber-800">
                Bringing authentic Indian flavors to your special events and celebrations with our professional catering services.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row sm:max-w-md">
                <div className="rounded-md shadow">
                  <button
                    onClick={() => scrollToSection('enquire')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    Enquire Now
                  </button>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <button
                    onClick={() => scrollToSection('menu')}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="menu" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Catering Services
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We offer a variety of catering options to suit your needs
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {menuItems.map((item) => (
              <div key={item.id} className="pt-6 transform transition duration-500 hover:scale-105">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg h-full border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="-mt-6">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-amber-100 text-amber-800">
                          {item.name}
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-base text-gray-500">{item.description}</p>
                      <div className="mt-6 flex justify-between items-center">
                        <span className="text-sm font-medium text-amber-600">{item.details.startingPrice}</span>
                        <button
                          onClick={() => openServiceModal(item)}
                          className="text-base font-medium text-amber-600 hover:text-amber-500 transition-colors duration-300 flex items-center"
                        >
                          Learn more<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full mx-auto overflow-hidden shadow-xl transform transition-all">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <FaTimes className="h-6 w-6" />
              </button>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900 mb-4">
                    {selectedService.name}
                  </h3>
                  <div className="mt-2">
                    <img src={selectedService.image} alt={selectedService.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-gray-500 mb-4">{selectedService.description}</p>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Service Details</h4>
                      <p className="text-sm text-gray-500 mb-2"><span className="font-medium">Capacity:</span> {selectedService.details.capacity}</p>
                      <p className="text-sm text-gray-500 mb-2"><span className="font-medium">Starting Price:</span> {selectedService.details.startingPrice}</p>
                      <div className="mt-2">
                        <p className="text-sm font-medium text-gray-900 mb-1">Popular Options:</p>
                        <ul className="list-disc pl-5 text-sm text-gray-500">
                          {selectedService.details.popularOptions.map((option, index) => (
                            <li key={index}>{option}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-amber-600 text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300"
                onClick={() => {
                  closeModal();
                  scrollToSection('enquire');
                }}
              >
                Enquire About This Service
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      <div id="features" className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Perfect Choice for Your Event
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We take pride in delivering exceptional catering experiences that your guests will remember.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full border border-amber-100 hover:shadow-md transition-shadow duration-300">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-md shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                        <p className="mt-2 text-base text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          {/* Desktop testimonials */}
          <div className="mt-12 hidden lg:grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-800">
                      <span className="font-bold">{testimonial.initials}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-amber-600">{testimonial.event}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          
          {/* Mobile testimonial carousel */}
          <div className="mt-12 lg:hidden">
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-amber-100 text-amber-800">
                    <span className="font-bold">{testimonials[activeTestimonial].initials}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-amber-600">{testimonials[activeTestimonial].event}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonials[activeTestimonial].text}"</p>
            </div>
            <div className="flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full mx-1 ${index === activeTestimonial ? 'bg-amber-600' : 'bg-gray-300'}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="enquire" className="bg-amber-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to plan your event?</span>
            <span className="block text-amber-100">Contact us today for a quote.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:+919897225756"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-amber-50 transition-colors duration-300"
              >
                <FaPhoneAlt className="mr-2" /> Call Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="mailto:prashantmaheshwari2705@gmail.com?subject=Catering Enquiry"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-400 transition-colors duration-300"
              >
                <FaEnvelope className="mr-2" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catering;