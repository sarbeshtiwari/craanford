"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function SupplementsSection() {
  const products = [
    { title: "Muuveeze Pain Relief Oil", price: "$42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "$42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "$42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "$42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "$42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "$42.00", img: "/images/products/apn.png" },
  ];

  return (
    <section className="supplements-section text-center">
      <small className="text-muted d-block mb-2">PLANT POWERED</small>

      <h2 className="headline">
        DAILY <span className="pill-icon">💊</span> SUPPLEMENTS
        <br /> WITH BENEFITS FOR YOU TO FEEL GOOD
      </h2>

      <div className="container mt-5 position-relative">

        {/* <div className="swiper-button-prev custom-prev"></div>
        <div className="swiper-button-next custom-next"></div> */}

        <Swiper
          modules={[Pagination, Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="supplementSwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card">
                <div className="product-image text-center">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="img-fluid"
                  />
                </div>
                <div className="text-center add-btn-wrapper">
                  <button className="btn add-btn btn-lg">ADD TO CART</button>
                </div>

                <p className="pt-3 fw-semibold text-center">
                  {product.title}
                </p>

                <p className="text-muted text-center">{product.price}</p>

                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="btn view-all-btn mt-5">VIEW ALL</button>
    </section>
  );
}
