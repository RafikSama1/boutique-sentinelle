import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaShieldAlt } from "react-icons/fa";
import { GiRibbonShield } from "react-icons/gi";
import { GiBorderedShield } from "react-icons/gi";



export default function Home() {
  return (
    <main>
      <section className="flex justify-between items-center mx-16 my-8">
        <div>
          <a href="#"><span className="text-[#001F3F] text-3xl font-black	">Boutique</span> <span className="text-[#FF851B] text-3xl font-black	">Sentinelle</span></a>
        </div>
        <div className="flex gap-10">
          <div className="flex items-center">
            <a href="#"><FaPhoneAlt className="h-6 w-6 text-[#001F3F] mr-4"/></a>
            <div>
              <h1 className="font-medium">Prenez contact au</h1>
              <p className="text-[#7F8C8D]">+213 77 00 44 28</p>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#"><IoIosMail className="h-6 w-6 text-[#001F3F] mr-4"/></a>
            <div>
              <h1 className="font-medium">boutiquesentinelle@gmail.com</h1>
              <p className="text-[#7F8C8D]">08:00 - 20:00</p>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#"><FaFacebookF className="h-6 w-6 text-[#001F3F] mr-4"/></a>
            <a href="#"><FaInstagram className="h-6 w-6 text-[#001F3F] mr-4"/></a>
            <a href="#"><FaTelegramPlane className="h-6 w-6 text-[#001F3F] mr-4"/></a>
          </div>
        </div>
      </section>
      <nav className="flex items-center justify-between flex-wrap py-4 lg:px-12 shadow-inner bg-[#FF851B]">
        <div className="menu w-full flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-white lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Home</a>
            <a href="#responsive-header" className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Products</a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Services</a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">About</a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-[#001F3F] mr-2">Contact</a>
          </div>
          <div className="relative mx-auto text-[#7F8C8D] lg:block hidden">
            <input className="bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none shadow-inner"type="search" name="search" placeholder="Search"/>
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <IoSearchOutline />
            </button>
          </div>
          <div className="flex ">
            <a href="#" className="block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-white mt-4 hover:bg-[#001F3F] lg:mt-0">Sign in</a>
            <a href="#" className=" block text-md px-4  ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-[#001F3F] lg:mt-0">login</a>
          </div>
        </div>
      </nav>
      <section>
        <div className="flex justify-between gap-4 items-center">
          <div className="ml-16 w-4/5">
            <h1 className="text-[#001F3F] text-7xl font-bold mb-8">Protégez votre domicile avec nos services et <span className="text-[#FF851B]">CCTV systems</span></h1>
            <p className="text-[#7F8C8D] text-xl mb-8">Explorez notre large gamme de solutions pour sécuriser votre maison, bureau ou entreprise contre les incendies et les vols.</p>
            <button className="bg-[#FF851B] p-2 text-white hover:bg-[#001F3F]">Acheter Maintenant</button>
          </div>
          <img className="w-2/3 object-contain" src="/assets/cam.png" alt='Image by rawpixel.com on Freepik' />
        </div>
        <div className="flex gap-8 mx-12 justify-around mt-[-10rem]">
          <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[18rem] border-t-8 border-[#001F3F]">
            <img className="w-60 mb-5 object-contain h-28" src="/assets/HAC-HFW2509TU-A-LED.png" alt="HAC-HFW2509TU-A-LED"/>
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-xl text-[#001F3F]">HDCVI Camera</h1>
              <h3 className="font-medium text-xl">HAC-HFW2509TU-A-LED</h3>
              <h1 className="text-[#FF851B] text-xl font-bold">12 000 DA</h1>
              <a href="#" className="text-[#FF851B] font-medium text-xl">Acheter Maintenant</a>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[18rem] border-t-8 border-[#001F3F]">
            <img className="w-60 mb-5 object-contain h-28" src="/assets/XVR5108H-I3.png" alt="XVR5108H-I3"/>
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-xl text-[#001F3F]">HDCVI Recorders</h1>
              <h3 className="font-medium text-xl">XVR5108H-I3</h3>
              <h1 className="text-[#FF851B] text-xl font-bold">26 000 DA</h1>
              <a href="#" className="text-[#FF851B] font-medium text-xl">Acheter Maintenant</a>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[18rem] border-t-8 border-[#001F3F]">
            <img className="w-60 mb-5 object-contain h-28" src="/assets/CS4220-16GT.png" alt="CS4220-16GT"/>
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-xl text-[#001F3F]">Desktop Switch</h1>
              <h3 className="font-medium text-xl">CS4220-16GT</h3>
              <h1 className="text-[#FF851B] text-xl font-bold">22 000 DA</h1>
              <a href="#" className="text-[#FF851B] font-medium text-xl">Acheter Maintenant</a>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[18rem] border-t-8 border-[#001F3F]">
            <img className="w-60 mb-5 object-contain h-28" src="/assets/ARC3800H-W2(868).png" alt="ARC3800H-W2(868)"/>
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-xl text-[#001F3F]">Wireless Alarm</h1>
              <h3 className="font-medium text-xl">ARC3800H-W2-868</h3>
              <h1 className="text-[#FF851B] text-xl font-bold">50 000 DA</h1>
              <a href="#" className="text-[#FF851B] font-medium text-xl">Acheter Maintenant</a>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[18rem] border-t-8 border-[#001F3F]">
            <img className="w-60 mb-5 object-contain h-28" src="/assets/VTS5A40B.png" alt="VTS5A40B"/>
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-xl text-[#001F3F]">Video Intercoms</h1>
              <h3 className="font-medium text-xl">VTS5A40B</h3>
              <h1 className="text-[#FF851B] text-xl font-bold">38 000 DA</h1>
              <a href="#" className="text-[#FF851B] font-medium text-xl">Acheter Maintenant</a>
            </div>
          </div>
          <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[18rem] border-t-8 border-[#001F3F]">
            <img className="w-60 mb-5 object-contain h-28" src="/assets/HY-HT10A-R8.png" alt="HY-HT10A-R8"/>
            <div className="px-6 py-4 text-center">
              <h1 className="font-bold text-xl text-[#001F3F]">Heat Alarm</h1>
              <h3 className="font-medium text-xl">HY-HT10A-R8</h3>
              <h1 className="text-[#FF851B] text-xl font-bold">8 000 DA</h1>
              <a href="#" className="text-[#FF851B] font-medium text-xl">Acheter Maintenant</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#001F3F] h-[80%vh] flex items-center px-16 py-28 mt-[-2rem]">
        <div className="flex flex-wrap gap-5 w-[35%]">
          <img className="w-72 rounded-full" src="/assets/one.jpg" alt="" />
          <img className="w-72 rounded-tr-[8rem]" src="/assets/two.jpg" alt="" />
          <img className="w-72 rounded-bl-[8rem]" src="/assets/three.jpg" alt="" />
          <img className="w-72 rounded-full" src="/assets/four.jpg" alt="" />
        </div>
        <div className="text-white w-[65%] pl-10">
          <h1 className="text-[#FF851B] font-medium pb-4">| Securite 24h/24</h1>
          <h1 className="text-4xl font-bold pb-4">Comment BoutiqueSentinelle Assure une Protection Permanente</h1>
          <div className="flex text-[#FF851B] pb-4"><RxDotsHorizontal /><RxDotsHorizontal /><RxDotsHorizontal /></div>
          <p className="text-[#bac4c5] pb-8">Chez BoutiqueSentinelle, nous fournissons une protection complète 24h/24 grâce à des technologies de pointe, comme des caméras haute définition avec vision nocturne et détection de mouvement. Nos services de surveillance professionnelle assurent une surveillance continue avec des alertes en temps réel et une réponse rapide aux urgences.
             <br/><br/>Nous offrons également des solutions de sécurité personnalisées et intégrées, garantissant la tranquillité d'esprit et la protection de votre propriété jour et nuit. BoutiqueSentinelle est votre partenaire de confiance pour une sécurité ininterrompue.</p>
          <button className="bg-[#FF851B] p-2 text-white hover:bg-[#001F3F]">Acheter Maintenant</button>
        </div>
      </section>
      <section className="pb-28">
        <img src="/assets/background.png" alt="" />
        <div className="flex flex-col items-center w-[50%] mx-auto mt-[-8rem]">
          <h1 className="text-[#FF851B] font-medium pb-4">| Protection Impenetrable</h1>
          <h1 className="text-4xl text-[#001F3F] font-bold pb-4">Avantage D'une Installation CCTV </h1>
          <div className="flex text-[#FF851B] pb-4"><RxDotsHorizontal /><RxDotsHorizontal /><RxDotsHorizontal /></div>
          <p className="text-[#bac4c5] pb-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum reprehenderit ipsam repellendus voluptates error sapiente quibusdam expedita magni veritatis.</p>
        </div>
        <div className="mx-32 pt-12 p-4">
          <div className="grid gap-14 md:grid-cols-5 md:gap-5">
            <div className="flex flex-col items-center w-64">
              <img className="w-20" src="/assets/thief.png" alt="" />
              <h1 className="font-bold text-[#001F3F] text-lg">Contre Intrusion</h1>
              <p className="text-[#7F8C8D] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vitae.</p>
            </div>
            <div className="flex flex-col items-center w-64">
              <img className="w-20" src="/assets/camera.png" alt="" />
              <h1 className="font-bold text-[#001F3F] text-lg">Surveillance 24h/7</h1>
              <p className="text-[#7F8C8D] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vitae.</p>
            </div>
            <div className="flex flex-col items-center w-64">
              <img className="w-20" src="/assets/badg.png" alt="" />
              <h1 className="font-bold text-[#001F3F] text-lg">Securite</h1>
              <p className="text-[#7F8C8D] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vitae.</p>
            </div>
            <div className="flex flex-col items-center w-64">
              <img className="w-20" src="/assets/alarm.png" alt="" />
              <h1 className="font-bold text-[#001F3F] text-lg">Alarm</h1>
              <p className="text-[#7F8C8D] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vitae.</p>
            </div>
            <div className="flex flex-col items-center w-64">
              <img className="w-20" src="/assets/alarm.png" alt="" />
              <h1 className="font-bold text-[#001F3F] text-lg">Alarm</h1>
              <p className="text-[#7F8C8D] text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, vitae.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
          <img className="object-cover h-[28rem] w-full" src="/assets/background2.jpg" alt="" />
          <div className="flex flex-col items-center text-white w-[65%] pl-10 mt-[-22rem] text-center">
            <h1 className="text-[#FF851B] font-medium pb-4">| Plans & Services</h1>
            <h1 className="text-4xl font-bold pb-4">Nous avons des plans pour touts les budgets</h1>
            <div className="flex text-[#FF851B] pb-4"><RxDotsHorizontal /><RxDotsHorizontal /><RxDotsHorizontal /></div>
            <p className="text-[#bac4c5] pb-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur illum provident ratione! Explicabo consequatur unde earum corporis eius ipsum consectetur itaque amet sapiente officiis! Ipsa.</p>
          </div>
          <div className="flex gap-8 mx-12 justify-around mt-[6rem]">
            <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[12rem] border-b-8 border-[#001F3F] px-6 py-4 text-center">
              <div className="p-4"><FaShieldAlt className="h-6 w-6 text-[#FF851B]"/></div>
              <h1 className="font-bold text-xl text-[#001F3F] p-2">Standard</h1>
              <h1 className="text-[#FF851B] text-3xl font-bold p-2">80 000 DA</h1>
            </div>
            <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[12rem] border-b-8 border-[#001F3F] px-6 py-4 text-center">
              <div className="p-4"><GiRibbonShield className="h-6 w-6 text-[#FF851B]"/></div>
              <h1 className="font-bold text-xl text-[#001F3F] p-2">Pro</h1>
              <h1 className="text-[#FF851B] text-3xl font-bold p-2">120 000 DA</h1>
            </div>
            <div className="flex flex-col items-center max-w-sm overflow-hidden shadow-lg bg-white h-[12rem] border-b-8 border-[#001F3F] px-6 py-4 text-center">
              <div className="p-4"><GiBorderedShield className="h-6 w-6 text-[#FF851B]"/></div>
              <h1 className="font-bold text-xl text-[#001F3F] p-2">Ultra</h1>
              <h1 className="text-[#FF851B] text-3xl font-bold p-2">200 000 DA</h1>
            </div>
          </div>
      </section>
    </main>
  );
}
    