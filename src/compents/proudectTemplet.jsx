import { Btn1 } from "./button"


export const TempletPro = ({image,price,discript}) => {
    return (
        <div >
            <div className='relative group overflow-hidden'>
                <div className='absolute z-5 top-0 h-full let-0 right-0 w-full duration-500 group-hover:bg-[#00000093]'></div>
                <img   src={image} alt="image" loading='lazy' />
                <Btn1 className="absolute group-hover:-translate-y-20 duration-500 left-1/3 -translate-x-1/4 z-6 -bottom-15 rounded-full lg:px-8 lg:py-0.5 text-[15px]" content="add to cart"  />
            </div>
            <p className='cursor-pointer hover:text-seconderyC text-lg text-primeryC font-thin'>{discript}</p>
            <p className='text-lg text-primeryC font-thin'>{price}</p>
        </div>
    )
}