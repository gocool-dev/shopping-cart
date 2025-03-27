import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  quantity: number;
  total?: number;
  discountedTotal?: number;
}

interface ProductsProps {
  products: Product[];
  removeHandler: (id: number) => void;
  emptyCartText?: string;
}

const Products = ({ 
  products, 
  removeHandler,
  emptyCartText = "Empty cart"
}: ProductsProps) => {
  if (!products || products.length === 0) {
    return <div className="empty-container">{emptyCartText}</div>;
  }

  return (
    <div className="products-container">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            productData={product} 
            removeHandler={removeHandler} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;