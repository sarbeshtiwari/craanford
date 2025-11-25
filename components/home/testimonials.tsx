"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    text: `"Finally, a product that delivers on its promises. My skin glows, and I feel amazing inside and out!"`,
    author: "Martin B.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: 2,
    text: `"I've never felt healthier. This supplement became part of my daily routine—highly recommended!"`,
    author: "Sophia L.",
    image:
      "https://images.unsplash.com/photo-1590086782792-42dd2350140c?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: 3,
    text: `"Noticeable improvement in my energy levels and skin. Loving it so far!"`,
    author: "Chris A.",
    image:
      "https://images.unsplash.com/photo-1589578527966-054d68fbc7ff?auto=format&fit=crop&w=200&q=80",
    rating: 4,
  },
];

export default function TestimonialSlider() {
  return (
    <section className="testimonial-section text-center py-5 px-3">
      <Swiper
        modules={[Pagination, Navigation]}
        // pagination={{ clickable: true }}
        // navigation={true}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="testimonial-swiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-container d-flex flex-column align-items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="testimonial-img"
              />

              <div className="stars my-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star">
                    ⭐
                  </span>
                ))}
              </div>

              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">{testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
