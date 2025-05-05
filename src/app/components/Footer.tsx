import Link from "next/link";
import { FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 border-t">
            <div className="container mx-auto px-8 py-16">
                {/* main columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* column 1 */}
                <div>
                    <h1 className="text-2xl text-amber-500 font-serif mb-5">ONE</h1>
                    <p className="text-gray-400">Curated escapes for those who wander deeper.</p>
                </div>

                {/* column 2 */}
                <div className="flex flex-col gap-4 text-gray-400">
                    <h1 className="font-medium text-white">Explore</h1>
                    <Link href="#">Destinations</Link>
                    <Link href="#">Retreats</Link>
                    <Link href="#">Testimonials</Link>
                    <Link href="#">FAQ</Link>
                </div>

                {/* column 3 */}
                <div className="text-gray-400 space-y-4">
                    <h1 className="font-medium text-white mb-4">Contact</h1>
                    <p className="">hello@one-retreats.com</p>
                    <p className="">+1 (555) 123-4567</p>
                    <p className="">Bali | Patagonia | Iceland</p>
                </div>

                {/* column 4 */}
                <div>
                    <h1 className="font-medium mb-4 text-white ">Join Our List</h1>
                    <input type="email" placeholder="Your email" className="mb-5 border border-gray-700 rounded-full px-6 py-2 focus:outline-amber-500 text-gray-400 focus:outline-none"/>
                    <button type="submit" className="rounded-full text-black bg-amber-500 px-6 py-2">Subscribe</button>
                </div>
            </div>
            </div>
            
            {/* bottom bar */}
            <div className="border-t border-white/10 mt-12 pb-6 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 px-3">© 2025 ONE Retreats. All rights reserved.</p>
                <div className="flex text-2xl px-8 space-x-6 md:mt-0 mt-4 text-gray-500 ">
                    <FaInstagram className="hover:text-amber-600"/>
                    <FaTwitter className="hover:text-amber-600"/>
                    <FaPinterest className="hover:text-amber-600"/>
                </div>
            </div>

        </footer>
    )
}
export default Footer;