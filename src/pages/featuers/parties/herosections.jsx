import { useEffect } from "react";
import { ImgHero } from "../../../compents/imgHero"
import { useAppContext } from "../../../context"

export const Hero=()=>{
    const {SetNameTitle}=useAppContext();
    useEffect(()=>{
      SetNameTitle("features");
      
    },[]);
    return(
      <div className="mb-42">
            <ImgHero/>
      </div>
    )
}