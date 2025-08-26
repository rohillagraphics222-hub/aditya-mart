import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import ProductCard from './ProductCard';

const sectionStyle = {
  padding: '48px 20px',
  background: '#f4f8fd'
};

const titleStyle = {
  fontSize: '2.2rem',
  fontWeight: 700,
  color: '#2363c9',
  marginBottom: '32px',
  textAlign: 'center'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '32px',
  maxWidth: '1200px',
  margin: '0 auto'
};

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  return (
    <section id="products" style={sectionStyle}>
      <h2 style={titleStyle}>Our Products</h2>
      <div style={gridStyle}>
        {products.map((product, idx) => (
          <ProductCard key={product._id || idx} {...product} />
        ))}
      </div>
    </section>
  );
}