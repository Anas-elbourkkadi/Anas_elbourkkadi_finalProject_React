import { BtnWhite } from "./button"


export const Templite = ({ImgSrc1,contentBtn1,ImgSrc2,contentBtn2, className}) => {
    return (
        <div className="space-y-10 lg:col-span-1 col-span-3 flex flex-col items-center">
            <div className=" relative overflow-hidden group">
                <img  className="group-hover:scale-105 duration-500 "src={ImgSrc1} alt="imge1Card" loading="lazy" />
                <BtnWhite className="absolute bottom-10 left-1/2 -translate-x-1/2  " content={contentBtn1} Pdline='2.5rem' Pdblock='0.5rem' />
            </div>
            <div className="  relative  overflow-hidden group">
                <img className="w-full h-full object-cover group-hover:scale-105 duration-500 overflow-hidden" src={ImgSrc2} alt="imge1Card" loading="lazy" />
                <BtnWhite className="absolute bottom-10 left-1/2 -translate-x-1/2  " content={contentBtn2} Pdline='2.5rem' Pdblock='0.5rem' />
            </div>
        </div>
    )
}