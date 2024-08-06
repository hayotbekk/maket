import React from 'react';
import Slider from 'react-slick';

// Slider Component
const Products = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: false, // Center mode not needed
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1, // Change this to 1 for a better mobile experience
                },
            },
        ],
    };

    return (
        <div className='max-w-screen-lg mx-auto'>
            <Slider {...settings}>
                <div className="px-2">
                    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-64 object-cover" src="/p1.png" alt="Для эфирных масел" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                        <span className="absolute bottom-2 left-2 text-white font-semibold text-xl">Для эфирных масел</span>
                    </div>
                </div>
                <div className="px-2">
                    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-64 object-cover" src="/p2.png" alt="Для гидролатов" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                        <span className="absolute bottom-2 left-2 text-white font-semibold text-xl">Для гидролатов</span>
                    </div>
                </div>
                <div className="px-2">
                    <div className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-64 object-cover" src="/p3.png" alt="Медная посуда" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                        <span className="absolute bottom-2 left-2 text-white font-semibold text-xl">Медная посуда</span>
                    </div>
                </div>
                {/* Add more product items if needed */}
            </Slider>
        </div>
    );
};

// Grid Component 1
const Products1 = () => {
    return (
        <div className='max-w-screen-lg mx-auto mb-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                <div className="relative group shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <img className="w-full h-full object-cover rounded-lg" src="/p1.png" alt="Для эфирных масел" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <span className="absolute bottom-2 left-1/3 text-white font-semibold">Для эфирных масел</span>
                </div>
                <div className="relative group shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <img className="w-full h-full object-cover rounded-lg" src="/p2.png" alt="Для гидролатов" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <span className="absolute bottom-2 left-1/3 text-white font-semibold">Для гидролатов</span>
                </div>
                <div className="relative group shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <img className="w-full h-full object-cover rounded-lg" src="/p3.png" alt="Медная посуда" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <span className="absolute bottom-2 left-1/3 text-white font-semibold">Медная посуда</span>
                </div>
            </div>
        </div>
    );
}

// Grid Component 2
const Products2 = () => {
    return (
        <div className='max-w-screen-lg mx-auto mb-8'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                <div className="relative group shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <img className="w-full h-full object-cover rounded-lg" src="/p4.png" alt="Для эфирных масел" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <span className="absolute bottom-2 left-1/3 text-white font-semibold">Для эфирных масел</span>
                </div>
                <div className="relative group shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <img className="w-full h-full object-cover rounded-lg" src="/p5.png" alt="Для гидролатов" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <span className="absolute bottom-2 left-1/3 text-white font-semibold">Для гидролатов</span>
                </div>
                <div className="relative group shadow-md hover:shadow-2xl transition-shadow duration-300">
                    <img className="w-full h-full object-cover rounded-lg" src="/p6.png" alt="Медная посуда" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                    <span className="absolute bottom-2 left-1/3 text-white font-semibold">Медная посуда</span>
                </div>
            </div>
        </div>
    );
}

export { Products, Products1, Products2 };
