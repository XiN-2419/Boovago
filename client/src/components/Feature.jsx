import React from 'react'
import Categories from '../subcomponents/Categories'
import PostCards from '../subcomponents/PostCards'
import PopularHotels from '../subcomponents/PopularHotels'
import { CategoriesCities, CategoriesType, PopularHotelsData} from '../Data'
import "./feature.scss"
import useFetch from '../hooks/useFetch'
const Feature = () => {
    
    const {data,loading,error} =useFetch("https://boovago-ljor.onrender.com/api/v1/hotels?popularHotel=true")

    const typeUrl=`https://boovago-ljor.onrender.com/api/v1/hotels/amountoftype?type=${CategoriesType.map((type)=>type.name)}`
    const citiesUrl=`https://boovago-ljor.onrender.com/api/v1/hotels/amountofcities?cities=${CategoriesCities.map((city)=>city.name)}`
    return (
        <div className='feature'>
            <div className="container">
                <div className="listTitle">
                    <h2>依住宿類型瀏覽</h2>
                </div>
                <div className="listItems scroller">
                    <Categories dataArray={CategoriesType} url={typeUrl} />
                </div>
                <div className="listItems scroller">
                    <PostCards/>
                </div>
                <div className="listTitle">
                    <h3>探索臺灣</h3>
                    <p>這些熱門目的地魅力無窮，等你來體驗！</p>
                </div>
                <div className="listItems scroller">
                    <Categories dataArray={CategoriesCities} url={citiesUrl} />
                </div>
                <div className="listTitle">
                    <h2>人氣民宿、公寓類型住宿</h2>
                </div>
                <div className="listItems scroller">
                    <PopularHotels dataArray={data} loading={loading}/>
                </div>
            </div>
        </div>
    )
}

export default Feature