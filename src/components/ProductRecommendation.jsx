import React, { useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductRecommendation.css';

const ProductRecommendation = () => {
    const { cartItems, addToCart } = useCart();

    // Find a product that is NOT in the cart
    const recommendedProduct = useMemo(() => {
        const cartIds = new Set(cartItems.map(item => item.id));
        const availableProducts = products.filter(p => !cartIds.has(p.id));

        if (availableProducts.length === 0) return null;

        // Pick a random one
        const randomIndex = Math.floor(Math.random() * availableProducts.length);
        return availableProducts[randomIndex];
    }, [cartItems]);

    if (!recommendedProduct) return null;

    return (
        <div className="recommendation-container">
            <h4 className="recommendation-title">Quienes compraron esto también llevaron...</h4>
            <div className="recommendation-card">
                <img
                    src={recommendedProduct.image}
                    alt={recommendedProduct.name}
                    className="recommendation-img"
                />
                <div className="recommendation-details">
                    <p className="recommendation-name">{recommendedProduct.name}</p>
                    <p className="recommendation-price">${recommendedProduct.price.toLocaleString()}</p>
                </div>
                <button
                    className="btn btn-outline recommendation-add-btn"
                    onClick={() => addToCart(recommendedProduct)}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};

export default ProductRecommendation;
