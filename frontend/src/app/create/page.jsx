"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function create(){
    const [name, setName] = useState("");
    const [imageSensor, setImageSensor] = useState('');
    const [electronicShutterSpeed, setElectronicShutterSpeed] = useState('');
    const [illuminationDistance, setIlluminationDistance] = useState('');
    const [lensType, setLensType] = useState('');
    const [focalLength, setFocalLength] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');

    const router = useRouter();

    const submit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            imageSensor,
            electronicShutterSpeed,
            illuminationDistance,
            lensType,
            focalLength,
            price,
            image
        };
        await axios.postForm('http://localhost:3000/products', data);
        router.push('/products');
    }

    return(
        <>
        <form className="bg-[#001F3F] w-5/12 p-5 mx-auto mt-10 rounded-lg" onSubmit={submit}>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">Name</label>
                    <input className="outline-none py-1 px-3 rounded-sm" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">ImageSensor</label>
                    <input className="outline-none py-1 px-3 rounded-sm" type="text" value={imageSensor} onChange={(e)=>{setImageSensor(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">ElectronicShutterSpeed</label>
                    <input className="outline-none py-1 px-3 rounded-sm" type="text" value={electronicShutterSpeed} onChange={(e)=>{setElectronicShutterSpeed(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">IlluminationDistance</label>
                    <input className="outline-none py-1 px-3 rounded-sm" type="text" value={illuminationDistance} onChange={(e)=>{setIlluminationDistance(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">LensType</label>
                    <textarea className="outline-none py-1 px-3 rounded-sm" type="text" value={lensType} onChange={(e)=>{setLensType(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">FocalLength</label>
                    <textarea className="outline-none py-1 px-3 rounded-sm" type="text" value={focalLength} onChange={(e)=>{setFocalLength(e.target.value)}}/>
                </div>
                <div className="flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">Price</label>
                    <textarea className="outline-none py-1 px-3 rounded-sm" type="Number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>
                <div className="text-white flex flex-col gap-1 my-3">
                    <label className="text-white font-bold text-md">Image</label>
                    <input className="outline-none py-1 px-3 rounded-sm" type="file" onChange={(e) => {setImage(e.target.files[0])}}/>
                </div>
                <button className="text-white bg-[#FF851B] py-2 px-4 rounded-sm font-semibold mt-5">Submit</button>
            </form>
        </>
    )

}