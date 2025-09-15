import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img 
                            src="./Maheshwari.png" 
                            alt="Logo Maheshwari"  
                            className={`h-36 h-[-3] cursor-pointer`} 
                            onClick={() => window.location.href = '/'}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">Home</a>
                        <a href="/about" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">About</a>
                        <a href="/contact" className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium">Contact</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a 
                            href="/" 
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </a>
                        <a 
                            href="/about" 
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                        <a 
                            href="/contact" 
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-amber-600"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar