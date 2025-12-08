import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false);
    const intervalRef = React.useRef(null);

    // Combine main image and first 2 gallery images for the loop (Max 3 total)
    const images = React.useMemo(() => {
        const imgs = [product.image];
        if (product.images && product.images.length > 0) {
            imgs.push(...product.images);
        }
        return imgs.slice(0, 3);
    }, [product]);

    React.useEffect(() => {
        if (isHovered && images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 1000); // Change image every 1 second
        } else {
            clearInterval(intervalRef.current);
            setCurrentImageIndex(0);
        }

        return () => clearInterval(intervalRef.current);
    }, [isHovered, images.length]);

    const handleCardClick = () => {
        navigate(`/producto/${product.id}`);
        // Scroll to top
        window.scrollTo(0, 0);
    };

    return (
        <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div
                className="product-image-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img
                    src={images[currentImageIndex]}
                    alt={product.name}
                    className="product-image"
                    style={{
                        transition: 'opacity 0.3s ease'
                    }}
                />
                <button className="add-to-cart-btn" onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                }}>
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
