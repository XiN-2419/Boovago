import React from 'react'
import "./skeleton.scss"


const Skeleton = ({ type,length}) => {
const number = length
    const PopularHotelSkeleton = ({i}) => (
        <div className="popularHotelSK" key={i} >
            <div className='imgSK' />
            <div className="InfoSK">
                <div className="titleSK" />
                <div className="subTitleSK" />
                <div className="priceSK" />
                <div className="rateAndCommentSK" />
            </div>
        </div>
    );
    const AmountSkeleton = () => (
        <div className="amountSK" />
    );

    const SearchItemSkeleton = ({i}) => (
        <div className="SearchItemSK" key={i}>
            <div className='imgSK animation' />
            <div className="InfoSK">
                <div className="titleSK animation" />
                <div className="subTitleSK animation" />
                <div className="decSK animation" />
                <div className="rateAndCommentSK animation" />
                <div className="priceSK animation" />
            </div>
        </div>
    );

    if (type === "popularHotel") return Array(number).fill().map((item,i)=><PopularHotelSkeleton key={i}/>);
    if (type === "Amount") return (<AmountSkeleton />);
    if (type === "SearchItemSK") return Array(number).fill().map((item,i)=><SearchItemSkeleton key={i}/>);
}

export default Skeleton