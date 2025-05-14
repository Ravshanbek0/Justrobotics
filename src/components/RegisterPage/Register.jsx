import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        course: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        return (
            formData.name.trim() !== "" &&
            formData.phoneNumber.trim() !== "" &&
            formData.age.trim() !== "" &&
            formData.course.trim() !== ""
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            alert("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }

        console.log("Form yuborilmoqda...");

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
            setFormData({ name: '', phoneNumber: '', course: '', age: '' });
        } catch (error) {
            console.error(`Xatolik: ${error.message}`);
            alert("Ma'lumotlarni yuborishda xatolik yuz berdi!");
        }
    };

    return (
        <div className="bg-black min-h-screen flex items-center justify-center p-4 md:p-10 relative overflow-hidden">
            {/* Background Yellow Circles */}
            <div className="mx-auto max-w-[1280px]">
                <div className="absolute hidden xl:block xl:bottom-[-150px] xl:left-[-150px] bg-yellow-300 xl:w-[320px] xl:h-[320px] rounded-full"></div>
                <div className="absolute hidden xl:block xl:top-[-150px] xl:right-[-150px] bg-yellow-300 xl:w-[320px] xl:h-[320px]  rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    <div>
                        <h1 className="text-white text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
                            Приглашаем на первый урок!
                        </h1>
                        <form
                            className="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-4"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-md focus:outline-none focus:border-yellow-500"
                                required
                            />

                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-md focus:outline-none focus:border-yellow-500"
                                required
                            />
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-1/2 p-3 border rounded-md focus:outline-none focus:border-yellow-500"
                                    required
                                />
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="w-1/2 p-3 border rounded-md focus:outline-none focus:border-yellow-500"
                                    required
                                >
                                    <option value="">Выберите курс</option>
                                    <option value="робототехника">робототехника</option>
                                    <option value="Английский">Английский</option>
                                    <option value="Живопись для детей">Живопись для детей</option>
                                    <option value="Живопись для взрослых">Живопись для взрослых</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img src="./imgs/Robot.png" alt="" />
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <Link to={'/'}>
                                <button className="bg-white  w-[310px] px-6 py-3 rounded-md text-black hover:bg-gray-200">
                                    НАЗАД
                                </button>
                            </Link>
                            <button
                                onClick={handleSubmit}
                                disabled={!validateForm()}
                                className={`bg-yellow-500 w-[310px] text-black py-3 rounded-md hover:bg-yellow-600 shadow-md px-4 ${!validateForm() ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                ЗАПИСАТЬСЯ
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register