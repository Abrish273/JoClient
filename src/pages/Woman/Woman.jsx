import { useEffect, useState } from "react";
import { products } from "../../App";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductContainer from "../../containers/ProductContainer";
import "./woman.css";
import axios from "axios";
import { api } from "../../assets/api";
import ProductCardSkeleton from "../../components/cards/productCards/ProductCardSkeleton";

const Woman = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${api}/products/category/woman`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log("---", products);

  useEffect(() => {
    if (!searchQuery) return;

    const timeoutId = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${api}/products/search?query=${searchQuery}`
        );
        setProducts(response.data.products);
      } catch (error) {
        setError("Search failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }, 3000); // 3s debounce

    return () => clearTimeout(timeoutId); // Cleanup timeout on re-render
  }, [searchQuery]);

  return (
    <div className="containerd">
      <SearchBar onSearch={setSearchQuery} />
      <div className="alld">
        <h1>Explore trendy clothes</h1>
        {loading ? (
          <ProductCardSkeleton />
        ) : (
          <ProductContainer products={products} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Woman;
