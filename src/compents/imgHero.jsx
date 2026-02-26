import { useAppContext } from "../context"


export const ImgHero = () => {
    const { NameTitle, SrcImg } = useAppContext();
    return (
        <div className="bg-black h-60 mt-16 flex justify-center items-center relative mb-15">
            <img className="h-full w-full" src={SrcImg} alt="img" loading="lazy" />
            <div className="text-white z-20 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <h3 className="text-6xl uppercase font-black">{NameTitle}</h3>
            </div>
        </div>
    )
}