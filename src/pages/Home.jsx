import React from 'react';
import Header from '../Components/Header';
import { Products, Products2, Products1 } from '../Components/Products';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <h2 className='font-light text-3xl md:text-5xl text-center mb-6'>Наша продукция</h2>
            
            <Products1 />
            <Products2 />

            <div className='bg-gray-100 mb-10 px-4 md:px-0'>
                <h2 className='font-light text-3xl md:text-5xl text-center mb-6'>Лучшие продажи</h2>
                <Products />
            </div>

            <div className='mb-16 px-4 md:px-0'>
                <h2 className='uppercase font-light text-3xl md:text-5xl text-center mb-6'>новинки</h2>
                <Products />
            </div>

            <div className='bg-gray-100 mb-10 pb-5 px-4 md:px-0'>
                <h2 className='uppercase font-light text-3xl md:text-5xl text-center mb-6'>Скидки</h2>
                <Products />
            </div>

            <h2 className='uppercase font-light text-3xl md:text-5xl text-center mb-9'>Что думают о нас</h2>
            <div className='flex flex-col md:flex-row items-center gap-9 mx-auto justify-center px-4 md:px-0'>
                <div className='p-4 md:p-5 shadow-xl max-w-xs'>
                    <img src="/men.svg" alt="" className='w-12 h-12 md:w-16 md:h-16 mx-auto' />
                    <p className='text-center mt-2'>Иван Иванов</p>
                    <p className='text-center w-64 italic text-xs md:text-sm mb-2'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                    <p className='font-bold text-xs md:text-sm text-center'>20.10.21</p>
                </div>
                <div className='p-4 md:p-5 shadow-xl max-w-xs'>
                    <img src="/men.svg" alt="" className='w-12 h-12 md:w-16 md:h-16 mx-auto' />
                    <p className='text-center mt-2'>Иван Иванов</p>
                    <p className='text-center w-64 italic text-xs md:text-sm mb-2'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                    <p className='font-bold text-xs md:text-sm text-center'>20.10.21</p>
                </div>
                <div className='p-4 md:p-5 shadow-xl max-w-xs'>
                    <img src="/men.svg" alt="" className='w-12 h-12 md:w-16 md:h-16 mx-auto' />
                    <p className='text-center mt-2'>Иван Иванов</p>
                    <p className='text-center w-64 italic text-xs md:text-sm mb-2'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                    <p className='font-bold text-xs md:text-sm text-center'>20.10.21</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
