"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function SupplementsSection() {
  const products = [
    { title: "Muuveeze Pain Relief Oil", price: "₹42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "₹42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "₹42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "₹42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "₹42.00", img: "/images/products/apn.png" },
    { title: "Muuveeze Pain Relief Oil", price: "₹42.00", img: "/images/products/apn.png" },
  ];

  return (
    <section className="supplements-section padding text-center">
      <small className="text-muted d-block mb-2">Lorem ipsum</small>
      <h2 className="headline">
        Lorem ipsum dolor sit amet.
      </h2>
      <div className="container-lg mt-5 position-relative">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <Swiper
          modules={[Pagination, Navigation]}
          allowTouchMove={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
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
                <p className="title">{product.title}</p>
                <p className="text-center">{product.price}</p>
                <div className="text-center add-btn-wrapper">
                  <button className="btn add-btn btn-lg">ADD TO CART</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4"></div>
      </div>
      <button className="btn view-all-btn mt-3">VIEW ALL</button>
    </section>
  );
}
