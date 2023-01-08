import React from 'react';
import {RiInstagramLine} from 'react-icons/ri';
import {RiTelegramLine} from 'react-icons/ri';
import {Link} from "react-router-dom"
import {IconContext} from "react-icons";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="footer__content">

                    <div className="footer__card">
                        <h3 className="footer__card-title">КОМПАНИЯ</h3>
                        <Link>О нас
                        </Link>
                        <Link>
                            Контакты
                        </Link>
                    </div>

                    <div className="footer__card">
                        <h3 className="footer__card-title">ПОЛЕЗНОЕ</h3>
                        <Link>Оплата и доставка
                        </Link>
                        <Link>
                            Условия возврата
                        </Link>
                        <Link>
                            Бонусная система
                        </Link>



                    </div>

                    <div className="footer__card">
                        <h3 className="footer__card-title">ПОКУПАТЕЛЮ</h3>
                        <Link>Избранное</Link>
                        <Link>Публичная оферта</Link>
                        <Link>Политика конфиденциальности</Link>
                    </div>

                    <div className="footer__card">
                        <h3 className="footer__card-title">КОНТАКТЫ</h3>
                        <div className="footer__icons">
                            <Link>
                                <IconContext.Provider value={{ className: "footer__icon" }}>
                                    <RiInstagramLine/>
                                </IconContext.Provider>
                                </Link>
                            <Link>
                                <IconContext.Provider value={{ className: "footer__icon" }}>
                                    <RiTelegramLine/>
                                </IconContext.Provider>
                            </Link>

                        </div>

                        <Link>+38(073) 096 36 44</Link>
                        <Link>info@yanki.com</Link>
                    </div>
                </div>

            </div>


        </footer>
    );
};

export default Footer;