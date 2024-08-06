import React, { useState } from 'react';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <div
            className="bg-cover bg-top min-h-screen mb-6"
            style={{ backgroundImage: "url('BG.png')" }}
        >
            <nav className={`border-gray-200 mb-20 ${isNavOpen ? 'bg-gradient-to-r from-[#5E3928] to-[#E4A16F]' : ''}`}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className={`flex items-center space-x-3 rtl:space-x-reverse ${isNavOpen ? 'hidden md:flex' : 'md:flex'}`}>
                        <img src="/logo.svg" className="h-8" alt="Flowbite Logo" />
                    </a>
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                    <div className={`flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-3 ${isNavOpen ? 'md:hidden' : ''}`}>
                        <img src="/heart.png" className='bg-white w-9 cursor-pointer p-2' alt="" />
                        <img src="/user.png" className='bg-white w-9 cursor-pointer p-2' alt="" />
                        <img src="/shopping-cart.png" className='bg-white w-9 cursor-pointer p-2' alt="" />
                    </div>
                    <div className={`items-center justify-between md:flex md:w-auto md:order-1 transition-transform duration-300 ${isNavOpen ? 'transform translate-x-0 md:translate-x-0' : 'transform -translate-x-full md:translate-x-0'}`} id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 text-white md:bg-transparent md:hover:text-orange-500 border-b-2 border-transparent transition duration-300 hover:border-current" aria-current="page">Каталог</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-orange-500 md:dark:hover:text-orange-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent border-b-2 border-transparent transition duration-300 hover:border-current text-base font-semibold">Новости</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-orange-500 md:dark:hover:text-orange-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent border-b-2 border-transparent transition duration-300 hover:border-current text-base font-semibold">Доставка</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-orange-500 md:dark:hover:text-orange-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent border-b-2 border-transparent transition duration-300 hover:border-current text-base font-semibold">О нас</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 md:p-0 md:hover:bg-transparent md:hover:text-orange-500 md:dark:hover:text-orange-500 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent border-b-2 border-transparent transition duration-300 hover:border-current text-base font-semibold">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='flex flex-col items-center md:items-start max-w-screen-xl mx-auto py-24 px-4 md:px-6'>
                <div className='text-center md:text-left'>
                    <h1 className='font-light text-4xl md:text-8xl text-white mb-4 md:mb-10'>Хит продаж</h1>
                    <hr className='border-white mb-6 md:mb-10' />
                    <h2 className='font-semibold text-3xl md:text-5xl text-white mb-4 md:mb-7 w-full md:w-3/4'>Дистиллятор для эфирных масел</h2>
                    <span className='flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-6 md:mb-10'>
                        <p className='font-light text-xl md:text-3xl text-white'>Цена</p>
                        <p className='font-bold text-white text-xl md:text-3xl'>4 906 грн</p>
                    </span>
                    <button
                        className='font-bold py-2 px-8 md:px-28 text-white'
                        style={{ backgroundImage: "linear-gradient(92.18deg, #5E3928 20.13%, #E4A16F 92.93%)" }}
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
