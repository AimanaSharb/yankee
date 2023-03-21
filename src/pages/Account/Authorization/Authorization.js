import React from 'react';
import {Link, useNavigate} from "react-router-dom";


const Authorization = () => {

    const loginUser = (data) =>{



    }

    return (
        <div className="auth">
            <form className="register__content" onSubmit={loginUser}>

                <h2 className="register__title">Авторизация</h2>
                <input type="email" placeholder="Ваш e-mail*" className="input"/>
                <input type="password" placeholder="Ваш пароль*" className="input password"/>
                <div className="auth__links">
                    <Link to={'/register'}>Забыли пароль?</Link>
                    <Link to={'/register'}>Нет аккаунта?</Link>
                </div>
                <button type='submit' className="item__btn register__btn">Продолжить</button>
                <div className="register__back">
                    <Link to={'/'}>Вернуться назад</Link>
                </div>


            </form>


        </div>
    );
};

export default Authorization;