import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FiPlay, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPhone, FaLocationDot, FaRegClock } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Map from '../Map/Map';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

// Animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const float = {
    y: [0, -20, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const pulse = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

function Home() {
    const videos = [
        { id: 1, title: "Video 1", duration: "2:45" },
        { id: 2, title: "Video 2", duration: "4:20" },
        { id: 3, title: "Video 3", duration: "3:15" },
        { id: 4, title: "Video 4", duration: "5:30" },
        { id: 5, title: "Video 5", duration: "1:45" },
        { id: 6, title: "Video 6", duration: "1:45" }
    ];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const [counts, setCounts] = useState({
        students: 0,
        teachers: 0,
        groups: 0
    });

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

    // Counting animation effect
    useEffect(() => {
        if (inView) {
            const duration = 2000;
            const startTime = Date.now();

            const animate = () => {
                const progress = Math.min(1, (Date.now() - startTime) / duration);

                setCounts({
                    students: Math.floor(progress * 300),
                    teachers: Math.floor(progress * 25),
                    groups: Math.floor(progress * 60)
                });

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        }
    }, [inView]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbw8mIpXL1X9Mdtz11uf9EY2qrJjlSknURTjtU-WB8RBi_xh1UjnPLzK5THUIzcCZZrWSw/exec', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            const data = text ? JSON.parse(text) : {};

            console.log(data.message || 'Maʼlumotlar saqlandi');
            alert("Ma'lumotlar saqlandi!");
            setFormData({ name: '', phone: '', course: '', age: '' });
        } catch (error) {
            console.error(`Xatolik: ${error.message}`);
            console.error('Error details:', error);
        }
    };

    return (
        <div className="overflow-x-hidden">
            {/* Header Section */}
            <header className="bg-[url('./imgs/StyleVector.png')] bg-cover bg-center xl:min-h-[611px] bg-black text-white pt-[78px] px-4 sm:px-8 lg:px-24">
                <div className="max-w-[1280px] mx-auto">
                    <div className='flex flex-row items-center justify-between w-full xl:gap-4'>
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white px-4 py-3 rounded-2xl flex-1 min-w-0"
                        >
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
                                    <Link to='/register'>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-black text-[#FFE000] font-bold py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-base rounded-md transition-colors w-full sm:w-auto lg:text-2xl"
                                        >
                                            ПЕРЕЙТИ К КУРСАМ
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Robot Image with floating animation */}
                        <motion.div
                            animate={float}
                            className="flex-shrink-0"
                        >
                            <img
                                src="./imgs/Robot.png"
                                alt="Robot illustration"
                                className="w-[162px] h-[191px] xl:w-full xl:h-full lg:w-[320px] lg:h-[474px] sm:h-auto sm:max-h-[511px] object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className='bg-black pb-[80px] xl:mt-[-85px] pt-16 lg:mt-0'>
                {/* Stats Section */}
                <section ref={ref} className='max-w-[1280px] mx-auto px-4 sm:px-8'>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate={inView ? "show" : "hidden"}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8"
                    >
                        {[
                            { number: `${counts.students}+`, text: "ДОВОЛЬНЫХ СТУДЕНТОВ" },
                            { number: `${counts.teachers}+`, text: "Преподавателей" },
                            { number: `${counts.groups}+`, text: "групп" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="bg-[#FFE000] rounded-xl text-center p-4"
                            >
                                <p className="xl:text-6xl sm:text-8xl lg:text-[120px] font-bold text-black">{stat.number}</p>
                                <p className="xl:text-xl sm:text-2xl lg:text-[40px]">{stat.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* About Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='bg-white mt-[40px] xl:mt-[-25px] px-4 sm:px-8'
                >
                    <p className='max-w-[1280px] mx-auto py-8 md:py-[80px] text-base md:text-[20px] font-[400]'>
                        <b>JustRobotics</b> – это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха. <br /> <b>JustRobotics</b> – это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.
                    </p>
                </motion.section>

                {/* Courses Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    id='about'
                    className="bg-[url('./imgs/StyleVector2.png')] bg-cover bg-center px-4 sm:px-8"
                >
                    <section className='max-w-[1280px] mx-auto'>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className='text-center font-bold text-4xl sm:text-6xl lg:text-[96px] text-[#FFE000] mt-8 md:mt-[80px]'
                        >
                            Авторские кусы<br />
                            от JustRobotics
                        </motion.h1>
                        <div className='flex justify-center xl:flex-wrap overflow-x-auto pl-[200px] xl:pl-0 gap-4 sm:gap-[58px] mt-8 md:mt-[80px]'>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className='bg-[#ffe000] w-full sm:w-[400px] lg:w-[551px] flex flex-col justify-center rounded-2xl p-4 sm:py-[40px] sm:px-[50px] mb-4 course-card'
                                >
                                    <img src={`./imgs/Robo${item}.png`} alt={`Robo${item}`} className="w-full h-auto" />
                                    <h1 className='font-bold text-xl sm:text-[30px] mt-4'>Робототехника</h1>
                                    <div className='flex justify-end mt-4 sm:mt-[110px]'>
                                        <Link to={'/register'}>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className='bg-black text-white rounded-xl py-2 px-4 text-sm sm:text-base'
                                            >
                                                Подробнее о кусе
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                </motion.div>

                {/* Reviews Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='max-w-[1280px] mx-auto mt-8 md:mt-[120px] px-4 sm:px-8'
                >
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
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-[#C4C4C4] rounded-lg shadow-md h-[200px] sm:h-[310px] flex flex-col overflow-hidden"
                                    >
                                        <div className="relative flex-1 flex items-center justify-center">
                                            <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => handlePlay(video.id)}
                                                className="z-10 w-12 h-12 sm:w-[80px] sm:h-[40px] flex items-center justify-center rounded-full border text-white hover:text-gray-600 border-white hover:bg-white transition"
                                            >
                                                <FiPlay className="text-lg sm:text-xl" />
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="video-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hidden sm:block"
                        >
                            <FiChevronLeft className="text-gray-700 text-xl" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="video-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 hidden sm:block"
                        >
                            <FiChevronRight className="text-gray-700 text-xl" />
                        </motion.button>
                    </div>
                </motion.section>

                {/* Free Lesson Form */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    id='contact'
                    className='max-w-[1280px] mx-auto mt-8 md:mt-[80px] px-4 sm:px-8'
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className='font-bold text-center text-3xl sm:text-5xl lg:text-[96px] text-[#ffe000]'
                    >
                        получите бесплатный<br />
                        первый урок
                    </motion.h1>
                    <div className="mx-auto p-4 sm:p-6 shadow-md mt-4 sm:mt-8">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mb-4">
                                <motion.input
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    placeholder='Ваше имя'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                />

                                <motion.input
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    placeholder='Номер телефона'
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                />

                                <motion.select
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
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
                                </motion.select>

                                <motion.input
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    placeholder='Возраст'
                                    type="number"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="px-3 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffe000] w-full"
                                    required
                                />
                                <motion.button
                                    animate={pulse}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="w-full sm:w-auto bg-[#ffe000] text-black py-3 px-8 rounded-md cursor-pointer transition duration-300 block mx-auto"
                                >
                                    ПОЛУЧИТЬ
                                </motion.button>
                            </div>
                        </form>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className='flex flex-col sm:flex-row gap-4 sm:gap-16 justify-center mt-8'
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className='w-full sm:w-[310px] h-[78px] bg-[#ffe000] text-black text-xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md shadow-[#ffe000]'
                        >
                            Филиал Ц4
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className='w-full sm:w-[310px] h-[78px] bg-white text-black text-xl sm:text-3xl rounded-xl flex items-center justify-center shadow-md'
                        >
                            Филиал Беруни
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                        viewport={{ once: true }}
                        className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-[50px] mt-8 sm:mt-[80px]'
                    >
                        {[
                            { icon: <FaPhone />, text: "Адрес Орьентир" },
                            { icon: <FaLocationDot />, text: "График работы" },
                            { icon: <FaRegClock />, text: "Номера телефонов" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className='flex justify-center items-center gap-3'
                            >
                                <motion.span
                                    whileHover={{ rotate: 360 }}
                                    className='bg-[#ffe000] rounded-full text-black text-[24px] flex items-center justify-center p-3'
                                >
                                    {item.icon}
                                </motion.span>
                                <p className='text-white font-normal text-base sm:text-[20px]'>{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Map Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='mt-8 sm:mt-[80px] px-4 sm:px-8'
                >
                    <Map />
                </motion.section>
            </main>
        </div>
    )
}

export default Home;