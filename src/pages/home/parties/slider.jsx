import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import images from '../../../constant/imgesCarousl1';
import { BtnWhite } from "../../../compents/button";

function MyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mt-15    bg-amber-400">

      {/* Viewport */}
      <div
        className="overflow-hidden h-[90Vh] w-full  bg-red-600"
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
                  <BtnWhite content="shop now" Pdline='2.5rem' Pdblock='0.5rem' Bdraduis='9999px'/>
                </div>
              </div>
            )
          }


        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-4 absolute bottom-[50%] left-0">
        <button
          onClick={scrollPrev}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Prev
        </button>

        <button
          onClick={scrollNext}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default MyCarousel;
