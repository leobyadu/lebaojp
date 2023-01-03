//Update Status 3/1/2022
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

//
import Image from "next/image";
import Link from "next/link";

export default function Trending({ data }) {
  return (
    <section className="lg:px-20 lg:pt-20 ss:px-3 ss:pt-5 text-white my-10">
      <div className="home_tittle">Features</div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
      >
        {data?.projects?.map((item) => (
          <SwiperSlide key={item.slug}>
            <Link href={`/projects/${item.slug}`}>
              <a>
                <Image
                  src={item.image[0].url}
                  width={item.image[0].width}
                  height={item.image[0].height}
                  alt="Image"
                  priority
                  layout="responsive"
                  className="cursor-pointer"
                ></Image>
                <h2 className="text-2xl pt-5">{item.title}</h2>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
