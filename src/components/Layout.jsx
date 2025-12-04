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
                    <p>&copy; {new Date().getFullYear()} Biblioteca de bordados. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
