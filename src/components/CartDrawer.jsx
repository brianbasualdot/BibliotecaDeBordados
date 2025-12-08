import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ProductRecommendation from './ProductRecommendation';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay">
            <div className="cart-drawer">
                <div className="cart-header">
                    <h3>Tu Carrito</h3>
                    <button onClick={() => setIsCartOpen(false)} className="close-btn">
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p className="empty-cart">Tu carrito está vacío.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4>{item.name}</h4>
                                    <p>${item.price.toLocaleString()}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="remove-btn"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-summary">
                            <div className="summary-row total">
                                <span>Total:</span>
                                <span>${cartTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <Link
                            to="/checkout"
                            className="btn btn-primary checkout-btn"
                            onClick={() => setIsCartOpen(false)}
                        >
                            Iniciar Compra
                        </Link>
                        <ProductRecommendation />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartDrawer;
