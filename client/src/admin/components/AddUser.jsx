import React , { useState,useEffect } from "react";
import "./adminAdd.scss"

const AddUser = () => {
    
    const [adminNewUser, setAdminNewUser] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
        isAdmin:undefined
       })

    const adminHandleChange=(e)=>{
        setAdminNewUser(prev=>({...prev,[e.target.id]: e.target.value}))
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://boovago-ljor.onrender.com/api/v1/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(adminNewUser)
            });
            setAddUserProcess(false) ;
        } catch (err) {
            console.error(err.message);
        }
    }
    const [addUserProcess,setAddUserProcess] = useState(true);
    const addhotelsuccessbutton = () => {
        window.location = "/adminWeb/";
    }
    
    return (
    <>
    { 
        addUserProcess ?
        <div className="hotelformcontainer">
            <form className="hotelform" onSubmit={onSubmitForm}>
                
                <label htmlFor="username">使用者名稱</label>
                <input type="text" id="username" onChange={adminHandleChange} style={{width:"25%"}} />

                <label htmlFor="email">使用者電子信箱</label>
                <input type="text" id="email" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="password">使用者密碼</label>
                <input type="text" id="password" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="isAdmin">使用者是否為管理者
                <input type="checkbox" id="isAdmin" onChange={adminHandleChange}/></label>
            
                <input type="submit" value="新增使用者" className="addbutton" style={{alignSelf:"center"}}></input>
            </form>
        </div>
        :
        <div class="addhotelsuccesscontainer">
            <div class="addhotelsuccessContent">
                <p className="addhotelsuccesstext">新增使用者成功!</p>
                <button class="addhotelsuccessbutton" onClick={addhotelsuccessbutton}>跳轉回後台系統首頁</button>
            </div>
        </div>
    }
    </>
    )
};

export default AddUser