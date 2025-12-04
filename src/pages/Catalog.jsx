import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Catalog = () => {
    const [filter, setFilter] = useState('Todos');
    const categories = ['Todos', ...new Set(products.map(p => p.category))];

    const filteredProducts = filter === 'Todos'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="container section">
            <div className="text-center mb-2">
                <h2>Nuestros Productos</h2>
                <p>Encuentra el detalle perfecto para tu hogar</p>
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
