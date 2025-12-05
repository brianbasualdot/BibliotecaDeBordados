import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <div className="container section">
            <div className="text-center mb-2">
                <h2>Contacto</h2>
                <p>¿Tienes dudas sobre cómo vestir tu mesa? Estamos aquí para ayudarte.</p>
                <p>Si tienes alguna duda o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <div>
                    <h3 className="mb-1">Envíanos un mensaje</h3>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Nombre" style={{ padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                        <input type="email" placeholder="Email" style={{ padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} />
                        <textarea placeholder="Mensaje" rows="5" style={{ padding: '0.8rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'inherit' }}></textarea>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>

                <div>
                    <h3 className="mb-1">Información de Contacto</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4>Teléfono</h4>
                                <p>+54 2314 - 515538</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>hola@bibliotecadebordados.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ backgroundColor: 'var(--color-bg)', padding: '0.8rem', borderRadius: '50%', color: 'var(--color-accent)' }}>
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4>Ubicación</h4>
                                <p>La plata, Buenos Aires, Argentina</p>
                            </div>
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                            <h4>Síguenos</h4>
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                <a href="#" style={{ color: 'var(--color-accent)' }}><Instagram size={24} /></a>
                                <a href="#" style={{ color: 'var(--color-accent)' }}><Facebook size={24} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
