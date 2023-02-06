import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios, * as others from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../../redux/reducers/users";

const Register = () => {

    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()
    const {data} = useSelector((store)=> store.users)


    useEffect(()=>{
        dispatch(getUsers())
    },[])
    console.log(data)


    const registerUser = (e) =>{

        e.preventDefault()
        let newUser = {
            email:e.target[0].value,
            password: e.target[1].value
        }

        axios.post('http://localhost:4444/users', newUser)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err.message))

    }

    return (
        <div className="register">
            <form className="register__content"   onSubmit={registerUser}>

                <h2 className="register__title">Регистрация</h2>
         <input required type="email" placeholder="Ваш e-mail*" className="input"/>
         <input type="password" placeholder="Придумай пароль*" className="input password"/>




                <button type='submit'   className="item__btn register__btn">Продолжить</button>
                <div className='register__toLogin'>
                    <Link to={'/login'}>У меня уже есть аккаунт</Link>
                </div>
                <div className="register__back">
                    <Link to={'/'}>Вернуться назад</Link>
                </div>


            </form>

        </div>
    );
};

export default Register;