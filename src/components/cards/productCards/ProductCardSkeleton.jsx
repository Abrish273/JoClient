import "./ProductCardSkeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="product-card skeleton">
      <div className="image-container">
        <div className="skeleton-box image-placeholder"></div>
      </div>
      <div className="product-info">
        <div className="skeleton-box title-placeholder"></div>
        <div className="product-footer">
          <div className="skeleton-box price-placeholder"></div>
          <div className="skeleton-box button-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
