import { useState } from "react";
import "./adminEdit.scss"

const EditHotel = ({ hotelData }) => {
    
    const [modamodalShow, setModamodalShow] = useState(false);
    const adimnToggleModal = () => {
        setModamodalShow(!modamodalShow);
    }

    const [modifyhotel, setModifyhotel] = useState(hotelData);

    const adminHandleChange = (e) => {
        setModifyhotel(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://boovago-ljor.onrender.com/api/v1/hotels/${hotelData._id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(modifyhotel)
            });
            setModamodalShow(!modamodalShow);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <button className="dbButtonStyle modifyButton" onClick={adimnToggleModal}>修改</button>
            
            {modamodalShow &&

                <div className="adminModalContainer">
                    <form className="adminModalContent" onSubmit={onSubmitForm}>
                        <label htmlFor="name">飯店名稱</label>
                        <input type="text" id="name" onChange={adminHandleChange} style={{ width: "25%" }} value={modifyhotel.name} />

                        <label htmlFor="type">飯店類型</label>
                        <select id="type" onChange={adminHandleChange} style={{ width: "15%", marginBottom: "12px" }} value={modifyhotel.type}>
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
                        <input type="text" id="city" onChange={adminHandleChange} required style={{ width: "15%" }} value={modifyhotel.city} />

                        <label htmlFor="distance">飯店與市中心距離</label>
                        <input type="text" id="distance" onChange={adminHandleChange} required style={{ width: "15%" }} value={modifyhotel.distance} />

                        <label htmlFor="address">飯店地址</label>
                        <input type="text" id="address" onChange={adminHandleChange} required style={{ width: "25%" }} value={modifyhotel.address} />

                        <label htmlFor="photos">飯店照片(僅限圖片網址)</label>
                        <input type="text" id="photos" onChange={adminHandleChange} required style={{ width: "50%" }} value={modifyhotel.photos} />

                        <label htmlFor="cheapestPrice">飯店最低價格</label>
                        <input type="text" id="cheapestPrice" onChange={adminHandleChange} required style={{ width: "15%" }} value={modifyhotel.cheapestPrice} />

                        <label htmlFor="cheapestPrice">飯店評價</label>
                        <input type="text" id="rating" onChange={adminHandleChange} required style={{width:"15%"}} value={modifyhotel.rating} />

                        <label htmlFor="cheapestPrice">飯店評論數</label>
                        <input type="text" id="comments" onChange={adminHandleChange} required style={{width:"15%"}} value={modifyhotel.comments} />

                        <label htmlFor="title">飯店介紹標題</label>
                        <input type="text" id="title" onChange={adminHandleChange} required style={{ width: "50%" }} value={modifyhotel.title} />

                        <label htmlFor="desc">飯店介紹敘述</label>
                        <textarea id="desc" onChange={adminHandleChange} required style={{ width: "50%", height: "80px", marginBottom: "16px" }} value={modifyhotel.desc}></textarea>
            
                        <input type="submit" value="更新飯店" className="addbutton" style={{ alignSelf: "center" }}></input>
                    </form>
                    <button onClick={adimnToggleModal}>關閉</button>
                </div>
            }
        </>
    );
};

export default EditHotel;
