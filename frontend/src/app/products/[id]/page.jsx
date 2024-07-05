"use client"
import Link from "next/link";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { RxDotsHorizontal } from "react-icons/rx";
import axios from "axios";
import { useEffect, useState } from "react";

export default function product({params}){

    const [product, setProduct] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${params.id}`)
        .then((res)=>{setProduct(res.data)})
    },[])

    return(
        <main>
            <Navbar></Navbar>
            <section className="flex gap-48 m-16">
                <div className="h-[20rem] w-[20rem] mt-[-2rem]">
                    <img src={product.image} alt="" />
                </div>
                <div  className="flex flex-col items-start">
                    <h1 className="text-[#FF851B] text-xl font-medium pb-2">| {product.name}</h1>
                    <div className="flex text-[#FF851B] pb-2"><RxDotsHorizontal /><RxDotsHorizontal /><RxDotsHorizontal /></div>
                    <ul className="text-lg">
                        <li><b>Image Sensor:</b> {product.imageSensor}</li>
                        <li><b>Electronic Shutter Speed:</b> {product.electronicShutterSpeed}</li>
                        <li><b>Illumination Distance:</b> {product.illuminationDistance}</li>
                        <li><b>Lens Type:</b> {product.lensType}</li>
                        <li><b>Focal Length:</b> {product.focalLength}</li>
                        <li><b>Price:</b> {product.price}</li>
                    </ul>
                </div>
            </section>

            <Footer></Footer>
        </main>
    )
}