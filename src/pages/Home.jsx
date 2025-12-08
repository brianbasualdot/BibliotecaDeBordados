import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Truck, ShieldCheck, CreditCard } from 'lucide-react';
import './Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div>
            <Hero />
            <section className="section" style={{ backgroundColor: 'var(--color-bg)', color: 'green', textAlign: 'center', padding: '2rem 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '250px' }}>
                            <Truck size={48} strokeWidth={1.5} />
                            <h3>Envíos a todo el país</h3>
                            <p className="mb-0" style={{ opacity: 0.9 }}>Llevamos la calidez a tu hogar, estés donde estés.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '250px' }}>
                            <ShieldCheck size={48} strokeWidth={1.5} />
                            <h3>Compra Segura</h3>
                            <p className="mb-0" style={{ opacity: 0.9 }}>Tus datos protegidos en todo momento.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', maxWidth: '250px' }}>
                            <CreditCard size={48} strokeWidth={1.5} />
                            <h3>Descuento con transferencia</h3>
                            <p className="mb-0" style={{ opacity: 0.9 }}>5% OFF abonando con transferencia.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="mb-2" style={{ color: 'var(--color-accent)', fontSize: '2.5rem' }}>Espíritu Navideño en Cada Puntada</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Esta temporada, vestimos tu mesa de fiesta. Nuestros bordados navideños están inspirados en la magia de compartir, con diseños exclusivos de pinos, estrellas y muérdagos que evocan la calidez de las celebraciones en familia. Cada individual y posavasos es una pieza única,
                        hecha a mano con hilos de algodón y lino, pensada para crear recuerdos inolvidables alrededor de tu mesa.
                    </p>
                    <img
                        src="https://images.unsplash.com/photo-1545672432-284607f52207?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mesa navideña bordada"
                        style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)', width: '100%', maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Link to="/catalogo" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                        Ver Colección Navideña
                    </Link>
                </div>
            </section>

            <section className="featured-section">
                <div className="container featured-content">
                    <div className="text-center mb-2">
                        <h2 style={{ color: 'var(--color-primary)', fontSize: '2.5rem', textShadow: 'none' }}>Destacados</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--color-text)' }}>Nuestros favoritos de la temporada</p>
                    </div>
                    <div className="featured-grid">
                        {featuredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
