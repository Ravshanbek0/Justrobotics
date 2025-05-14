import React from 'react'
import { FaHeart, FaPlayCircle, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#ffe000] text-black py-8 md:py-10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10 lg:gap-[140px]">

                    {/* Logo and Description */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="bg-gray-300 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
                            <span className="text-gray-500">Лого</span>
                        </div>
                        <p className="font-bold mb-2 text-sm md:text-base">
                            SLOGAN | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="flex space-x-3 text-black mt-2">
                            <a href="#" className="hover:text-gray-700 transition-colors">
                                <FaHeart className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                            <a href="#" className="hover:text-gray-700 transition-colors">
                                <FaPlayCircle className="w-5 h-5 md:w-6" />
                            </a>
                            <a href="#" className="hover:text-gray-700 transition-colors">
                                <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-3 md:mb-4">Курсы</h3>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Работотехника</li>
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Английский для взрослых</li>
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Английский для детей</li>
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Шахмат</li>
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Живопись</li>
                        </ul>
                    </div>

                    {/* Contacts */}
                    <div className="text-center md:text-left">
                        <h3 className="font-bold text-lg mb-3 md:mb-4">Контакты</h3>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Телеграм</li>
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Инстаграм</li>
                            <li className="hover:text-gray-700 cursor-pointer transition-colors">Ютюб</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 md:mt-10 text-center border-t border-black pt-4 text-sm md:text-base">
                    Ideallux.com © 2000-2024, All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer