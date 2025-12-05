import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/catalogo?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <section className="hero">
            <div className="hero-content container">
                <h1>Tu hogar, tu refugio</h1>
                <p>Descubre nuestra colección de decoración cálida y delicada para crear ambientes únicos.</p>

                <form onSubmit={handleSearch} className="search-container">
                    <input
                        type="text"
                        placeholder="¿Qué estás buscando?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="btn btn-primary search-button">
                        Buscar
                    </button>
                </form>

                <div style={{ marginTop: '1rem' }}>
                    <Link to="/catalogo" className="btn btn-secondary">Ver todo el catálogo</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
