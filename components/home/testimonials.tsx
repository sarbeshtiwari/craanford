"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: `"Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out!"`,
    author: "Martin B.",
    rating: 5,
  },
  {
    id: 2,
    author: "Sophia L.",
    rating: 5,
    text: `"Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out!"`,

  },
  {
    id: 3,
    author: "Chris A.",
    rating: 4,
    text: `"Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out! Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out!"`,

  },
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial-section py-5 text-center">
      <div className="container">
        <Swiper
          modules={[Pagination, Navigation]}
          loop={true}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card mx-auto p-4 p-md-5">
                <p className="testimonial-text mb-4">{item.text}</p>
                <div className="testimonial-bottom d-flex flex-column align-items-center">
                  <h5 className="author-name mb-2">{item.author}</h5>
                  <div className="rating-group d-flex align-items-center gap-2">
                    <span className="rating-stars">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)}
                    </span>
                    <span className="rating-count text-muted">
                      ({item.rating} Ratings)
                    </span>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-4"></div>
      </div>
    </section>
  );
}
