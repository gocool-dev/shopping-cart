import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Headers/Header";
import Products from "../../components/Products/Products";
import { fetchCarts } from "../../data/cartApi";
import { CartsResponse } from "../../types/Cart.types";
import "./cart.css";

// Language translations
const translations = {
  en: {
    shoppingCart: "Shopping Cart",
    cartContains: "Cart contains",
    products: "products",
    totalPrice: "Total Price",
    loading: "Loading cart data...",
    error: "Failed to fetch cart data. Please try again later.",
    emptyCart: "Empty cart"
  },
  de: {
    shoppingCart: "Einkaufswagen",
    cartContains: "Warenkorb enthält",
    products: "Produkte",
    totalPrice: "Gesamtpreis",
    loading: "Warenkorbdaten werden geladen...",
    error: "Fehler beim Abrufen der Warenkorbdaten. Bitte versuchen Sie es später erneut.",
    emptyCart: "Leerer Warenkorb"
  },
  fr: {
    shoppingCart: "Panier",
    cartContains: "Le panier contient",
    products: "produits",
    totalPrice: "Prix total",
    loading: "Chargement des données du panier...",
    error: "Échec de la récupération des données du panier. Veuillez réessayer plus tard.",
    emptyCart: "Panier vide"
  }
};

const Cart: React.FC = () => {
  const [cartData, setCartData] = useState<CartsResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<string>("en");
  
  // Get current translations
  const t = translations[language as keyof typeof translations];

  const getCartData = async () => {
    try {
      setLoading(true);
      const data = await fetchCarts();
      
      // Recalculate total based on price only
      if (data && data.products) {
        const total = data.products.reduce((sum, product) => sum + product.price, 0);
        const totalProducts = data.products.length;
        const totalQuantity = totalProducts;
        
        data.total = total;
        data.totalProducts = totalProducts;
        data.totalQuantity = totalQuantity;
      }
      
      setCartData(data);
      setError(null);
    } catch (err) {
      setError(t.error);
      console.error("Error fetching cart data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  // Update error message when language changes
  useEffect(() => {
    if (error) {
      setError(t.error);
    }
  }, [language, t.error]);

  const resetHandler = () => {
    getCartData(); 
  };

  const removeHandler = (id: number) => {
    if (!cartData) return;

    const updatedProducts = cartData.products.filter(product => product.id !== id);
    
    const total = updatedProducts.reduce((sum, product) => sum + product.price, 0);
    const totalProducts = updatedProducts.length;
    const totalQuantity = updatedProducts.length;
    
    setCartData({
      ...cartData,
      products: updatedProducts,
      total,
      totalProducts,
      totalQuantity
    });
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <Header 
        cartData={cartData} 
        translations={{
          shoppingCart: t.shoppingCart,
          cartContains: t.cartContains,
          products: t.products,
          totalPrice: t.totalPrice
        }}
      />
      {loading ? (
        <div className="loading">{t.loading}</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        cartData && <Products 
          products={cartData.products} 
          removeHandler={removeHandler} 
          emptyCartText={t.emptyCart}
        />
      )}
      <Footer 
        resetHandler={resetHandler} 
        onLanguageChange={handleLanguageChange}
        currentLanguage={language}
      />
    </>
  );
};

export default Cart;