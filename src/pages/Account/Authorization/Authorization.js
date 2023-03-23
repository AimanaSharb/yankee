import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import {useDispatch} from "react-redux";
import {loginAccount} from "../../../redux/reducers/users";
import {useForm} from "react-hook-form";
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'


const Authorization = () => {
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


    const loginUser = (data)=>{


        axios.post('http://localhost:4444/login', data)
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
            .catch((err)=>alert("Can't find your account"))
    }



    return (
        <div className="auth">
            <form className="register__content" onSubmit={handleSubmit(loginUser)}>

                <h2 className="register__title">Авторизация</h2>
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


                    })}
                    placeholder="Ваш e-mail*"
                    className="input"/>
                    <div className="register__container">
                        <input
                            {...register('password', {
                                required: {
                                    message: "*Enter password",
                                    value: true
                                }
                            })}
                            required type={show ? 'text' : 'password'} placeholder="Ваш пароль*" className="input password"/>
                        <span className="register__eyes" onClick={()=> setShow(!show)}>{show ? <AiFillEye style={styleForEyes}
                        /> : <AiFillEyeInvisible style={styleForEyes}/>}</span>



                        <p className='register__form-error'>
                            {errors.password && errors.password?.message}
                        </p>
                    </div>

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