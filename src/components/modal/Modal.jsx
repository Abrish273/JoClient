import "./Modal.css";

const Modal = ({ product, closeModal }) => {
  return (
    <div className="containerc">
      <div className="modal-all">
        <div className="title">Want to buy ?</div>
        <div className="model">
          <div className="title">Contact Us at:</div>
          <p>+251 90 127 3970</p>
        </div>
        <div className="model">
          <div className="title">Telegram:</div>
          <p>@Jo2316</p>
        </div>
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

// const Modal = ({ product, closeModal }) => {
//   return (
//     <div className="container" onClick={closeModal}>
//       <div className="model" onClick={(e) => e.stopPropagation()}>
//         <div className="title">Product Details</div>
//         <p>Name: {product.name}</p>
//         <p>Description: {product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default Modal;
