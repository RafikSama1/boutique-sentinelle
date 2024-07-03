import Link from "next/link";

export default function Footer(){
    return(
        <main>
            <footer className="bg-[#001F3F] text-white py-4 px-3 mt-16">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                        <p className="text-xs text-gray-400 md:text-sm">Copyright 2040 &copy; All Rights Reserved</p>
                    </div>
                    <div className="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
                        <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                            <li className="mx-4"><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </main>
    )
}