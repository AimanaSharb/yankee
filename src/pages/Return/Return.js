import React from 'react';
import return1 from "../../assets/return icons/Vector (1).svg"
import return2 from "../../assets/return icons/Vector (2).svg"
import return3 from "../../assets/return icons/Vector (3).svg"
import return4 from "../../assets/return icons/Vector (4).svg"
import return5 from "../../assets/return icons/Vector (5).svg"
import return6 from "../../assets/return icons/Vector (6).svg"
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";

const Return = () => {
    return (
        <section className="return">

            <div className="container">
                <BreadCrumbs/>
                <h2 className="return__title">Обмен и возврат</h2>
                <p className="return__desc">Если вам не подошел заказ, мы с удовольствием вам его обменяем или примем возврат
                </p>
                <p className="return__desc">Обмен и возврат возможен в случае :
                </p>
                <ul className="return__row">
                    <li className="return__card">
                        <img src={return1} alt=""/>
                        <p className="return__card-desc">если заказ не был использован и сохранил товарный вид(в том числе не нарушены бирки, ярлыки, упаковочные материалы)</p>
                    </li>

                    <li className="return__card">
                        <img src={return2} alt=""/>
                        <p className="return__card-desc">возврат и обмен осуществляется в течение двух дней с момента получения заказа
                        </p>
                    </li>

                    <li className="return__card">
                    <img src={return3} alt=""/>
                    <p className="return__card-desc">возврат и обмен товара возможен только при отправке по Украине
                    </p>
                </li>

                    <li className="return__card">
                        <img src={return4} alt=""/>
                        <p className="return__card-desc">бланк возврата присутствует в каждой посылке </p>
                    </li>


                    <li className="return__card">
                        <img src={return5} alt=""/>
                        <p className="return__card-desc">все расходы по обмену и возврату товара несет покупатель
                        </p>
                    </li>



                    <li className="return__card">
                        <img src={return6} alt=""/>
                        <p className="return__card-desc">после получения возврата мы делаем перевод денежных средств на карту клиента</p>
                    </li>


                </ul>
            </div>
        </section>
    );
};

export default Return;