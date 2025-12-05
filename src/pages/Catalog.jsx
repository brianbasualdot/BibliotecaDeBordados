import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const [filter, setFilter] = useState('Todos');
    const categories = ['Todos', ...new Set(products.map(p => p.category))];

    const filteredProducts = products.filter(p => {
        const matchesCategory = filter === 'Todos' || p.category === filter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="container section">
            <div className="text-center mb-2">
                <h2>Nuestros Productos</h2>
                <p>En nuestra tienda online encontrarás una selección exclusiva de <b>individuales de mesa </b>diseñados para transformar cada comida en una ocasión especial.
                    <br></br>
                    Ya sea que busques manteles individuales para el uso diario o piezas únicas para celebraciones, nuestra colección combina funcionalidad con las últimas tendencias en decoración de interiores.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                        style={{ minWidth: '100px' }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;
