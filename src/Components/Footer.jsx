import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="bg-card px-48 bg-cover text-card-foreground py-8 " style={{ backgroundImage: "url('home2-bg.png')" }}>
                <div className="container mx-auto flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <img className='mb-4' src="/logo.svg" alt="" />
                        <p className="text-muted-foreground text-white text-xs">© 2021 Copper Pro. Все права защищены</p>
                        <a href="#" className="text-primary hover:underline text-white text-xs">
                            Политика конфиденциальности
                        </a>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-semibold text-white mb-3">Навигация</h3>
                        <ul>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Каталог
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Новости
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Доставка
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-3">Каталог</h3>
                        <ul>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Для врачей
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Медицинская посуда
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Аксессуары для меди
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Индивидуальный заказ
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                    Скидки и предложения
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-white mb-3">Контакты</h3>
                        <p className="text-muted-foreground text-white text-sm">Есенина 8-Б, Киев, 02212 Украина</p>
                        <p className="text-muted-foreground text-white text-sm">+38 050 990 37 56</p>
                        <a href="mailto:adaminik18@gmail.com" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                            a.alambik@gmail.com
                        </a>
                        <div className="flex space-x-4 mt-2">
                            <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                <img src="tw.png" alt="" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary hover:underline text-white text-sm">
                                <img src="face.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer