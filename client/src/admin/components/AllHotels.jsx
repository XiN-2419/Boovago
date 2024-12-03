import { useState,useEffect } from "react";
import "./adminAll.scss"
import axios from "axios"

import EditHotel from "./EditHotel"

const AllHotels = () => {
    
    const [hotels,setHotels] = useState([]);
    const adminGetHotels = async () => {
        try {
            const response = await axios.get("/hotels");
            setHotels(response.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    const adminDeletehotel = async id => {
        try {
            const adminDeleteHotel = await axios.delete(`/hotels/${id}`);
            adminGetHotels();
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        adminGetHotels();
    },[]);

    return (
        <table className="hotelTable">
            <thead>
                <tr>
                    <th>名稱</th>
                    <th>類型</th>
                    <th>城市</th>
                    <th>地址</th>
                    <th>修改</th>
                    <th>刪除</th>
                </tr>
            </thead>
            <tbody>
            {
                hotels.map(e => (
                    <tr key={e._id}>
                        <td>{e.name}</td>
                        <td>{e.type}</td>
                        <td>{e.city}</td>
                        <td>{e.address}</td>
                        <td><EditHotel hotelData={e} /></td>
                        <td><button className="dbButtonStyle deleteButton" onClick={() => adminDeletehotel(e._id)}>刪除</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default AllHotels