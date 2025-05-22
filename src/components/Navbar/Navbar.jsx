import React, { useState } from 'react';
import { FaTimes, FaPhone } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowDown } from 'react-icons/io';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage } from '../../Language/Language';
function Navbar() {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    return (
        <nav className="bg-black shadow-md py-2 border-t-[#FFE000] border-b-[#FFE000] border-4">
            <div className="max-w-[1280px] mx-auto flex justify-between items-center px-4">
                {/* Logo va asosiy navigatsiya */}
                <div className="flex items-center space-x-8">
                    <NavLink to="/" className="flex items-center">
                        <img
                            className='w-12 h-12 md:w-[64px] md:h-[64px]'
                            src="./imgs/Logo.png"
                            alt="Logo"
                        />
                    </NavLink>

                    {/* Desktop navigatsiya */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition-colors text-sm lg:text-base ${isActive ? 'text-[#FFE000]' : 'text-white hover:text-[#FFE000]'
                                }`
                            }
                        >
                            {t.navbar.home}
                        </NavLink>

                        <a
                            href='#about'
                            className={
                                `font-medium transition-colors text-sm lg:text-base text-white hover:text-[#FFE000]`
                            }
                        >
                            {t.navbar.about}
                        </a>

                        {/* Kurslar dropdown menyusi */}
                        <div className="relative">
                            <button
                                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                                className="text-white font-medium hover:text-[#FFE000] flex items-center gap-1 text-sm lg:text-base"
                            >
                                {t.navbar.courses}
                                <IoIosArrowDown className={`transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isCoursesOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">{t.courses.robotics}</Link>
                                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">{t.courses.english}</Link>
                                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">{t.courses.paintingKids}</Link>
                                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">{t.courses.paintingAdults}</Link>
                                    <Link to="/register" className="block px-4 py-2 text-gray-800 hover:bg-[#FFE000] hover:text-black text-sm">{t.courses.programming}</Link>
                                </div>
                            )}
                        </div>
                        <Link
                            to='/register'
                            className={
                                `font-medium transition-colors text-sm lg:text-base 
                                    text-white hover:text-[#FFE000]
                                }`
                            }
                        >
                            {t.navbar.contacts}
                        </Link>
                    </div>
                </div>

                {/* Til almashtirish va telefon */}
                <div className="flex items-center space-x-6">

                    <a href='tel:+998908371241' className="hidden cursor-pointer md:flex items-center bg-[#FFE000] hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded-md transition-colors text-sm lg:text-base">
                        <FaPhone className="mr-2" /> {t.navbar.call}
                    </a>

                    {/* Til almashtirish tugmalari */}
                    <div className="flex space-x-2">
                        <button
                            onClick={() => toggleLanguage('ru')}
                            className={`font-medium px-3 py-1 rounded transition-colors text-sm ${language === 'ru'
                                ? 'text-black bg-[#FFE000]'
                                : 'text-white hover:bg-gray-700'
                                }`}
                        >
                            RU
                        </button>
                        <button
                            onClick={() => toggleLanguage('uz')}
                            className={`font-medium px-3 py-1 rounded transition-colors text-sm ${language === 'uz'
                                ? 'text-black bg-[#FFE000]'
                                : 'text-white hover:bg-gray-700'
                                }`}
                        >
                            UZ
                        </button>
                    </div>

                    {/* Mobil menyu tugmasi */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <HiMenu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobil menyu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black z-[5000] flex flex-col">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-white p-2 focus:outline-none"
                        >
                            <FaTimes className="w-8 h-8" />
                        </button>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors py-2 ${isActive ? 'text-[#FFE000]' : 'text-white hover:text-[#FFE000]'
                                }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.navbar.home}
                        </NavLink>

                        <a
                            href="#about"
                            className={
                                `text-2xl font-medium transition-colors py-2 text-white hover:text-[#FFE000]`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.navbar.about}
                        </a>

                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors py-2 ${isActive ? 'text-[#FFE000]' : 'text-white hover:text-[#FFE000]'
                                }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.navbar.courses}
                        </NavLink>

                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `text-2xl font-medium transition-colors py-2 ${isActive ? 'text-[#FFE000]' : 'text-white hover:text-[#FFE000]'
                                }`
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t.navbar.contacts}
                        </NavLink>


                        <a href='tel:+998908371241'
                            className="flex items-center bg-[#FFE000] hover:bg-yellow-500 text-black font-medium text-xl py-3 px-8 rounded-md transition-colors mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <FaPhone className="mr-2" /> {t.navbar.call}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;