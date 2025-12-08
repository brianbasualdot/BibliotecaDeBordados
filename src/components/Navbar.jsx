import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { setIsCartOpen, cartCount } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/catalogo?search=${encodeURIComponent(searchTerm)}`);
            setIsSearchOpen(false);
            setSearchTerm('');
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                {/* Logo Section - Top */}
                <div className="navbar-logo-section">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <img src="/logo.png" alt="Biblioteca de bordados" style={{ height: '80px' }} />
                    </Link>
                </div>

                {/* Navigation and Actions Section - Bottom */}
                <div className="navbar-bottom-section">
                    <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                        <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMobileMenu}>Inicio</Link>
                        <Link to="/catalogo" className={`nav-link ${isActive('/catalogo')}`} onClick={closeMobileMenu}>Productos</Link>
                        <Link to="/nosotros" className={`nav-link ${isActive('/nosotros')}`} onClick={closeMobileMenu}>Sobre Nosotros</Link>
                        <Link to="/personalizados" className={`nav-link ${isActive('/personalizados')}`} onClick={closeMobileMenu}>Personalizados</Link>
                        <Link to="/contacto" className={`nav-link ${isActive('/contacto')}`} onClick={closeMobileMenu}>Contacto</Link>
                    </div>

                    <div className="nav-actions">
                        {/* Search Icon and Input */}
                        <div className={`search-wrapper ${isSearchOpen ? 'active' : ''}`}>
                            {isSearchOpen ? (
                                <form onSubmit={handleSearch} className="search-form-nav">
                                    <input
                                        type="text"
                                        placeholder="Buscar..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        autoFocus
                                        onBlur={() => !searchTerm && setIsSearchOpen(false)}
                                    />
                                    <button type="submit" className="search-submit-btn">
                                        <Search size={20} />
                                    </button>
                                </form>
                            ) : (
                                <button className="icon-btn" onClick={() => setIsSearchOpen(true)}>
                                    <Search size={24} />
                                </button>
                            )}
                        </div>

                        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
                            <ShoppingBag size={24} />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>
                        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
