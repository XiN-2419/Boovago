import React , { useState,useEffect } from "react";
import "./adminAdd.scss"

const AddHotel = () => {
    
    const [adminNewHotel, setAdminNewHotel] = useState({
        name:undefined,
        type:undefined,
        city:undefined,
        address:undefined,
        distance:undefined,
        photos:undefined,
        title:undefined,
        desc:undefined,
        cheapestPrice:undefined
       })

    const adminHandleChange=(e)=>{
        setAdminNewHotel(prev=>({...prev,[e.target.id]: e.target.value}))
    }
    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("https://boovago-ljor.onrender.com/api/v1/hotels", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(adminNewHotel)
            });
            setAddhotelprocess(false) ;
        } catch (err) {
            console.error(err.message);
        }
    }
    const [addhotelprocess,setAddhotelprocess] = useState(true);
    const addhotelsuccessbutton = () => {
        window.location = "/adminWeb/";
    }
    
    return (
    <>
    { 
        addhotelprocess ?
        <div className="hotelformcontainer">
            <form className="hotelform" onSubmit={onSubmitForm}>
                
                <label htmlFor="name">飯店名稱</label>
                <input type="text" id="name" onChange={adminHandleChange} style={{width:"25%"}} />

                <label htmlFor="type">飯店類型</label>
                <select id="type" onChange={adminHandleChange} style={{width:"15%", marginBottom:"12px"}}>
                    <option>請選擇 ..</option>
                    <option value="飯店">飯店</option>
                    <option value="公寓">公寓</option>
                    <option value="渡假村">渡假村</option>
                    <option value="Villa">Villa</option>
                    <option value="木屋">木屋</option>
                    <option value="小屋">小屋</option>
                    <option value="豪華露營">豪華露營</option>
                    <option value="飯店式公寓">飯店式公寓</option>
                    <option value="度假屋">度假屋</option>
                    <option value="家庭旅館">家庭旅館</option>
                    <option value="青年旅館">青年旅館</option>
                </select>

                <label htmlFor="city">飯店所在城市</label>
                <input type="text" id="city" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="distance">飯店與市中心距離</label>
                <input type="text" id="distance" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="address">飯店地址</label>
                <input type="text" id="address" onChange={adminHandleChange} required style={{width:"25%"}} />

                <label htmlFor="photos">飯店照片(僅限圖片網址)</label>
                <input type="text" id="photos" onChange={adminHandleChange} required style={{width:"50%"}} />

                <label htmlFor="cheapestPrice">飯店最低價格</label>
                <input type="text" id="cheapestPrice" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="cheapestPrice">飯店評價</label>
                <input type="text" id="rating" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="cheapestPrice">飯店評論數</label>
                <input type="text" id="comments" onChange={adminHandleChange} required style={{width:"15%"}} />

                <label htmlFor="title">飯店介紹標題</label>
                <input type="text" id="title" onChange={adminHandleChange} required style={{width:"50%"}} />

                <label htmlFor="desc">飯店介紹敘述</label>
                <textarea id="desc" onChange={adminHandleChange} required style={{width:"50%",height:"80px",marginBottom:"16px"}} />
            
                <input type="submit" value="新增飯店" className="addbutton" style={{alignSelf:"center"}}></input>
            </form>
        </div>
        :
        <div class="addhotelsuccesscontainer">
            <div class="addhotelsuccessContent">
                <p className="addhotelsuccesstext">新增飯店成功!</p>
                <button class="addhotelsuccessbutton" onClick={addhotelsuccessbutton}>跳轉回後台系統首頁</button>
            </div>
        </div>
    }
    </>
    )
};

export default AddHotel