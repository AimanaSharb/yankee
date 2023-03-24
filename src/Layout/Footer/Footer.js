import React from 'react';
import {RiInstagramLine} from 'react-icons/ri';
import {RiTelegramLine} from 'react-icons/ri';
import {Link} from "react-router-dom"
import {IconContext} from "react-icons";
import {useLocation} from "react-router"
import {useTranslation} from "react-i18next";


const Footer = () => {
    const location = useLocation()
    const {t} = useTranslation()
    return (
        <footer className={location.pathname === '/register' ? 'register-footer' : 'footer'} >
            <div className="container">

                <div className="footer__content">

                    <div className="footer__card">
                        <h3 className="footer__card-title">{t('footer.company')}</h3>
                        <Link>{t('footer.aboutus')}
                        </Link>
                        <Link>
                            {t('footer.contacts')}
                        </Link>
                    </div>

                    <div className="footer__card">
                        <h3 className="footer__card-title">{t('footer.useful')}</h3>
                        <Link to='/pay'>{t('footer.payment')}
                        </Link>
                        <Link to='/return'>
                            {t('footer.return')}
                        </Link>
                        <Link>
                            {t('footer.bonus')}
                        </Link>



                    </div>

                    <div className="footer__card">
                        <h3 className="footer__card-title">{t('footer.client')}</h3>
                        <Link to='/like'>{t('footer.like')}</Link>
                        <Link>{t('footer.public')}</Link>
                        <Link>{t('footer.politician')}</Link>
                    </div>

                    <div className="footer__card">
                        <h3 className="footer__card-title">{t('footer.contacts')}</h3>
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