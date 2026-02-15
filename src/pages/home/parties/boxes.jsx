import { Items } from "../../../constant/imgesCarousl1";
import Act from "../../../assets/images1/images/banner-08.jpg";


export const Boxes = () => {
    const getimage = Math.trunc(Items.length * Math.random());
    return (
        <div className="grid lg:grid-cols-2  justify-items-center gap-x-8 gap-y-8 px-10 bg-[#f2f2f2] py-10">
            <div className="relative group lg:w-full  md:w-[85%]  overflow-hidden">
                <img className="group-hover:scale-110 duration-500 h-full" src={Act} alt="imge" loading="lazy" />
                <div className="absolute top-[40%] text-center w-full text-white md:space-y-2 space-y-1 capitalize">
                    <h3 className="md:text-4xl text-lg font-black ">The Beauty</h3>
                    <h2 className="md:text-7xl  text-2xl font-bold">Lookbook</h2>
                    <p className="md:text-[18px]  hover:underline cursor-pointer  uppercase tracking-wider font-light">View Collection</p>
                </div>
            </div>
            <div className="bg-white text-center lg:w-full md:py-5 py-5 md:w-[85%]  group">
                <div className="md:h-70 overflow-hidden flex justify-center items-center ">
                    <img className="object-cover  group-hover:scale-110 duration-500" src={Items[getimage]} alt="image" loading="lazy" />
                </div>
                <p className="text-primeryC hover:text-seconderyC cursor-pointer"> Boxy2 T-Shirt with Roll Sleeve</p>
                <p className="text-primeryC">$20.00</p>
                <div className="flex justify-center gap-x-5 mt-10">
                    <div className="border border-primeryC w-15 h-15 flex flex-col justify-center items-center leading-none ">
                        <p>-2603</p>
                        <p className="text-primeryC">days</p>
                    </div>
                    <div className="border border-primeryC w-15 h-15 flex flex-col justify-center items-center leading-none">
                        <p>-12</p>
                        <p className="text-primeryC">days</p>
                    </div>
                    <div className="border border-primeryC w-15 h-15 flex flex-col justify-center items-center leading-none">
                        <p>-41</p>
                        <p className="text-primeryC">days</p>
                    </div>
                    <div className="border border-primeryC w-15 h-15 flex flex-col justify-center items-center leading-none">
                        <p>-44</p>
                        <p className="text-primeryC">days</p>
                    </div>
                </div>
            </div>
        </div>
    )
}