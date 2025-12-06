import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-content container">
                <h1>Tu hogar, tu refugio</h1>
                <p>Descubre nuestra colección de decoración cálida y delicada para crear ambientes únicos.</p>

                <div style={{ marginTop: '2rem' }}>
                    <Link to="/catalogo" className="btn btn-secondary">Ver todo el catálogo</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
