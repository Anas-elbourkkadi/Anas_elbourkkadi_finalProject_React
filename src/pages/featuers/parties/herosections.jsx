import { useEffect } from "react";
import { ImgHero } from "../../../compents/imgHero"
import { useAppContext } from "../../../context"

export const Hero=()=>{
    const {SetNameTitle,SetSrcImg}=useAppContext();
    useEffect(()=>{
      SetNameTitle("features");
      SetSrcImg(null);
      
    },[]);
    return(
      <div className="mb-42">
            <ImgHero/>
      </div>
    )
}