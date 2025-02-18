import { useState } from "react";
import ProductCard from "../components/cards/productCards/ProductCard";
import Modal from "../components/modal/Modal";
import "./ProductContainer.css";

const ProductContainer = ({ products }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModalHandler = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };
  return (
    <div className="product-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
          openModal={() => openModalHandler(product)} // Pass the product to openModalHandler
        />
      ))}
      {openModal ? (
        <Modal product={selectedProduct} closeModal={closeModalHandler} />
      ) : null}
    </div>
  );
};

export default ProductContainer;
