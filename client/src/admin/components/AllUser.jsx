import { useState,useEffect } from "react";
import "./adminAll.scss"
import axios from "../../axiosConfig"


const AllUser = () => {
    
    const [user,setUser] = useState([]);
    const adminGetUser = async () => {
        try {
            const response = await axios.get("/users");
            setUser(response.data);
            console.log(response.data);
        } catch (err) {
            console.error(err.message);
        }
    }

    const adminDeleteUser = async id => {
        try {
            const adminDeleteUser = await axios.delete(`/users/${id}`);
            adminGetUser();
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        adminGetUser();
    },[]);

    return (
        <table className="hotelTable">
            <thead>
                <tr>
                    <th>使用者帳號</th>
                    <th>使用者電子信箱</th>
                    <th>使用者密碼(保護顯示)</th>
                    <th>使用者是否為管理者</th>
                    <th>刪除</th>
                </tr>
            </thead>
            <tbody>
            {
                user.map(e => (
                    <tr key={e._id}>
                        <td>{e.username}</td>
                        <td>{e.email}</td>
                        <td>{e.password}</td>
                        <td>{e.isAdmin === true ? "V" : ""}</td>
                        <td><button className="dbButtonStyle deleteButton" onClick={() => adminDeleteUser(e._id)}>刪除</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    )
}

export default AllUser