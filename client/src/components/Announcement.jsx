import React from 'react'
import "./announcement.scss"
import { Link } from 'react-router-dom'

const Announcement = ({ type }) => {
    return (
        <div className='announcement'>
            <div className="container">
                {type === "Upper half"
                    ?
                    <>
                        <div className="checktext">
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            此為差旅行程
                        </div>
                        <div className="discountInfo">
                            <div className="left">
                                <img src="https://cf.bstatic.com/xdata/images/hotel/square240/598101260.webp?k=98fbbf81ccc94287f11bbe894b742e559b9a6f00d4473622494d1bf3fc7c9234&o=" alt="101" />
                            </div>
                            <div className="right">
                                <h2>省 15% 或更多</h2>
                                <div>讓夢想之旅成真！在2025 年 12 月 31 日前預訂並住房就可省一筆</div>
                                <button>逛逛優惠</button>
                            </div>
                        </div>
                    </>
                    :
                    <div className="GlobalBanner">
                        <img src="https://cf.bstatic.com/static/img/genius-globe-with-badge_desktop@2x/1f5a273d871549f00bf6692f7ff612b5e8eda038.png" alt="" />
                        <div className="BannerInfoDes">
                            <h2>優惠立即享</h2>
                            <div>登入您的 Booking.com 帳戶，尋找藍色的 Genius 圖標，輕鬆省一筆！</div>
                            <div className='Bannerbtn'>
                                <Link to="/register">
                                    <button className="navButton">註冊</button>
                                </Link>
                                <Link to="/login">
                                    <button className="navButton">登入</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default Announcement