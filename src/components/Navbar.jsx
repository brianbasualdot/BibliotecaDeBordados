import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setIsCartOpen, cartCount } = useCart();
    const location = useLocation();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    <img src="/logo.png" alt="Biblioteca de bordados" style={{ height: '80px' }} />
                </Link>

                <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>Inicio</Link>
                    <Link to="/catalogo" className={`nav-link ${isActive('/catalogo')}`} onClick={closeMobileMenu}>Catálogo</Link>
                    <Link to="/personalizados" className={`nav-link ${isActive('/personalizados')}`} onClick={closeMobileMenu}>Personalizados</Link>
                    <Link to="/nosotros" className={`nav-link ${isActive('/nosotros')}`} onClick={closeMobileMenu}>Sobre Nosotros</Link>
                    <Link to="/contacto" className={`nav-link ${isActive('/contacto')}`} onClick={closeMobileMenu}>Contacto</Link>
                </div>

                <div className="nav-actions">
                    <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
                        <ShoppingBag size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>
                    <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
