import React from 'react'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaPhone, FaLocationDot, FaRegClock } from "react-icons/fa6";
import Map from '../Map/Map';

function Home() {
    const videos = [
        { id: 1, title: "Video 1", duration: "2:45" },
        { id: 2, title: "Video 2", duration: "4:20" },
        { id: 3, title: "Video 3", duration: "3:15" },
        { id: 4, title: "Video 4", duration: "5:30" },
        { id: 5, title: "Video 5", duration: "1:45" },
        { id: 6, title: "Video 6", duration: "1:45" }
    ];

    const handlePlay = (videoId) => {
        console.log(`Playing video ${videoId}`);
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        course: '',
        age: ''
    });

    const courses = [
        "робототехника",
        "Английский",
        "Живопись для детей",
        "Живопись для взрослых",
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="overflow-x-hidden">
            {/* Header Section */}
            <header className="bg-[url('./imgs/StyleVector.png')] bg-cover bg-center xl:min-h-[611px] bg-black text-white pt-[78px] px-4 sm:px-8  lg:px-24">
                <div className="max-w-[1280px] mx-auto">
                    <div className='flex flex-row items-center justify-between w-full xl:gap-4'>
                        {/* Text Content */}
                        <div className="bg-white px-4 py-3 rounded-2xl flex-1 min-w-0">
                            <div>
                                <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-[84px] font-[600] text-black mb-2 leading-tight">
                                    JustRobotics
                                </h1>
                                <p className="text-xs sm:text-base lg:text-3xl text-black mb-3 sm:mb-4 font-semibold">
                                    Твой проводник в мир технологий и искусства
                                </p>

                                <div className="text-black">
                                    <p className="text-xs xl:text-xl sm:text-sm mb-2">
                                        получите бесплатное первое занятие
                                    </p>
                                    <button className="bg-black text-[#FFE000] font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-base rounded-md transition-colors w-full sm:w-auto lg:text-2xl">
                                        ПЕРЕЙТИ К КУРСАМ
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Fixed Size Image */}
                        <div className="flex-shrink-0">
                            <img
                                src="./imgs/Robot.png"
                                alt="Robot illustration"
                                className="w-[162px] h-[191px] xl:w-full xl:h-full lg:w-[320px] lg:h-[474px] sm:h-auto sm:max-h-[511px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='bg-black pb-[80px] xl:mt-[-85px] pt-16 lg:mt-0 '>
                {/* Stats Section */}
                <section className='max-w-[1280px] mx-auto px-4 sm:px-8'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8">
                        {[
                            { number: "300+", text: "ДОВОЛЬНЫХ СТУДЕНТОВ" },
                            { number: "25+", text: "Преподавателей" },
                            { number: "60+", text: "групп" }
                        ].map((stat, index) => (
                            <div key={index} className="bg-[#FFE000] rounded-xl text-center p-4">
                                <p className="xl:text-6xl sm:text-8xl lg:text-[120px] font-bold text-black">{stat.number}</p>
                                <p className="xl:text-xl sm:text-2xl lg:text-[40px]">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* About Section */}
                <section className='bg-white mt-[40px] xl:mt-[-25px] px-4 sm:px-8'>
                    <p className='max-w-[1280px] mx-auto py-8 md:py-[80px] text-base md:text-[20px] font-[400]'>
                        <b>JustRobotics</b> – это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха. <br /> <b>JustRobotics</b> – это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.
                    </p>
                </section>

                {/* Courses Section */}
                <div className="bg-[url('./imgs/StyleVector2.png')] bg-cover bg-center px-4 sm:px-8">
                    <section className='max-w-[1280px] mx-auto'>
                        <h1 className='text-center font-bold text-4xl sm:text-6xl lg:text-[96px] text-[#FFE000] mt-8 md:mt-[80px]'>
                            Авторские кусы<br />
                            от JustRobotics
                        </h1>
                        <div className='flex justify-center xl:flex-wrap overflow-x-auto pl-[200px] xl:pl-0 gap-4 sm:gap-[58px] mt-8 md:mt-[80px]'>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div key={item} className='bg-[#ffe000] w-full sm:w-[400px] lg:w-[551px] flex flex-col justify-center rounded-2xl p-4 sm:py-[40px] sm:px-[50px] mb-4'>
                                    <img src={`./imgs/Robo${item}.png`} alt={`Robo${item}`} className="w-full h-auto" />
                                    <h1 className='font-bold text-xl sm:text-[30px] mt-4'>Робототехника</h1>
                                    <div className='flex justify-end mt-4 sm:mt-[110px]'>
                                        <button className='bg-black text-white rounded-xl py-2 px-4 text-sm sm:text-base'>
                                            Подробнее о кусе
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Reviews Section */}
                <section className='max-w-[1280px] mx-auto mt-8 md:mt-[120px] px-4 sm:px-8'>
                    <h1 className='font-bold text-xl sm:text-[23px] text-[#F0D625]'>отзывы</h1>
                    <div className="relative mt-4">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.video-prev',
                                nextEl: '.video-next',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 4 },
                                1280: { slidesPerView: 5 },
                            }}
                        >
                            {videos.map((video) => (
                                <SwiperSlide key={video.id}>
                                    <div className="bg-[#C4C4C4] rounded-lg shadow-md h-[200px] sm:h-[310px] flex flex-col overflow-hidden">
                                        <div className="relative flex-1 flex items-center justify-center">
                                            <button
                                                onClick={() => handlePlay(video.id)}
                                                className="z-10 w-12 h-12 sm:w-[80px] sm:h-[40px] flex items-center justify-center rounded-full border text-white hover:text-gray-600 border-white hover:bg-white transition"
                                            >
                                                <FiPlay className="text-lg sm:text-xl" />
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="video-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hidden sm:block">
                            <FiChevronLeft className="text-gray-700 text-xl" />
                        </button>
                        <button className="video-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hidden sm:block">
                            <FiChevronRight className="text-gray-700 text-xl" />
                        </button>
                    </div>
                </section>

                {/* Free Lesson Form */}
                <section className='max-w-[1280px] mx-auto mt-8 md:mt-[80px] px-4 sm:px-8'>
                    <h1 className='font-bold text-center text-3xl sm:text-5xl lg:text-[96px] text-[#ffe000]'>
                        получите бесплатный<br />
                        первый урок
                    </h1>
                    <div className="mx-auto p-4 sm:p-6 shadow-md mt-4 sm:mt-8">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mb-4">
                                <input
                                    placeholder='Ваше имя'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                />

                                <input
                                    placeholder='Номер телефона'
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                />

                                <select
                                    id="course"
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                >
                                    <option value="">Выберете курс</option>
                                    {courses.map((course, index) => (
                                        <option key={index} value={course}>{course}</option>
                                    ))}
                                </select>

                                <input
                                    placeholder='Возраст'
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-[#ffe000] text-black py-3 px-8 rounded-md cursor-pointer transition duration-300 block mx-auto"
                                >
                                    ПОЛУЧИТЬ
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-16 justify-center mt-8'>
                        <div className='w-full sm:w-[310px] h-[78px] bg-[#ffe000] text-black text-xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md shadow-[#ffe000]'>
                            Филиал Ц4
                        </div>
                        <div className='w-full sm:w-[310px] h-[78px] bg-white text-black text-xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md'>
                            Филиал Беруни
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-[50px] mt-8 sm:mt-[80px]'>
                        {[
                            { icon: <FaPhone />, text: "Адрес Орьентир" },
                            { icon: <FaLocationDot />, text: "График работы" },
                            { icon: <FaRegClock />, text: "Номера телефонов" }
                        ].map((item, index) => (
                            <div key={index} className='flex justify-center items-center gap-3'>
                                <span className='bg-[#ffe000] rounded-full text-black text-[24px] flex items-center justify-center p-3'>
                                    {item.icon}
                                </span>
                                <p className='text-white font-normal text-base sm:text-[20px]'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Map Section */}
                <section className='mt-8 sm:mt-[80px] px-4 sm:px-8'>
                    <Map />
                </section>
            </main>
        </div>
    )
}

export default Home