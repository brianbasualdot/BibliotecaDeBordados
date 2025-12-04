import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h1>Tu hogar, tu refugio</h1>
                <p>Descubre nuestra colección de decoración cálida y delicada para crear ambientes únicos.</p>
                <Link to="/catalogo" className="btn btn-primary">Ver Catálogo</Link>
            </div>
        </section>
    );
};

export default Hero;
