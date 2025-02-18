import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding Section */}
        <div className="footer-section">
          <h2 className="footer-title">Jo Commerce</h2>
          <p className="footer-text">All rights reserved</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section footer-middle">
          <h2 className="footer-title">Quick links</h2>
          <ul className="footer-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Woman</a>
            </li>
            <li>
              <a href="#">Man</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h2 className="footer-title">Contact Us</h2>
          <p className="footer-text">
            <strong>Email:</strong> Yohannes@gmail.com
          </p>
          <p className="footer-text">
            <strong>Phone Number:</strong> +251 9 0127 3970
          </p>
          <p className="footer-text">
            <strong>Address:</strong> Addis Ababa, Ethiopia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
