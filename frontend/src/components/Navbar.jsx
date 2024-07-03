import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
            <section className="flex justify-between items-center mx-16 my-8">
                <div>
                    <Link href="/"><span className="text-[#001F3F] text-3xl font-black	">Boutique</span> <span className="text-[#FF851B] text-3xl font-black	">Sentinelle</span></Link>
                </div>
                <div className="flex gap-10">
                    <div className="flex items-center">
                        <Link href="#"><FaPhoneAlt className="h-6 w-6 text-[#001F3F] mr-4"/></Link>
                        <div>
                            <h1 className="font-medium">Prenez contact au</h1>
                            <p className="text-[#7F8C8D]">+213 77 00 44 28</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link href="#"><IoIosMail className="h-6 w-6 text-[#001F3F] mr-4"/></Link>
                        <div>
                            <h1 className="font-medium">boutiquesentinelle@gmail.com</h1>
                            <p className="text-[#7F8C8D]">08:00 - 20:00</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link href="#"><FaFacebookF className="h-6 w-6 text-[#001F3F] mr-4"/></Link>
                        <Link href="#"><FaInstagram className="h-6 w-6 text-[#001F3F] mr-4"/></Link>
                        <Link href="#"><FaTelegramPlane className="h-6 w-6 text-[#001F3F] mr-4"/></Link>
                    </div>
                </div>
            </section>
            <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 shadow-inner bg-[#FF851B]">
                <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                    <div className="text-md font-bold text-white lg:flex-grow">
                        <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Home</Link>
                        <Link href="/products" className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Products</Link>
                        <Link href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Services</Link>
                        <Link href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">About</Link>
                        <Link href="#" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Contact</Link>
                    </div>
                    <div className="relative mx-auto text-[#7F8C8D] lg:block hidden">
                        <input className="bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none shadow-inner"type="search" name="search" placeholder="Search"/>
                        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
                            <IoSearchOutline />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}