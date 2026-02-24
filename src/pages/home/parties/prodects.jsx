import {ImagePro} from  '../../../constant/dataCarousl1';
import useEmblaCarousel from 'embla-carousel-react';
import { TempletPro } from '../../../compents/proudectTemplet';
import { useCallback } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";



export const Prodects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);
    return (
        <section className='mb-20'>
            <h2 className="text-center mb-20 text-4xl font-black">FEATURED PRODUCTS</h2>
            <div className='embla px-10 relative'>
                <div className='embla_viewport overflow-x-hidden' ref={emblaRef}>
                    <div className='embla_container flex touch-pan-y touch-pinch-zoom' >
                        {
                            ImagePro.map((e, index) =>
                                <div key={index} className="embla_slide  px-5 flex-none w-full  md:w-1/3 lg:w-1/4 ">
                                    <TempletPro image={e.image} price={e.price} discript={e.discript} />
                                </div>

                            )
                        }


                    </div>
                    <button
                        onClick={scrollPrev}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer "
                    >
                        <GrPrevious size={30} color='gray' />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer "
                    >
                        <GrNext size={30} color='gray' />
                    </button>
                </div>

            </div>
        </section>
    )
}