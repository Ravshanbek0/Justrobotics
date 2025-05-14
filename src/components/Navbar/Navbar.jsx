import React, { useState } from 'react'
import { FaTimes, FaInstagram, FaLinkedin, FaTwitter, FaPhone } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom';

function Navbar() {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-black shadow-md py-2 border-t-[#FFE000] border-b-[#FFE000] border-4">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4">
                {/* Left side - Logo and navigation items */}
                <div className="flex items-center space-x-8">
                    <Link to={'/'}><img className='w-12 h-12 md:w-[64px] md:h-[64px]' src="./imgs/Logo.png" alt="Logo" /></Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to={'/'}><a href="#" className="text-white font-medium hover:text-[#FFE000] transition-colors text-sm lg:text-base">Главная</a></Link>
                        <a href="#about" className="text-white font-medium hover:text-[#FFE000] transition-colors text-sm lg:text-base">О нас</a>

                        {/* Courses dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                                className="text-[#FFE000] font-medium hover:text-[#FFE000] flex items-center gap-1 text-sm lg:text-base"
                            >
                                Курсы
                                <IoIosArrowDown className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCoursesOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">робототехника</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">Английский</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">Живопись для детей</a>
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">Живопись для взрослых</a>
                                </div>
                            )}
                        </div>

                        <a href="#contact" className="text-white font-medium hover:text-[#FFE000] transition-colors text-sm lg:text-base">Контакты</a>
                    </div>
                </div>

                {/* Right side items */}
                <div className="flex items-center space-x-6">
                    <Link to={'/register'}><button className="hidden md:flex items-center bg-[#FFE000] hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-md transition-colors text-sm lg:text-base">
                        <FaPhone className="mr-2" /> ПОЗВОНИТЬ
                    </button></Link>

                    <div className="flex space-x-2">
                        <button className="text-white font-medium px-3 py-1 rounded hover:bg-[#FFE000] hover:text-black transition-colors text-sm">RU</button>
                        <button className="text-black bg-[#FFE000] font-medium px-3 py-1 rounded hover:bg-gray-800 hover:text-white transition-colors text-sm">UZ</button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <HiMenu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Full-screen Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-[5000] flex flex-col">
                    {/* Close button at top */}
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white p-2 focus:outline-none"
                        >
                            <FaTimes className="w-8 h-8" />
                        </button>
                    </div>

                    {/* Centered menu items */}
                    <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
                        <a
                            href="/"
                            className="text-white text-2xl font-medium hover:text-[#FFE000] transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Главная
                        </a>
                        <a
                            href="#about"
                            className="text-white text-2xl font-medium hover:text-[#FFE000] transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            О нас
                        </a>

                        {/* Mobile Courses dropdown */}
                        <div className="relative text-center">
                            <Link to={'/register'} onClick={() => setIsMobileMenuOpen(false)}>
                                <button
                                    className="text-[#FFE000] text-2xl font-medium hover:text-[#FFE000] flex items-center gap-1 mx-auto py-2"
                                >
                                    Курсы
                                </button>
                            </Link>
                        </div>

                        <a
                            href="#contact"
                            className="text-white text-2xl font-medium hover:text-[#FFE000] transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Контакты
                        </a>
                        <Link to={'/register'}>
                            <button
                                className="flex items-center bg-[#FFE000] hover:bg-yellow-500 text-black font-medium text-xl py-3 px-8 rounded-md transition-colors mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <FaPhone className="mr-2" /> ПОЗВОНИТЬ
                            </button>
                        </Link>
                    </div>

                    {/* Social icons at bottom */}
                    <div className="flex justify-center space-x-6 pb-8 pt-4">
                        <a href="#" className="text-white hover:text-[#FFE000] transition-colors">
                            <FaInstagram className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-[#FFE000] transition-colors">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="#" className="text-white hover:text-[#FFE000] transition-colors">
                            <FaTwitter className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar