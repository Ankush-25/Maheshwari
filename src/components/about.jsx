import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-amber-900 sm:text-5xl md:text-6xl">
            Our <span className="text-amber-600">Sweet Legacy</span>
          </h1>
          <h2>Founder - Late Shri. MunshiRam - 1940</h2>
          <p className="mt-6 text-xl text-amber-800 max-w-3xl mx-auto">
            Traditional recipes, timeless taste — trusted for over 80 years in Dehradun.
          </p>
        </div>

        {/* History & Legacy */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-400">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Humble Beginnings</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1940 by the late Subhash Singh Maheshwari, our sweet shop began as a small family business at Karanpur Chowk. What started as a modest outlet has grown into one of Dehradun's most beloved destinations for authentic Indian sweets and snacks.
            </p>
            <p className="text-gray-600">
              For over eight decades, we've been dedicated to preserving the traditional recipes and techniques that have made our sweets legendary in the region.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-amber-400">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h2>
            <p className="text-gray-600 mb-4">
              At Maheshwari Sweet Shop, we maintain the highest standards of quality and hygiene. Every sweet and snack is prepared with:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>100% pure and fresh ingredients</li>
              <li>Traditional recipes passed down through generations</li>
              <li>Meticulous attention to taste and presentation</li>
              <li>Strict quality control measures</li>
            </ul>
          </div>
        </div>

        {/* Our Offerings */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">Our Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Traditional Sweets", 
                description: "Indulge in our wide variety of traditional Indian sweets, made with love and care using time-honored recipes." 
              },
              { 
                title: "Snacks and Namkeens", 
                description: "Savor our crunchy and flavorful snacks, perfect for munching on the go or as a accompaniment to your meals." 
              },
              { 
                title: "Integrity", 
                description: "We conduct our business with honesty, transparency, and respect for all stakeholders." 
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO & Founder", image: "https://randomuser.me/api/portraits/men/1.jpg" },
              { name: "Jane Smith", role: "CTO", image: "https://randomuser.me/api/portraits/women/1.jpg" },
              { name: "Mike Johnson", role: "Lead Developer", image: "https://randomuser.me/api/portraits/men/2.jpg" }
            ].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">LinkedIn</span>
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-600">
                    <span className="sr-only">Twitter</span>
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;