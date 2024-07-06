"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function OrdersList() {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/orders")
        .then((res)=>{setOrders(res.data)})
    },[])
  
  return ( 
            <div>
                {
                    orders.map((order)=>{
                        return (
                            <div className="w-[50%] p-2 mx-auto border-2 rounded-md my-2" key={order._id}>
                                <h1><span className="font-semibold">Customer FullName:</span> {order.customerFullName}</h1>
                                <h1><span className="font-semibold">Shipping Address:</span> {order.shippingAddress}</h1>
                                <h1><span className="font-semibold">Phone Number:</span> {order.phoneNumber}</h1>
                                <h1 className="text-green-500"><span className="font-semibold">Status:</span> {order.status}</h1>
                                <div className="p-2 mx-auto border-2 rounded-md">
                                    {order.products.map((product) => {
                                        return(
                                            <div>
                                                <h1><span className="font-semibold">Product Id:</span> {product.id} </h1>
                                                <h1><span className="font-semibold">Quantity:</span> {product.quantity} </h1>
                                                <hr></hr>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            
                )})}
            </div>
        )
}