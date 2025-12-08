import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CreditCard, Landmark, Truck } from 'lucide-react';
import ProductRecommendation from '../components/ProductRecommendation';

const Checkout = () => {
    const { cartItems, cartTotal } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('mercadopago');
    const [isLoading, setIsLoading] = useState(false);

    const discount = 0.05;
    const discountAmount = paymentMethod === 'transferencia' ? cartTotal * discount : 0;
    const finalTotal = cartTotal - discountAmount;

    const handleCheckout = async () => {
        if (paymentMethod === 'mercadopago') {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/create_preference', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ items: cartItems }),
                });

                const data = await response.json();

                if (data.id) {
                    window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${data.id}`;
                } else {
                    console.error('Error creating preference:', data);
                    alert('Hubo un error al procesar el pago. Por favor intenta nuevamente.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Hubo un error de conexión. Asegúrate de que el servidor esté corriendo.');
            } finally {
                setIsLoading(false);
            }
        } else {
            // Transfer logic (already shown in UI, maybe redirect to success page or show modal)
            alert('¡Gracias por tu compra! Por favor realiza la transferencia a los datos indicados.');
        }
    };

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

                        <div style={{ marginTop: '1rem', borderTop: '2px solid #eee', paddingTop: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#666' }}>
                                <span>Subtotal</span>
                                <span>${cartTotal.toLocaleString()}</span>
                            </div>

                            {paymentMethod === 'transferencia' && (
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-primary)', fontWeight: '500' }}>
                                    <span>Descuento Transferencia (5%)</span>
                                    <span>-${discountAmount.toLocaleString()}</span>
                                </div>
                            )}

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem', fontWeight: '700', marginTop: '0.5rem', color: 'var(--color-text)' }}>
                                <span>Total</span>
                                <span>${finalTotal.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                    <ProductRecommendation />
                </div>

                {/* Payment & Shipping */}
                <div>
                    <h3 className="mb-1">Datos de Envío y Pago</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>

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
                                    <p>Banco: Santander</p>
                                    <p>CBU: 0720000788000036492836</p>
                                    <p>Alias: RED.DECO.HOME</p>
                                    <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>Envía el comprobante por WhatsApp para confirmar tu pedido.</p>
                                </div>
                            )}
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary"
                            style={{ width: '100%', padding: '1rem' }}
                            onClick={handleCheckout}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Procesando...' : 'Confirmar Pedido'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
