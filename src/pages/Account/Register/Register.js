import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {getUsers, loginAccount} from "../../../redux/reducers/users";
import {useForm} from "react-hook-form";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'


const Register = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const styleForEyes = { color: "#E0BEA2", fontSize: "20px" }




    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm()


    const registerUser = (data) =>{
        console.log(data)



        axios.post('http://localhost:4444/register', data)
            .then((res)=>{
                dispatch(loginAccount({
                    ...res.data.user,
                    token:res.data.accessToken
                }))
                navigate('/')
                localStorage.setItem('users', JSON.stringify(
                    {
                        ...res.data.user,
                        token:res.data.accessToken
                    }

                ))


            })
            .catch((err)=>alert(err))


    }

    return (
        <div className="register">
            <form className="register__content" noValidate  onSubmit={handleSubmit(registerUser)}>

                <h2 className="register__title">Регистрация</h2>
                <div className="register__container">
                    <input
                        type='email'
                        {...register('email', {
                            required:{
                                message:"*Enter email",
                                value:true
                            },

                            pattern: {
                                message: '*Напишите правильно свой email',
                                value:  /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                            }


                        })} required placeholder="Ваш e-mail*" className="input"/>
                    <p className='register__form-error'>
                        {errors.email && errors.email?.message}
                    </p>
                </div>

                <div className="register__container">
                    <input
                           placeholder="Придумай пароль*"

                           {...register('password', {
                               required: {
                                   message: "*Enter password",
                                   value: true
                               },

                               pattern: {
                               value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                               message: '*Пароль должен содержать не менее 8 символов, заглавную букву, число!'
                           }
                           })} required type={show ? 'text' : 'password'}  className="input password"/>

                           <span className="register__eyes" onClick={()=> setShow(!show)}>{show ? <AiFillEye style={styleForEyes}
                           /> : <AiFillEyeInvisible style={styleForEyes}/>}</span>



                    <p className='register__form-error'>
                        {errors.password && errors.password?.message}
                    </p>

                </div>



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