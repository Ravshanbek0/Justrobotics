import React from 'react';
import { createContext, useState, useContext, useEffect } from 'react';
import { register } from 'swiper/element';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'uz';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language; // HTML til atributini yangilash
  }, [language]);

  const translations = {
    uz: {
      // Navbar tarjimalari
      navbar: {
        home: 'Bosh sahifa',
        about: 'Biz haqimizda',
        courses: 'Kurslar',
        contacts: 'Aloqa',
        call: "QO'NG'IROQ QILISH",
        register: "Ro'yxatdan o'tish",
        login: "Kirish",
      },

      // Kurslar tarjimalari
      courses: {
        robotics: 'Robototexnika',
        english: 'Ingliz tili',
        paintingKids: 'Bolalar uchun rasm chizish',
        paintingAdults: 'Kattalar uchun rasm chizish',
        programming: 'Dasturlash',
        math: 'Matematika',
        science: 'Fan',
      },

      // Umumiy so'zlar
      common: {
        readMore: "Ko'proq o'qish",
        allCourses: "Barcha kurslar",
        ourTeachers: "Bizning o'qituvchilar",
        price: "Narx",
        duration: "Davomiylik",
        age: "Yosh",
        forKids: "Bolalar uchun",
        forAdults: "Kattalar uchun",
      },

      // Footer tarjimalari
      footer: {
        courseF: "Kurslar",
        contactF: {
          cFtitle: "Bog'lanish",
          cFTelegram: "Telegram",
          cFInsta: "Instagram",
          cFYoutube: "Yuoutube",
        }
      },

      // Sahifa sarlavhalari
      pages: {
        homeTitle: "Bosh sahifa - JustRobotics",
        aboutTitle: "Biz haqimizda - JustRobotics",
        coursesTitle: "Kurslar - JustRobotics",
        contactTitle: "Aloqa - JustRobotics",
      },

      // Xatolar
      errors: {
        requiredField: "Bu maydon to'ldirilishi shart",
        invalidEmail: "Noto'g'ri elektron pochta formati",
        invalidPhone: "Noto'g'ri telefon raqami formati",
      },
      home: {
        title: "JustRobotics",
        subtitle: "Texnologiya va san'at dunyosiga sizning qo'llab-quvvatlovchingiz",
        freeLesson: "bepul birinchi darsni oling",
        goToCourses: "KURSLARGA O'TISH",
        stats: {
          students: "QONIQARLI O'QUVCHILAR",
          teachers: "O'QITUVCHILAR",
          groups: "GURUHLAR"
        },
        aboutText: "JustRobotics – bu zamonaviy o‘quv markazi bo‘lib, texnologiyalar, san’at va ta’lim sohalariga ixtisoslashgan. Biz o‘quvchilarimizning iste’dod va ko‘nikmalarini rivojlantirish uchun qulay va qo‘llab-quvvatlovchi muhitni taqdim etamiz. Yuqori malakali o‘qituvchilardan iborat jamoamiz ilg‘or metodika va texnologiyalardan foydalanib, mashg‘ulotlarni interaktiv va qiziqarli qiladi. Biz har bir o‘quvchiga individual yondashishga katta e’tibor beramiz, ularning qobiliyatlarini ochish va muvaffaqiyatga erishishiga yordam beramiz. JustRobotics – bu nafaqat o‘quv kurslarini, balki tadbirlar, mahorat darslari va tanlovlarni ham taklif etadigan ishtiyoqli va maqsad sari intiluvchi insonlar jamoasidir. O‘quv markazining qulay joylashuvi esa istagan har bir kishi uchun oson yetib borish imkonini beradi.",
        coursesTitle: "JustRoboticsdan mualliflik kurslari",
        reviewsTitle: "fikrlar",
        getFreeLesson: "bepul birinchi darsni oling",
        form: {
          name: "Ismingiz",
          phone: "Telefon raqami",
          course: "Kursni tanlang",
          age: "Yoshingiz",
          get: "OLISH",
          selectName: "Kursni tanlang"
        },
        branches: {
          c4: "C4 filiali",
          beruni: "Beruniy filiali"
        },
        contacts: {
          address: "Manzil Oriyentir",
          schedule: "Ish jadvali",
          phones: "Telefon raqamlari"
        },

      },
      register: {
        title: "Sizni birinchi darsimizga taklif qilamiz!",
        button1: "Orqaga",
        button2: "Ro'yxatdan o'tish",
      }

    },
    ru: {
      // Navbar tarjimalari
      navbar: {
        home: 'Главная',
        about: 'О нас',
        courses: 'Курсы',
        contacts: 'Контакты',
        call: 'ПОЗВОНИТЬ',
        register: "Регистрация",
        login: "Войти",
      },
      home: {
        title: "JustRobotics",
        subtitle: "Твой проводник в мир технологий и искусства",
        freeLesson: "получите бесплатное первое занятие",
        goToCourses: "ПЕРЕЙТИ К КУРСАМ",
        stats: {
          students: "ДОВОЛЬНЫХ СТУДЕНТОВ",
          teachers: "Преподавателей",
          groups: "групп"
        },
        aboutText: "JustRobotics – это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников. Команда высококвалифицированных преподавателей использует передовые методики и технологии, делая занятия интерактивными и увлекательными. Мы уделяем большое внимание индивидуальному подходу, помогая каждому ученику раскрыть свои способности и достичь успеха. JustRobotics– это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.",
        coursesTitle: "Авторские кусы от JustRobotics",
        reviewsTitle: "отзывы",
        getFreeLesson: "получите бесплатный первый урок",
        form: {
          name: "Ваше имя",
          phone: "Номер телефона",
          course: "Выберете курс",
          age: "Возраст",
          get: "ПОЛУЧИТЬ",
          selectName: "Выберете курс"

        },
        branches: {
          c4: "Филиал Ц4",
          beruni: "Филиал Беруни"
        },
        contacts: {
          address: "Адрес Орьентир",
          schedule: "График работы",
          phones: "Номера телефонов"
        }
      },

      // Kurslar tarjimalari
      courses: {
        robotics: 'робототехника',
        english: 'Английский',
        paintingKids: 'Живопись для детей',
        paintingAdults: 'Живопись для взрослых',
        programming: 'Программирование',
        math: 'Математика',
        science: 'Наука',
      },

      // Umumiy so'zlar
      common: {
        readMore: "Читать далее",
        allCourses: "Все курсы",
        ourTeachers: "Наши преподаватели",
        price: "Цена",
        duration: "Продолжительность",
        age: "Возраст",
        forKids: "Для детей",
        forAdults: "Для взрослых",
      },

      // Footer tarjimalari
      footer: {
        courseF: "Курсы",
        contactF: {
          cFtitle: "Контакты",
          cFTelegram: "Телеграм",
          cFInsta: "Инстаграм",
          cFYoutube: "Ютюб",
        }

      },

      // Sahifa sarlavhalari
      pages: {
        homeTitle: "Главная - JustRobotics",
        aboutTitle: "О нас - JustRobotics",
        coursesTitle: "Курсы - JustRobotics",
        contactTitle: "Контакты - JustRobotics",
      },

      // Xatolar
      errors: {
        requiredField: "Это поле обязательно для заполнения",
        invalidEmail: "Неверный формат электронной почты",
        invalidPhone: "Неверный формат телефона",
      },
      register: {
        title: "Приглашаем на первый урок!",
        button1: "НАЗАД",
        button2: "ЗАПИСАТЬСЯ",
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'uz' ? 'ru' : 'uz');
  };

  return (
    <LanguageContext.Provider value={{
      language,
      toggleLanguage,
      t: translations[language],
      setLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);