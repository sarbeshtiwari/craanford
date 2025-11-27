export default function Footer() {
  return (
    <footer className="custom-footer bg-primary text-white">
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-logo">CRAANFORD</h2>
            <div className="d-flex align-items-center gap-3 mt-4">
              <div className="icon-circle">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <small>Email</small>
                <p className="mb-0">info@xyz.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mt-4">
              <div className="icon-circle">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <small>Call Us</small>
                <p className="mb-0">+91 87564 xxxxx</p>
              </div>
            </div>
            <h6 className="mt-4 mb-2 mt-5">SOCIAL MEDIA</h6>
            <div className="d-flex gap-3 social-icons">
              <a className="social-round"><i className="fab fa-facebook-f"></i></a>
              <a className="social-round"><i className="fab fa-youtube"></i></a>
              <a className="social-round"><i className="fab fa-x-twitter"></i></a>
              <a className="social-round"><i className="fab fa-pinterest"></i></a>
              <a className="social-round"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Collection</a></li>
              <li><a href="#">Journal</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">Shop</h4>
            <ul className="footer-links long-list">
              <li><a href="#">Amber Drop</a></li>
              <li><a href="#">Bluse Silk Touch</a></li>
              <li><a href="#">Freckle Bloom</a></li>
              <li><a href="#">Radiant Cream</a></li>
              <li><a href="#">Golden Calm</a></li>
              <li><a href="#">Dew Veil Fresh Skin</a></li>
              <li><a href="#">Tone Theory</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">Socials</h4>
            <ul className="footer-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              {/* <li><a href="#">X</a></li>
              <li><a href="#">Pinterest</a></li> */}
              <li><a href="#">Youtube</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h4 className="footer-title">Customer Support</h4>
            <ul className="footer-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
