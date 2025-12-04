import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                    <ShoppingBag size={20} /> Agregar
                </button>
            </div>
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default ProductCard;
