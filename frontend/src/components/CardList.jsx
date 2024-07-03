import products from "@/app/products/page";
import axios from "axios";
import Link from "next/link";

export default async function CardList() {
  const res = await axios.get("http://localhost:3000/products")
  return ( 
            <div className="grid gap-14 md:grid-cols-4 md:gap-4 mx-12">
                {
                    res.data.map((product)=>{
                        return (
                            <div className="flex flex-col items-center" key={product._id}>
                                <div className="w-60 h-40 bg-gray-100">
                                    <Link href={`/products/${product._id}`}><img className="w-60 h-32 object-contain" src={product.image} alt="HAC-HFW2509TU-A-LED.png"/></Link>
                                </div>
                                <div className="px-6 py-4 text-center">
                                    <h1 className="font-bold text-xl text-[#001F3F] pb-4">{product.name}</h1>
                                    <h1 className="text-[#FF851B] text-xl font-bold pb-3">{product.price}</h1>
                                    <Link href="#" className="text-white font-medium text-xl bg-[#FF851B] p-2 hover:bg-[#001F3F]">Ajouter au panier</Link>
                                </div>
                            </div>
                )})}
            </div>
        )
}