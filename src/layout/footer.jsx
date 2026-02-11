import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="bg-[#f0f0f0] py-10 px-10 space-y-36">
            <div className="grid lg:grid-cols-7 lg:content-between mt-7  gap-7">
                <div className="space-y-5 capitalize  lg:col-span-2">
                    <h2 className="font-bold">GET IN TOUCH </h2>
                    <p className="text-[#939393] text-[15px] font-light">Any questions? Let us know in store at 8th floor,
                        379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879 </p>
                    <div className="flex space-x-5">
                        <TiSocialFacebook size={20} className="text-[#888888] duration-500 hover:text-[#e65540] cursor-pointer" />
                        <IoLogoTwitter size={20} className="text-[#888888] duration-500 hover:text-[#e65540] cursor-pointer" />
                        <FaPinterest size={20} className="text-[#888888] duration-500 hover:text-[#e65540] cursor-pointer" />
                        <FaGooglePlusG size={20} className="text-[#888888] duration-500 hover:text-[#e65540] cursor-pointer" />
                        <FaInstagram size={20} className="text-[#888888] duration-500 hover:text-[#e65540] cursor-pointer" />
                    </div>
                </div>
                {
                    ["CATEGORIES", "links", "help"].map((e, i) =>
                        <div key={i} className="capitalize space-y-5 flex flex-col ">
                            <h2>{e}</h2>
                            {
                                [
                                    ["men", "Women", "Dresses", "Sunglasses"],
                                    ["Search", "About Us", "Contact Us", "Returns"],
                                    ["Search", "About Us", "Contact Us", "Returns"]
                                ][i].map((elemnet, idx) =>

                                    <p key={idx} className="text-[#888888] duration-500 hover:text-[#e65540] text-[15px] font-light"><Link>{elemnet}</Link></p>

                                )
                            }

                        </div>
                    )
                }

                <div className="capitalize space-y-5 ">
                    <h2>NEWSLETTER</h2>
                    <input className="placeholder:capitalize focus:border-b focus:border-b-[#e65540] border-b border-b-[#888888] outline-0" type="email" placeholder="email address" />
                    <button className="bg-black text-white rounded-full px-10 py-2 cursor-pointer hover:bg-[#e65540] duration-500 text-lg uppercase">Subscribe</button>
                </div>


            </div>
            <p className="text-center"><span className="text-[15px] font-light text-[#888888]">Copyright © </span><span className="hover:text-[#e65540] duration-300 font-light text-[#666666]">2022 Shopify Theme Developed by MassTechnologist </span> <span className="text-[15px] font-light text-[#888888] ">All rights reserved.</span> </p>
        </div>
    )
}