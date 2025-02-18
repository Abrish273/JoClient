import { useState } from "react";
import "./AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../assets/api";

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("man");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); // Store files & previews

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);

    // Store both file & preview URL
    const newImages = files.map((file) => ({
      file, // Store the actual file
      preview: URL.createObjectURL(file), // Preview image
    }));

    setImages((prevImages) => [...prevImages, ...newImages]); // Use functional update
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productType", productType);
    formData.append("price", price);

    images.forEach((imageObj) => {
      formData.append("productImages", imageObj.file); // Append actual file
    });

    const token = localStorage.getItem("jocomtoken"); 

    try {
      const response = await axios.post(
        `${api}/products`,
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // if (response.ok) {
      console.log("productType", productType);
      navigate(productType === "man" ? "/man" : "/woman");
      // }

      console.log("Response:", response.data);
      // alert("Product uploaded successfully!");
      setImages([]); // Reset images after successful upload
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="all">
      <div className="product-form">
        <h3>Edit images</h3>
        <div className="image-preview">
          {images.map((imageObj, index) => (
            <div key={index} className="image-container">
              <img
                src={imageObj.preview}
                alt="Product"
                className="product-image"
              />
              <button
                className="remove-btn"
                onClick={() => handleRemoveImage(index)}
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        {/* Image Upload */}
        <label className="image-upload">
          <input type="file" multiple onChange={handleImageUpload} hidden />
          <div className="upload-placeholder">
            📷 Click here to add another image
          </div>
        </label>

        <div className="input-fields">
          <div className="group">
            <label>Title</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="group">
            <label>Product Type</label>
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              required
            >
              <option value="woman">Woman</option>
              <option value="man">Man</option>
            </select>
          </div>

          <div className="group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input-field"
            />
          </div>

          <button
            className="update-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
