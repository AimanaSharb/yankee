import React from 'react';

const Know = () => {
    return (
        <section className="know">
            <h2 className="know__title">
                Узнайте  первым о новинках
            </h2>

            <form action="" className="know__form">
                <input placeholder="Ваш e-mail*" type="email"/>
                <button className="btn" type={"submit"}>ПОДПИСАТЬСЯ</button>

            </form>
            <p className="know__txt">Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих персональных данных и ознакомлен(а) с условиями конфиденциальности.
            </p>
        </section>
    );
};

export default Know;