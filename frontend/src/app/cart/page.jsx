"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux"

export default function cart(){
    const cart = useSelector(state => state.cart.products);

    const [customerFullName, setCustomerFullName] = useState("");
    const [shippingAddress, setShippingAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [products, setProducts] = useState([]);

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            customerFullName,
            shippingAddress,
            phoneNumber,
            products
        };
        await axios.postForm('http://localhost:3000/orders', data);
        router.push('/products');
    }

    return(
        <div className="flex gap-20 my-10 justify-evenly h-auto">
            <div className="w-[30%]">{
                cart.map((product)=>{
                    if ()
                })}
            </div>
            <form onSubmit={submit} className="w-[30%] flex flex-col">
                <label className="font-semibold">FullName:</label>
                <input className="border-2 rounded-md my-2" type="text" onChange={(e)=>{setCustomerFullName(e.target.value)}}/>
                <label className="font-semibold">Shipping Adress:</label>
                <input className="border-2 rounded-md my-2" type="text" onChange={(e)=>{setShippingAddress(e.target.value)}}/>
                <label className="font-semibold">Phone Number:</label>
                <input className="border-2 rounded-md my-2" type="text" onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                <button className="text-white bg-[#FF851B] py-2 px-4 rounded-sm font-semibold mt-2 w-28">Submit</button>
            </form>
        </div>
        
    )
}