"use client";

import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: "1",
      image: "/images/blogs/blog-3.jpg",
      heading: "5 Tips to Relieve Joint Pain Naturally",
      date: "July 05 2024",
      time_to_read: "5 Min Read",
      content: "Joint pain can limit your daily activities, but there are simple natural remedies and lifestyle changes that can help reduce discomfort and improve mobility..."
    },
    {
      id: "2",
      image: "/images/blogs/blog-2.jpg",
      heading: "Understanding the Causes of Knee Pain",
      date: "July 06 2024",
      time_to_read: "6 Min Read",
      content: "Knee pain is common, especially with age or intense physical activity. Learn about the main causes and effective strategies to prevent and manage knee discomfort..."
    },
    {
      id: "3",
      image: "/images/blogs/blog-3.jpg",
      heading: "Foods That Help Reduce Joint Inflammation",
      date: "July 07 2024",
      time_to_read: "7 Min Read",
      content: "What you eat can affect your joint health. Discover the top anti-inflammatory foods that help relieve stiffness and pain naturally..."
    },
  ];

  return (
    <section className="supplements-section padding bg-light">
      <div className="container-lg">
        <h2 className="headline text-center mb-5">
          Blogs & Articles
        </h2>
        <div className="row g-4 justify-content-center">
          {blogs.map((item) => (
            <div key={item.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <div className="blog-card">                
                <div className="image-box">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="img-fluid blog-img"
                  />
                </div>
                <div className="p-4">
                    <p className="text-muted small mb-3">
                        {item.date}
                    </p>
                    <h5 className="blog-title mb-3">{item.heading}</h5>
                    <p className="text-muted small truncate mb-2">
                        {item.content}
                    </p>
                    <div className="viewmore"><Link href='' className="button">READ MORE</Link></div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
