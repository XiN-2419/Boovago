import React, { useEffect, useState } from 'react'
import axios from "axios"

 const useCreateOrder = (url,orderData,createOrderState) => {
    const [Order, setOrder]=useState([]);
    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await axios.post(url, orderData)
                console.log("useEffect 啟動")
            } catch (error) {
                console.log("上傳失敗")
            }
        }
        if(createOrderState==true){
            createOrder()
        }
    }, [createOrderState])
    return{Order}
}

export default useCreateOrder