import { React, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import images from '../../../constant/imgesCarousl1';
import { BtnWhite } from "../../../compents/button";
import { GrNext ,GrPrevious} from "react-icons/gr";

function MyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="h-screen relative">

      {/* Viewport */}
      <div
        className="overflow-hidden h-full w-full"
        ref={emblaRef}
      >
        {/* Container */}
        <div className="flex h-full">

          {/* Slides */}
          {
            images.map((e, i) =>
              <div key={i} className="flex-none basis-full min-w-0 flex items-center justify-center bg-gray-200 text-xl font-bold bg-no-repeat bg-center h-full" style={{ backgroundImage: `url(${e})` }}>
                <div className="text-priWhite flex flex-col items-center gap-8">
                  <h2 className="text-3xl font-thin">women collection 2018</h2>
                  <p className="text-8xl">new arrivals</p>
                  <BtnWhite content="shop now" Pdline='2.5rem' Pdblock='0.5rem' Bdraduis='9999px' />
                </div>
              </div>
            )
          }


        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={scrollPrev}
          className="h-10 w-10 bg-[#434342] text-white hover:bg-seconderyC duration-200 rounded-full absolute left-15 top-[45%] cursor-pointer flex justify-center items-center"
        >
          <GrPrevious />
        </button>

        <button
          onClick={scrollNext}
          className="h-10 w-10 bg-[#434342] hover:bg-seconderyC duration-200  text-white rounded-full  absolute right-15 top-[45%] cursor-pointer flex  justify-center items-center"
        >
          <GrNext/>
        </button>
      </div>

    </div>
  );
}

export default MyCarousel;
