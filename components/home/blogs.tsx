"use client";

import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: "1",
      image: "https://wonder-theme-wellness.myshopify.com/cdn/shop/articles/blog-post-2.jpg?v=1737279075&width=1920",
      heading: "5 Tips to Relieve Joint Pain Naturally",
      date: "July 05 2024",
      time_to_read: "5 Min Read",
      content: "Joint pain can limit your daily activities, but there are simple natural remedies and lifestyle changes that can help reduce discomfort and improve mobility..."
    },
    {
      id: "2",
      image: "https://wonder-theme-wellness.myshopify.com/cdn/shop/articles/blog-post-2.jpg?v=1737279075&width=1920",
      heading: "Understanding the Causes of Knee Pain",
      date: "July 06 2024",
      time_to_read: "6 Min Read",
      content: "Knee pain is common, especially with age or intense physical activity. Learn about the main causes and effective strategies to prevent and manage knee discomfort..."
    },
    {
      id: "3",
      image: "https://wonder-theme-wellness.myshopify.com/cdn/shop/articles/blog-post-2.jpg?v=1737279075&width=1920",
      heading: "Foods That Help Reduce Joint Inflammation",
      date: "July 07 2024",
      time_to_read: "7 Min Read",
      content: "What you eat can affect your joint health. Discover the top anti-inflammatory foods that help relieve stiffness and pain naturally..."
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
