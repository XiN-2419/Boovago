import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

import { login_failure, login_success, start_login } from '../constants/actionTypes';

import { LoginContext } from '../context/LoginContext';
import "./login.scss"
const Login = () => {

    const registerSuccess =useLocation()
    const{loading, error, dispatch}=useContext(LoginContext)
    const [loginData, setLoginData] = useState({
       account:undefined, //設置Api的時候是設置account
        password: undefined
      })
    const handleChange=(e)=>{
        setLoginData(prev=>({...prev,[e.target.id]: e.target.value}))
    }
    const navigate = useNavigate()
    const handleClick=async(e)=>{
        e.preventDefault();
        dispatch({type:start_login})//
        try{
            const res = await axios.post("https://boovago-ljor.onrender.com/api/v1/auth/login",loginData)
            dispatch({type:login_success,payload:res.data.userDetails})
            navigate("/")
        }catch(error){
            console.log(error.response)
            dispatch({type:login_failure,payload:error.response.data})
        }
    }
    return (
        <>
     <div className='login'>
        <Navbar type={"auth"}/>
            <div className="container">
                <div className="wrapper">
                    <h2 className="title">
                    登入或建立帳戶
                    </h2>
                    <div className="form">
                      <input type="text" id="account" placeholder='帳號' onChange={handleChange} />
                        <input type="password" id="password" placeholder='密碼'onChange={handleChange} />
                        <button className="submit" onClick={handleClick}>登入</button>
                        <span>忘記密碼？</span>
                        <Link to="/register" style={{textDecoration:"none",color: "inherit"}}>
                        <span>註冊＆創建一個帳號</span>
                        </Link>
                       
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login