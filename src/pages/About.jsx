import React from 'react';

const About = () => {
    return (
        <div className="container section">
            <div className="text-center mb-2">
                <hr />
                <br />
                <h1>Sobre Nosotros</h1>
                <h3>Pasión por los detalles</h3>
                <hr />
                <br />
                <br />
            </div>



            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682142726350-8aeff0c347e4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Taller de decoración"
                        style={{ borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}
                    />
                </div>
                <div>
                    <h3 style={{ color: 'var(--color-accent)' }}>Nuestra Historia</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        Biblioteca de bordados nació del amor por crear espacios que cuenten historias. Creemos que cada hogar es único y merece ser decorado con objetos que transmitan calidez y personalidad.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Seleccionamos cuidadosamente cada pieza de nuestra colección, priorizando materiales nobles, texturas suaves y diseños atemporales. Trabajamos con artesanos locales para ofrecer productos de calidad que perduren en el tiempo.
                    </p>
                    <p>
                        Nuestro objetivo es ayudarte a transformar tu casa en un verdadero hogar, un refugio donde puedas relajarte y disfrutar de los pequeños momentos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
