import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Landmark, Truck } from 'lucide-react';
import ProductRecommendation from '../components/ProductRecommendation';

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('mercadopago');

    if (cartItems.length === 0) {
        return (
            <div className="container section text-center">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para continuar con la compra.</p>
            </div>
        );
    }

    return (
        <div className="container section">
            <h2 className="mb-2">Finalizar Compra</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Order Summary */}
                <div>
                    <h3 className="mb-1">Resumen del Pedido</h3>
                    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                        {cartItems.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                                    <div>
                                        <p style={{ fontWeight: '600' }}>{item.name}</p>
                                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Cant: {item.quantity}</p>
                                    </div>
                                </div>
                                <p>${(item.price * item.quantity).toLocaleString()}</p>
                            </div>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: '700', marginTop: '1rem' }}>
                            <span>Total</span>
                            <span>${cartTotal.toLocaleString()}</span>
                        </div>
                    </div>
                    <ProductRecommendation />
                </div>

                {/* Payment & Shipping */}
                <div>
                    <h3 className="mb-1">Datos de Envío y Pago</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                            <h4 className="mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Truck size={20} /> Envío</h4>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <input type="text" placeholder="Dirección" style={{ padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <input type="text" placeholder="Ciudad" style={{ padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                                    <input type="text" placeholder="Código Postal" style={{ padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                            <h4 className="mb-1" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CreditCard size={20} /> Método de Pago</h4>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: paymentMethod === 'mercadopago' ? '2px solid var(--color-accent)' : '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="mercadopago"
                                        checked={paymentMethod === 'mercadopago'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <div>
                                        <span style={{ fontWeight: '600' }}>Mercado Pago</span>
                                        <p style={{ fontSize: '0.8rem', color: '#666' }}>Tarjetas, Dinero en cuenta, Rapipago</p>
                                    </div>
                                </label>

                                <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: paymentMethod === 'transferencia' ? '2px solid var(--color-accent)' : '1px solid var(--color-border)', borderRadius: '4px', cursor: 'pointer' }}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="transferencia"
                                        checked={paymentMethod === 'transferencia'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <div>
                                        <span style={{ fontWeight: '600' }}>Transferencia Bancaria</span>
                                        <p style={{ fontSize: '0.8rem', color: '#666' }}>CBU / Alias (5% de descuento)</p>
                                    </div>
                                </label>
                            </div>

                            {paymentMethod === 'transferencia' && (
                                <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'var(--color-bg)', borderRadius: '4px' }}>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}><Landmark size={16} /> Datos Bancarios:</p>
                                    <p>Banco: </p>
                                    <p>CBU: </p>
                                    <p>Alias: </p>
                                </div>
                            )}
                        </div>

                        <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>Confirmar Pedido</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
