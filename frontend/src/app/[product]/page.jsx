import Link from "next/link";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { RxDotsHorizontal } from "react-icons/rx";


export default function Product(){
    return(
        <main>
            <Navbar></Navbar>
            <section className="flex flex-col items-center w-[50%] mx-auto mt-28">
                <h1 className="text-[#FF851B] font-medium pb-4">| NOS PRODUITS</h1>
                <h1 className="text-4xl text-[#001F3F] font-bold pb-4">Votre Sécurité En Un Clic</h1>
                <h1 className="text-4xl text-[#001F3F] font-bold pb-4">Tous Nos Produits Prêts À Être Livrés</h1>
                <div className="flex text-[#FF851B] pb-4"><RxDotsHorizontal /><RxDotsHorizontal /><RxDotsHorizontal /></div>
                <p className="text-[#7F8C8D] pb-8 text-center">Découvrez notre gamme complète de produits de sécurité, disponibles immédiatement. Caméras HD, systèmes avancés, et accessoires pour votre protection. Commandez facilement pour une livraison rapide.</p>
            </section>

            <Footer></Footer>
        </main>
    )
}