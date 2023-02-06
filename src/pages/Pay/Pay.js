import React from 'react';
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";

const Pay = () => {
    return (
        <section className="pay">
            <div className="container">
                <BreadCrumbs/>
                <h2 className="pay__title">Оплата и доставка</h2>
                <div className="pay__row">
                    <div className="pay__card">
                        <p className="pay__card-desc"> Вы можете оплатить покупку одним из ниже перечисленных способов:</p>
                        <p className="pay__card-desc">• наложенным платежом в отделении Новой Почты
                        </p>
                        <p className="pay__card-desc">• денежным переводом  Visa/MasterCard
                        </p>
                        <p className="pay__card-desc">• полная предоплата через Приват 24</p>

                    </div>
                    <div className="pay__card">
                        <p className="pay__card-desc">Мы готовы предложить несколько вариантов доставки: </p>
                        <p className="pay__card-desc">• отправка по всей Украине в отделение Новой Почты(1-2 дня)</p>
                        <p className="pay__card-desc">• международные сервисы доставки для жителей зарубежья: Укрпочта( 1-3 недели ,DHL(3-7 дней)</p>
                        <p className="pay__card-desc">• Срок доставки: 1–2 дня с момента  заказа</p>
                    </div>

                </div>
                <p className="pay__desc">Процесс оформления заказа с помощью LIQPAY:</p>
                <ul className="pay__list">
                    <li className="pay__list-item">Выбрать в корзине способ оплаты "LIQPAY";</li>

                    <li className="pay__list-item">Подтвердить заказ;</li>

                    <li className="pay__list-item">После этого Вас перенаправит на сайт LIQPAY, где вы выбираете удобный для вас способ оплаты: через Приват24, или с помощью карты Mastercard/VISA со всего мира. </li>

                </ul>




            </div>

        </section>
    );
};

export default Pay;