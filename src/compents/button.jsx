

export const Btn1 = (propes) => {
    return (


        <button
            className="bg-black text-priWhite block  cursor-pointer hover:bg-seconderyC duration-500 text-lg uppercase"
            style={{
                paddingInline: `${propes.Pdline}`,
                paddingBlock: `${propes.Pdblock}`,
                borderRadius: `${propes.Bdraduis}`,
            }}>
            {propes.content}
        </button>
    )

}

export const BtnWhite = ({ content,Pdline, Pdblock, Bdraduis }) => {
    return (


        <button
            className="bg-white text-black block text-[16px] cursor-pointer hover:bg-seconderyC duration-500 font-light uppercase"
            style={{
                paddingInline: `${Pdline}`,
                paddingBlock: `${Pdblock}`,
                borderRadius: `${Bdraduis}`,
            }}>
            {content}
        </button>
    )
}