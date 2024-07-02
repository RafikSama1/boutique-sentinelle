import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="flex justify-between items-center mx-14 my-8">
        <div>
          <h1><span className="text-[#001F3F] text-lg font-black	">Boutique</span> <span className="text-[#FF851B] text-lg font-black	">Sentinelle</span></h1>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center">
            <FaPhoneAlt className="h-6 w-6 text-[#001F3F] mr-4"/>
            <div>
              <h1 className="font-medium">Prenez contact au</h1>
              <p className="text-[#7F8C8D]">+213 77 00 44 28</p>
            </div>
          </div>
          <div className="flex items-center">
            <IoIosMail className="h-6 w-6 text-[#001F3F] mr-4"/>
            <div>
              <h1 className="font-medium">boutiquesentinelle@gmail.com</h1>
              <p className="text-[#7F8C8D]">08:00 - 20:00</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaFacebookF className="h-6 w-6 text-[#001F3F] mr-4"/>
            <FaInstagram className="h-6 w-6 text-[#001F3F] mr-4"/>
            <FaTelegramPlane className="h-6 w-6 text-[#001F3F] mr-4"/>
          </div>
        </div>
      </section>
    </main>
  );
}
    