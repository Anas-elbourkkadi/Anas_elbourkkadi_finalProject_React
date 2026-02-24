import { ImagePro } from '../../../constant/dataCarousl1'
import { TempletPro } from '../../../compents/proudectTemplet'
import { GrNext } from "react-icons/gr";

export const MainSection = () => {
    return (
        <div className="grid grid-cols-12 px-10 pb-5">
            <div className="col-span-3  w-full space-y-6">
                <div className="flex flex-col gap-2">
                    <h2 className="font-black text-xl">Categories</h2>
                    <p className="font-light">Best Seller (8 items)</p>
                    <p className="font-light text-primeryC">Featured (8 items)</p>
                    <p className="font-light text-primeryC">Men (8 items)</p>
                    <p className="font-light text-primeryC">Women (8 items)</p>
                </div>

                <div className="flex flex-col font-light">
                    <h2 className="font-black text-xl mb-3">color</h2>

                    <label htmlFor="black" className="space-x-2">
                        <input type="checkbox" name="" id="black" />
                        <span>black</span>
                    </label>
                    <label htmlFor="gray" className="space-x-2">
                        <input type="checkbox" id="gray" />
                        <span>gray</span>
                    </label>
                    <label htmlFor="red" className="space-x-2">
                        <input type="checkbox" id="red" />
                        <span>red</span>
                    </label>


                </div>

                <div className="flex flex-col">
                    <h2 className="font-black text-xl">price</h2>
                    <label htmlFor="twin" className="space-x-2">
                        <input type="checkbox" id="twin" />
                        <span>0-20</span>
                    </label>
                    <label htmlFor="four" className="space-x-2">
                        <input type="checkbox" id="four" />
                        <span>20-40</span>
                    </label>
                </div>

                <div className="flex flex-col uppercase  ">
                    <h2 className="font-black text-xl text-black lowercase mb-3">size</h2>
                    <label htmlFor="l" className="space-x-2">
                        <input type="checkbox" id="l" />
                        <span>l</span>
                    </label>
                    <label htmlFor="m" className="space-x-2">
                        <input type="checkbox" id="m" />
                        <span>m</span>
                    </label>
                    <label htmlFor="fxl" className="space-x-2">
                        <input type="checkbox" id="fxl" />
                        <span>xl</span>
                    </label>
                    <label htmlFor="s" className="space-x-2">
                        <input type="checkbox" id="s" />
                        <span>s</span>
                    </label>
                </div>

                <input type="text" placeholder="search..." className="border border-primeryC px-4 py-3 outline-0 focus:placeholder:opacity-0 " />

            </div>
            <div className="col-span-9   capitalize">
                <div className="flex justify-between items-center">
                    <div className="space-x-5">
                        <select name="" id="" className="border border-primeryC w-50 py-2 bg-white ps-2 font-light text-sm">
                            <option>Featured</option>
                            <option>Best Selling</option>
                            <option>Alphabetically, A-Z</option>
                            <option>Price, low to high</option>
                            <option>Price, high to low</option>
                            <option>Date, new to old</option>
                            <option>Date, old to new</option>
                        </select>
                        <select name="" id="" className="border border-primeryC w-50 py-2 bg-white ps-2 font-light text-sm">
                            <option value="">10</option>
                            <option value="">20</option>
                            <option value="">30</option>
                            <option value="">all</option>
                        </select>
                    </div>
                    <p className="text-primeryC">Showing 1 to 6 of 8 items</p>
                </div>

                <div className='grid grid-cols-3 gap-3 mt-10'>
                    {
                        ImagePro.map((e, i) =>
                            <div key={i} className='w-full'>

                                <TempletPro image={e.image} price={e.price} discript={e.discript} />
                                {console.log(e.image)}
                            </div>
                        )
                    }

                </div>
                <div className='mt-5 flex  space-x-3'>
                   <button className='text-primeryC border border-primeryC rounded-full  box-border w-9 h-9 hover:bg-[#222] hover:text-white'>1</button>
                   <button className='text-primeryC border border-primeryC rounded-full  box-border w-9 h-9 hover:bg-[#222] hover:text-white'>2</button>
                   <button className='text-primeryC border border-primeryC rounded-full  box-border w-9 h-9 hover:bg-[#222] hover:text-white flex justify-center items-center'><GrNext/></button>
                </div>
            </div>
        </div>
    )
}