

export const ImgHero = ({SrcImg,NamPage}) => {
    return (
        <div className="bg-black h-60 mt-16 flex justify-center items-center relative mb-15">
            <img className="h-full w-full" src={SrcImg}alt="img" loading="lazy" />
            <dev className="text-white z-20 absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <h3 className="text-6xl uppercase font-black">f{NamPage}</h3>
            </dev>
        </div>
    )
}