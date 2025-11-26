"use client";

import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: "1",
      image: "https://wonder-theme-wellness.myshopify.com/cdn/shop/articles/blog-post-2.jpg?v=1737279075&width=1920",
      heading: "10 Reason why you should visit New Jersy",
      date: "July 05 2024",
      time_to_read: "6 Min Read",
      content: 'Life can be demanding, and feeling your best every day can sometimes feel like a challenge. But what if there was a simple way to boost your energy, mood, and...'
    },
    {
      id: "2",
      image: "https://wonder-theme-wellness.myshopify.com/cdn/shop/articles/blog-post-2.jpg?v=1737279075&width=1920",
      heading: "The best time to visit japan & enjoy the cherry blossoms",
      date: "July 06 2024",
      time_to_read: "7 Min Read",
      content: 'Life can be demanding, and feeling your best every day can sometimes feel like a challenge. But what if there was a simple way to boost your energy, mood, and...'
    },
    {
      id: "3",
      image: "https://wonder-theme-wellness.myshopify.com/cdn/shop/articles/blog-post-2.jpg?v=1737279075&width=1920",
      heading: "The 7 amazing destinations for adventure seekers",
      date: "July 07 2024",
      time_to_read: "8 Min Read",
      content: 'Life can be demanding, and feeling your best every day can sometimes feel like a challenge. But what if there was a simple way to boost your energy, mood, and...'
    },
  ];

  return (
    <section className="supplements-section py-5">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {blogs.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="blog-card">                
                <div className="image-box mb-2">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="img-fluid blog-img"
                  />
                </div>
                <div className="px-3 pb-2">
                    <p className="text-muted small mb-2">
                        {item.date}
                    </p>
                    <h3 className="blog-title mb-3">{item.heading}</h3>
                    <p className="text-muted small mb-2">
                        {item.content}
                    </p>
                    <Link href='' className="read-btn">READ MORE</Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
