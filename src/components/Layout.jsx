import React from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import TopBanner from './TopBanner';
import WhatsAppButton from './WhatsAppButton';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <TopBanner />
            <Navbar />
            <CartDrawer />
            <WhatsAppButton />
            <main>
                <Outlet />
            </main>
            <footer style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Medios de Pago</h4>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            {/* Mercado Pago */}
                            <div style={{ backgroundColor: 'white', padding: '0.5rem', borderRadius: '4px', width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadopago/logo__small.png" alt="Mercado Pago" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                            </div>

                            {/* Visa */}
                            <div style={{ backgroundColor: 'white', padding: '0.5rem', borderRadius: '4px', width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png" alt="Visa" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                            </div>

                            {/* Mastercard */}
                            <div style={{ backgroundColor: 'white', padding: '0.5rem', borderRadius: '4px', width: '60px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg viewBox="0 0 24 24" style={{ width: '100%', height: '100%' }}>
                                    <circle cx="7" cy="12" r="7" fill="#EB001B" />
                                    <circle cx="17" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p>&copy; {new Date().getFullYear()} Biblioteca de bordados. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
