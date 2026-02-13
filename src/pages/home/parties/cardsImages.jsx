import { ImgCd } from "../../../constant/imgesCarousl1"
import { BtnWhite } from "../../../compents/button"
import { Templite } from "../../../compents/templiteCardeImg"


export const ImagesCard = () => {
    return (
        <div className="grid lg:grid-cols-3 space-y-10 lg:gap-x-10 my-10 px-10">
            <Templite ImgSrc1={ImgCd[0]} ImgSrc2={ImgCd[3]} contentBtn1="dress" contentBtn2="sunglasses"/>
            <Templite ImgSrc1={ImgCd[1]} ImgSrc2={ImgCd[4]} contentBtn1="watches" contentBtn2="footerwear"/>
            <Templite ImgSrc1={ImgCd[2]} ImgSrc2={ImgCd[5]} contentBtn1="bags" contentBtn2="accessories"/>
        </div>
    )
}