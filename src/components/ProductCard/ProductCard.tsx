import "./ProductCard.css";

interface ProductCardProps {
  productData: {
    id: number;
    title: string;
    price: number;
    [key: string]: any;
  };
  removeHandler: (id: number) => void;
}

const ProductCard = ({ productData, removeHandler }: ProductCardProps) => {
  const { id, title, price } = productData;

  return (
    <div className="card-container">
      <div className="content-wrapper">
        <h1>{title}</h1>
        <h2>${price}</h2>
      </div>
      <div className="actions">
        <button onClick={() => removeHandler(id)}>Remove</button>
      </div>
    </div>
  );
};

export default ProductCard;