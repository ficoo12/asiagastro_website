import { useState, useEffect } from "react";
import client from "../sanity/client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BrandsCarousel = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const query = `*[_type == "brand"]{
        _id,
        brandName,
        description,
        "carouselImageUrl": carouselImage.asset->url,
        "logoUrl": logo.asset->url
      }`;

      try {
        const data = await client.fetch(query);
        setBrands(data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="container mx-auto pt-40">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 9000 }}
        loop={true}
        className="relative"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand._id}>
            <div className="text-center max-w-3xl mx-auto bg-white min-h-[450px] space-y-5 lg:space-y-0 lg:flex text-dark">
              {brand.carouselImageUrl && (
                <img
                  src={brand.carouselImageUrl}
                  alt={`${brand.brandName} carousel`}
                  className="
          w-full 
          object-cover 
          mx-auto 
          max-h-40 
          lg:w-1/2 
          lg:max-h-none 
          lg:h-auto 
        "
                />
              )}

              <div className="flex-1 flex flex-col p-4 justify-center gap-5">
                {!brand.logoUrl && (
                  <div className="h-20 flex items-center justify-center">
                    <h3 className="font-bold text-3xl lg:text-4xl">
                      {brand.brandName}
                    </h3>
                  </div>
                )}

                {brand.logoUrl && (
                  <img
                    src={brand.logoUrl}
                    alt={brand.brandName}
                    className="mx-auto my-2 h-20 w-96 xl:w-2xl object-contain"
                  />
                )}

                {brand.description && (
                  <p className="pb-10">{brand.description}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          id="prev"
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#A79261] hover:bg-[#a79261cc] text-white p-4 rounded-full"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.293 15.707a1 1 0 01-1.414 0L6.586 11.414a2 2 0 010-2.828l4.293-4.293a1 1 0 011.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <button
          id="next"
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#A79261] hover:bg-[#a79261cc] text-white p-4 rounded-full"
        >
          <svg
            className="w-6 h-6 rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M12.293 15.707a1 1 0 01-1.414 0L6.586 11.414a2 2 0 010-2.828l4.293-4.293a1 1 0 011.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};

export default BrandsCarousel;
