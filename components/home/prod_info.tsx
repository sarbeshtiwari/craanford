"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SyncCarousel() {
  const items = [
    {
      id: 1,
      name: "Stress Relief Capsules",
      price: "₹36.00",
      productImg: "/images/products/apn.png",
      bgColor: "#4e7661",
      rightImage:
        "https://img.freepik.com/premium-photo/woman-sitting-floor-eating-bowl-fruit_1181465-21615.jpg?ga=GA1.1.1678189203.1764070992&semt=ais_hybrid&w=740&q=80",
      text: "RELAX NATURALLY, LIVE FULLY!",
    },
    {
      id: 2,
      name: "Sleep Gummies",
      price: "₹28.00",
      productImg: "/images/products/apn.png",
      bgColor: "#9c78bcff",
      rightImage:
        "https://img.freepik.com/free-photo/woman-lotus-pose-park_1098-1392.jpg?ga=GA1.1.1678189203.1764070992&semt=ais_hybrid&w=740&q=80",
      text: "SLEEP BETTER, FEEL BETTER!",
    },
    {
      id: 3,
      name: "Energy Boost",
      price: "₹32.00",
      productImg: "/images/products/apn.png",
      bgColor: "#e86d6dff",
      rightImage:
        "https://images.pexels.com/photos/1556706/pexels-photo-1556706.jpeg",
      text: "ENERGY FOR YOUR DAY!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="sync-wrapper"
      style={{ backgroundColor: items[activeIndex].bgColor }}
    >
      <div className="left-section">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="product-box">
                <div className="product-image-wrapper">
                  <Image
                    src={item.productImg}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="product-img"
                  />
                  {/* <div className="hover-buttons">
                    <button className="btn-buy">Buy Now</button>
                    <button className="btn-view">View Details</button>
                  </div> */}
                </div>
                <p className="title">{item.name}</p>
                <p className="price">{item.price}</p>
                <div className="button-wrapper">
                  <button className="btn-buy">Buy Now</button>
                  <button className="btn-view">View Details</button>
                </div>                
              </div>           
            </SwiperSlide>            
          ))}
        </Swiper>
        <div className="custom-pagination mt-4"></div>
      </div>
      <div className="seperator"></div>
      <div className="right-section">
        <img
          className="right-image"
          src={items[activeIndex].rightImage}
          alt="emotion"
        />
        <h6 className="right-text">{items[activeIndex].text}</h6>
      </div>
    </section>
  );
}
