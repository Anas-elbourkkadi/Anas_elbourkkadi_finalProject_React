import { createContext, useContext, useState } from "react";


const ContextImage = createContext();

const Provider = ({ children }) => {
    const [SrcImg, SetSrcImg] = useState(null);
    const [NameTitle,SetNameTitle]=useState(null);

    let data = { SrcImg, SetSrcImg,NameTitle,SetNameTitle };

    return (
        <>
            <ContextImage.Provider value={data}>
                {children}
            </ContextImage.Provider>
        </>
    )

}
const useAppContext = () => useContext(ContextImage);
export {useAppContext,Provider};

