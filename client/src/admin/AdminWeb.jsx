import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import "./adminWeb.scss"

import AllHotels from "./components/AllHotels"
import AddHotel from "./components/AddHotel"
import AllUser from "./components/AllUser"
import AddUser from './components/AddUser'

const AdminWeb = () => {

  let selectActive = "0";
  let selectAddButton = <div></div>;
  const [allAdminPage,setAllAdminPage] = useState("0");
  const changeAdminPage = (page) => {
    setAllAdminPage(page);
  }
  let content;
  switch (allAdminPage) { 
    case "1": 
    content = <AllHotels />;
    selectActive = "1";
    selectAddButton = <button className='addbutton' onClick={()=>{changeAdminPage("1-1")}}>新增飯店</button> ;
    break;
    case "1-1": 
    content = <AddHotel />;
    selectActive = "1";
    break;
  case "4": 
    content = <AllUser />
    selectActive = "4";
    selectAddButton = <button className='addbutton' onClick={()=>{changeAdminPage("4-1")}}>新增使用者</button> ;
    break;
  case "4-1": 
    content = <AddUser />
    selectActive = "4";
    break;
  default: 
    content = null;
    break; 
  } 


  return (
    <div className="admionHotelContainer">
      

      <div className="admionHotelContainer-sidebar">
        <nav className='admionHotelContainer-nav'>
          <ul>
            <li className={selectActive==="1"? "active":""} onClick={()=>{changeAdminPage("1")}}><span>飯店總覽</span></li>
            <li className={selectActive==="4"? "active":""} onClick={()=>{changeAdminPage("4")}}><span>用戶總覽</span></li>
            <li><spna>
              <Link to="/">
                  返回首頁
              </Link>
            </spna></li>
          </ul>
        </nav>       
      </div>

      <div className="admionHotelContainer-main">
        <div className='adminHotelContainer-db'>
          {selectAddButton}
          {content}
        </div>
      </div>

    </div>
  )
}

export default AdminWeb
