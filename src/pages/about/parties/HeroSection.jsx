import { useEffect } from "react";
import { ImgHero } from "../../../compents/imgHero";
import { useAppContext } from "../../../context";
import img from "../../../assets/images1/images/contact_top.jpg";

export const HeroAbout = () => {
    const { SetNameTitle, SetSrcImg } = useAppContext();
    useEffect(() => {
        SetNameTitle("About");
        SetSrcImg(img);
    }, [])
    return (
        <div>
            <ImgHero />
        </div>
    )
}