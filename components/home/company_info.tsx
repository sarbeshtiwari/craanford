import Image from "next/image";

export default function InfoIconsSection() {
  const data = [
    {
      img: "https://drorthooil.com/cdn/shop/files/free-shipping-icon-1.png",
      title: "Free Shipping",
      subtitle: "for orders Rs. 449 & above",
    },
    {
      img: "https://drorthooil.com/cdn/shop/files/for-cod-icon.png",
      title: "COD Available",
      subtitle: "For orders b/w Rs. 200 to Rs. 2000",
    },
    {
      img: "https://drorthooil.com/cdn/shop/files/for-email-icon.png",
      title: "Have query? Mail us",
      subtitle: "info@xyz.com",
    },
    {
      img: "https://drorthooil.com/cdn/shop/files/for-order-online-icon.png",
      title: "For Order Online",
      subtitle: "+91 82956-xxxxx",
    },
  ];

  return (
    <section className='py-5'>
      <div className="container">
        <div className="row text-center">
          {data.map((item, index) => (
            <div key={index} className="col-12 col-md-3">
              <div className='iconCircle'>
                <img
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <h6 className="mt-3 fw-bold infoTitle">{item.title}</h6>
              <p className="text-muted infoPara">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
