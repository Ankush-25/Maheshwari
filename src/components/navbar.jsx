import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center">
            <div className="flex h-[100px] overflow-hidden">
                <img 
                    src="./Maheshwari.png" 
                    alt="Logo Maheshwari"  
                    className=" mt-[-50px] h-[200px]" 
                    onClick={() => window.location.href = '/'}
                />
            </div>
            <ul className="flex space-x-8 items-center pr-[50px]">
                <li><a href="/" className="hover:text-blue-600">Home</a></li>
                <li><a href="/about" className="hover:text-blue-600">About</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar