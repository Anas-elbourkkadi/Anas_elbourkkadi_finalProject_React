
import { Link, useLocation, useParams } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingBagLight } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";



export const Header = () => {
    const local = useLocation();

    return (
        <div className="px-10 shadow-lg capitalize fixed top-0 z-50 w-screen bg-white" >
            <div className="flex justify-between py-4 items-center">
                <h1 className="font-black  text-4xl"><Link to="/">fashe<span className="text-red-600">.</span></Link></h1>
                <ul className="lg:flex gap-10 hidden font-thin">
                    <li className={`border-b border-transparent hover:border-black ${local.pathname == "/home" ? "text-seconderyC" : " text-black"}`}><Link to="/home"><a href="#Nav">home</a></Link></li>

                    <li className="border-b border-transparent hover:border-black"><Link>shop</Link></li>
                    <li className="border-b border-transparent hover:border-black"><Link>sale</Link></li>
                    <li className={`border-b border-transparent hover:border-black ${local.pathname == "/pages/feauters" ? "text-seconderyC" : " text-black"}`}><Link to="/pages/feauters">Features</Link></li>
                    <li className="border-b border-transparent hover:border-black"><Link>Blog</Link></li>
                    <li className={`border-b border-transparent hover:border-black ${local.pathname == "/pages/about" ? "text-seconderyC" : " text-black"}`}><Link to='/pages/about'>About</Link></li>
                    <li className="border-b border-transparent hover:border-black"><Link>Contact</Link></li>
                </ul>
                <div className="flex space-x-5 items-center font-thin">
                    <div><IoPersonOutline strokeWidth={1} size={25} /></div>
                    <span className="lg:inline hidden">|</span>
                    <PiShoppingBagLight size={25} />

                    <GiHamburgerMenu className="lg:hidden cursor-pointer " size={25} />
                </div>


            </div>
        </div>
    )
}