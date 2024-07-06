"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function CardList() {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((res)=>{setProducts(res.data)})
    },[])
  
  return ( 
            <div className="grid gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-[1500px]:grid-cols-6 mx-12">
                {
                    products.map((product)=>{
                        return (
                            <div className="flex flex-col items-center" key={product._id}>
                                <div className="w-60 h-40 bg-gray-100">
                                    <Link href={`/products/${product._id}`}><img className="w-60 h-32 object-contain" src={`http://localhost:3000/${product.image}`} alt="HAC-HFW2509TU-A-LED.png"/></Link>
                                </div>
                                <div className="px-6 py-4 text-center">
                                    <h1 className="font-bold text-xl text-[#001F3F] pb-4">{product.name}</h1>
                                    <h1 className="text-[#FF851B] text-xl font-bold pb-3">{product.price}</h1>
                                    <Link href="#" className="text-white font-medium text-base bg-[#FF851B] p-2 hover:bg-[#001F3F]">Ajouter au panier</Link>
                                </div>
                            </div>
                )})}
            </div>
        )
}