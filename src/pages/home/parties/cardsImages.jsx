import { ImgCd } from "../../../constant/imgesCarousl1"
import { BtnWhite } from "../../../compents/button"


export const ImagesCard = () => {
    return (
        <div className="grid lg:grid-cols-3 my-10 px-10">
            {
                ImgCd.map((e, i) => {
                    return (
                        <div key={i} className="">
                            {[1, 2, 5].includes(i)
                                ? <div className="w-100 h-75 relative ">
                                    <img className="w-full h-full object-cover" src={e} alt="imge1Card" loading="lazy" />
                                    <BtnWhite className="absolute bottom-10 left-[25%] " content="shop now" Pdline='2.5rem' Pdblock='0.5rem' />
                                </div>
                                : <div className="w-100 relative">
                                    <img src={e} alt="imge1Card" loading="lazy" />
                                    <BtnWhite className="absolute bottom-10 left-[25%]" content="shop now" Pdline='2.5rem' Pdblock='0.5rem' />
                                </div>

                            }
                        </div >
                    )
                })
            }

        </div >
    )
}