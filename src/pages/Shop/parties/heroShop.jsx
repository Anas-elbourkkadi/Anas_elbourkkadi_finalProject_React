import { useEffect } from "react";
import { useAppContext } from "../../../context"
import ImgShop from '../../../assets/images1/images/banner.webp'
import { ImgHero } from "../../../compents/imgHero";



export const HeroShop = () => {
    const { SetSrcImg, SetNameTitle } = useAppContext();
    useEffect(() => {
        SetSrcImg(ImgShop);
        SetNameTitle("proudects");
    },[]);


    return (
        <div>
            <ImgHero />
        </div>
    )
}