import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });

    useEffect(() => {
        // Find product by ID
        const found = products.find(p => p.id === parseInt(id));
        if (found) {
            setProduct(found);
            setCurrentImageIndex(0); // Reset slider on product change
            window.scrollTo(0, 0); // Scroll to top
        } else {
            // Handle not found (could redirect or show error)
            console.log("Product not found");
        }
    }, [id]);

    const allImages = useMemo(() => {
        if (!product) return [];
        const imgs = [product.image];
        if (product.images && product.images.length > 0) {
            imgs.push(...product.images);
        }
        return imgs;
    }, [product]);

    if (!product) {
        return <div style={{ padding: '4rem', textAlign: 'center' }}>Cargando producto...</div>;
    }

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };

    const handleMouseMove = (e) => {
        // Calculate position relative to the image container
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

    return (
        <div className="product-detail-container">
            <button
                className="btn-outline"
                style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}
                onClick={() => navigate(-1)}
            >
                <ArrowLeft size={18} /> Volver
            </button>

            <div className="product-detail-layout">
                {/* Image Section */}
                <div className="product-detail-image-section">
                    <div className="product-main-image-container" onMouseMove={handleMouseMove} onMouseLeave={() => setZoomPosition({ x: 50, y: 50 })}>
                        {allImages.length > 1 && (
                            <button className="nav-slider-btn prev" onClick={prevImage}>
                                <ChevronLeft size={30} />
                            </button>
                        )}

                        <img
                            src={allImages[currentImageIndex]}
                            alt={product.name}
                            className="product-detail-image"
                            style={{
                                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
                            }}
                        />

                        {allImages.length > 1 && (
                            <button className="nav-slider-btn next" onClick={nextImage}>
                                <ChevronRight size={30} />
                            </button>
                        )}
                    </div>

                    {/* Thumbnail/Dot Navigation */}
                    {allImages.length > 1 && (
                        <div className="detail-dots">
                            {allImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`detail-dot ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <img src={img} alt={`Thumb ${index}`} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="product-detail-info-section">
                    <h1 className="product-detail-title">{product.name}</h1>

                    <div className="product-price-container">
                        <div className="price-row">
                            <span className="price-label">Precio Regular:</span>
                            <span className="product-detail-price">${product.price.toLocaleString()}</span>
                        </div>

                        <div className="price-row transfer-row">
                            <span className="price-label">Transferencia:</span>
                            <span className="transfer-price">${(product.price * 0.95).toLocaleString()}</span>
                            <span className="discount-badge">5% OFF</span>
                        </div>
                    </div>

                    <div className="product-specs">
                        <div className="spec-item">
                            <h3>Material</h3>
                            <p>{product.material}</p>
                        </div>
                        <div className="spec-item">
                            <h3>Dimensiones</h3>
                            <p>{product.dimensions}</p>
                        </div>
                        <div className="spec-item">
                            <h3>Cuidados</h3>
                            <p>{product.care}</p>
                        </div>
                        <div className="spec-item">
                            <h3>Colores</h3>
                            <p>{product.colors}</p>
                        </div>
                    </div>

                    {product.description && (
                        <div className="product-description">
                            "{product.description}"
                        </div>
                    )}

                    <div className="action-buttons">
                        <button
                            className="btn-add-cart"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingBag size={24} /> Agregar al Carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
