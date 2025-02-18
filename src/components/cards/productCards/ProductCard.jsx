import { useEffect, useState } from "react";
import "./ProductCard.css";
import Modal from "../../modal/Modal";

const ProductCard = ({ productImages, productName, price, openModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [productImages.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="product-card">
      <div className="image-container">
        {/* Left arrow visibility */}
        <button
          className="arrow left"
          onClick={prevImage}
          style={{ display: currentIndex === 0 ? "none" : "block" }}
        >
          &lt;
        </button>

        <img
          src={productImages[currentIndex]}
          alt={productName}
          className="product-image"
        />

        {/* Right arrow visibility */}
        <button
          className="arrow right"
          onClick={nextImage}
          style={{
            display:
              currentIndex === productImages.length - 1 ? "none" : "block",
          }}
        >
          &gt;
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{productName}</h3>
        <div className="product-footer">
          <span className="product-price">{price}/piece Birr</span>
          <button className="buy-button" onClick={openModal}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
