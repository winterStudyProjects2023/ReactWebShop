import React from 'react';
import { Link } from 'react-router-dom';
import ProducCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

export default function CategoryPreview({ category, products }) {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className='title' to={`/shop/${category.toLowerCase()}`}>
                    {`${category.toUpperCase()} COLLECTION `}
                </Link>
            </h2>
            <div className='category-preview-subtitle'>
                <Link to={`/shop/${category.toLowerCase()}`}>
                    {`click to explore more ...`}
                </Link>
            </div>
            <div className="preview">
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) =>
                            <ProducCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}
