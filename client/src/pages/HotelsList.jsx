import React, { useContext, useState } from 'react'
import SearchItem from '../components/SearchItem'
import Navbar from '../components/Navbar'
import "./hotelsList.scss"
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import * as locales from 'react-date-range/dist/locale';
import { useLocation } from 'react-router-dom'
import { OptionsContext } from '../context/OptionsContext'
import { new_Options } from '../constants/actionTypes'
import useFetch from '../hooks/useFetch'
import Skeleton from '../components/Skeleton'

const HotelsList = () => {
  const locationSearchBarData = useLocation()
  const [openConditions, setOpenConditions] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [destination, setDestination] = useState(locationSearchBarData.state?.destination);

  const [dates, setDates] = useState(locationSearchBarData.state?.dates);

  const [conditions, setConditions] = useState(locationSearchBarData.state?.conditions);

  const { city, date, options,dispatch } = useContext(OptionsContext)
  
  const [lowestPrice, setLowestPrice] = useState("");
  const [highestPrice, setHighestPrice] = useState("");

const searchUrl = 
 `https://boovago.onrender.com/api/v1/hotels?${destination ? "city=" + destination : "popularHotel=true"}&lowestPrice=${lowestPrice}&highestPrice=${highestPrice}`

const [fetchDataUrl,setFetchDataUrl]=useState(searchUrl)//useFetch要能夠重新搜尋就改動url讓他可以重整
const {data,loading,error} =useFetch(fetchDataUrl)

const handleClick = () => {
  dispatch({ type: new_Options, payload: { city: destination, date: dates, options: conditions } })
 setFetchDataUrl(searchUrl)
}

const handleCounter = (name, sign) => { 
  setConditions(prev => {
      return{
          ...prev,  
          [name]: sign==="increase" ?  conditions[name]+1 :conditions[name]-1 
      } 
  })
}

  return (
    <>
      <div>
        <Navbar />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <div className='searchTitle'>
                搜尋
              </div>
              <div className="listItem">
                <label>目的地／住宿名稱：{destination}</label>
                <input type="text" className="searchInput"
                  placeholder={destination === "" ? '要去哪裡?' : destination}
                  onChange={(e) => setDestination(e.target.value)} />
              </div>
              <div className="listItem">
                <label>入住/退房日期 </label>
                <span className='dates' >
                  <div className="searchInput" onClick={() => setOpenCalendar(!openCalendar)} >{format(dates[0].startDate, "MM/dd/yyyy")} - {format(dates[0].endDate, "MM/dd/yyyy")}</div>
                  {openCalendar && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                    locale={locales['zhTW']}
                  />}
                </span>
              </div>

              <div className="listItem">
                <div className="listItemLimitPrice">
                  <span className="limitTitle">
                    每晚最低價格
                  </span>
                  <input type="text" className='searchInput' onChange={(e)=>setLowestPrice(e.target.value)}/>
                </div>
                <div className="listItemLimitPrice">
                  <span className="limitTitle">
                    每晚最高價格
                  </span>
                  <input type="text" className='searchInput' onChange={(e)=>setHighestPrice(e.target.value)}/>
                </div>
                <div className="listItmConditions">
                  <span className="SearchText" onClick={() => setOpenConditions(!openConditions)}  >
                    {conditions.adult}位成人 · {conditions.children} 位小孩 · {conditions.room} 間房</span>
                    
                    {openConditions &&
              <div className="ConditionsContainer">
                <div className="condition">
                  成人
                  <div className="conditionCounter">
                    <button className="conditionCounterButton" disabled={conditions.adult <=1 } 
                      onClick={() => handleCounter("adult","decrease")} >
                      -
                    </button>
                    <span className="number">{conditions.adult}</span>
                    <button className="conditionCounterButton" onClick={() => handleCounter("adult","increase")}>
                      +
                    </button>
                  </div>
                </div>
                <div className="condition">
                  <span>小孩
                    <p>0-17 歲</p>
                  </span>

                  <div className="conditionCounter">
                    <button className="conditionCounterButton" disabled={conditions.children <=0 }
                      onClick={() => handleCounter("children","decrease")} >
                      -
                    </button>
                    <span className="number">{conditions.children}</span>
                    <button className="conditionCounterButton" onClick={() => handleCounter("children","increase")}>
                      +
                    </button>
                  </div>
                </div>

                <div className="condition">
                  房間
                  <div className="conditionCounter">
                    <button className="conditionCounterButton" disabled={conditions.room <=1 }
                      onClick={() => handleCounter("room","decrease")}>
                      -
                    </button>
                    <span className="number"> {conditions.room}</span>
                    <button className="conditionCounterButton" onClick={() => handleCounter("room","increase")}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            }

                </div>
              </div>
              <div className="listItem">
                <button className='searchbtn' onClick={handleClick}>搜尋</button>
              </div>
            </div>

            <div className="listResult">
              <div className="resultTitle">
                {/* <h2>在台北找到505間房間</h2> */}
                <h2>在 {city||"推薦熱門景點"} 找到 {data.length} 間房間</h2>
                <div className="map">
                  <button>在地圖上顯示</button>
                </div>
              </div>
            
              {loading ?   <Skeleton type="SearchItemSK" length={3}/> :
              data.map((item,index) =>
                <SearchItem active={index==0 && "active"} 
                 key={item._id} dataDetail={item}   conditions={options} dates={date} />
              )
             }
         
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelsList