import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Btn1 } from "../compents/button";


export const Footer = () => {
    return (
        <>
            <footer className="bg-[#f0f0f0] py-10 px-10 space-y-30">
                <div className="grid lg:grid-cols-7 lg:content-between mt-7  gap-7">
                    <div className="space-y-5 capitalize  lg:col-span-2">
                        <h2 className="font-bold">GET IN TOUCH </h2>
                        <p className="text-[#939393] text-[15px] font-light">Any questions? Let us know in store at 8th floor,
                            379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879 </p>
                        <div className="flex space-x-5">
                            <TiSocialFacebook size={20} className="text-primeryC duration-500 hover:text-seconderyC cursor-pointer" />
                            <IoLogoTwitter size={20} className="text-primeryC duration-500 hover:text-seconderyC cursor-pointer" />
                            <FaPinterest size={20} className="text-primeryC duration-500 hover:text-seconderyC cursor-pointer" />
                            <FaGooglePlusG size={20} className="text-primeryC duration-500 hover:text-seconderyC cursor-pointer" />
                            <FaInstagram size={20} className="text-primeryC duration-500 hover:text-seconderyC cursor-pointer" />
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

                                        <p key={idx} className="text-primeryC duration-500 hover:text-seconderyC text-[15px] font-light"><Link>{elemnet}</Link></p>

                                    )
                                }

                            </div>
                        )
                    }

                    <div className="capitalize space-y-5 ">
                        <h2>NEWSLETTER</h2>
                        <input className="placeholder:capitalize focus:border-b focus:border-b-setext-seconderyC border-b border-b-prtext-primeryC outline-0" type="email" placeholder="email address" />
                        <Btn1 content="Subscribe" Pdline='2.5rem' Pdblock='0.5rem' Bdraduis='9999px' />
                    </div>


                </div>
                <p className="text-center cursor-pointer"><span className="text-[15px] font-light text-primeryC">Copyright © </span><span className="hover:text-seconderyC duration-300 font-light text-[#666666]">2022 Shopify Theme Developed by MassTechnologist </span> <span className="text-[15px] font-light text-primeryC ">All rights reserved.</span> </p>
                <div className="fixed bottom-3 right-10 bg-[#777777] px-4 py-4 rounded-lg cursor-pointer" id="Nav">
                    <FaAngleDoubleUp color="white" />
                </div>
            </footer>

        </>
    )
}