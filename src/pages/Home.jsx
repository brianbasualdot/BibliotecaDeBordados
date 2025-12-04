import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero />

            <section className="section container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 className="mb-2" style={{ color: 'var(--color-accent)', fontSize: '2.5rem' }}>Espíritu Navideño en Cada Puntada</h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                        Esta temporada, vestimos tu mesa de fiesta. Nuestros bordados navideños están inspirados en la magia de compartir, con diseños exclusivos de pinos, estrellas y muérdagos que evocan la calidez de las celebraciones en familia. Cada individual y posavasos es una pieza única, hecha a mano con hilos de algodón y lino, pensada para crear recuerdos inolvidables alrededor de tu mesa.
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

            <section className="section" style={{ backgroundColor: 'var(--color-secondary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2>Envios a todo el país</h2>
                    <p className="mb-2">Llevamos la calidez a tu hogar, estés donde estés.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        <div>
                            <h4>Mercado Pago</h4>
                        </div>
                        <div>
                            <h4>Tarjetas de Crédito</h4>
                        </div>
                        <div>
                            <h4>Transferencia</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
