import React from 'react';
import ProducCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

export default function CategoryPreview({ category , products }) {
    return (
        <div className="category-preview-container">
            <h2>
                <span className='title'>{category.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    products
                    .filter((_, idx)=> idx < 4)
                    .map((product)=>
                    <ProducCard key={product.id} product={product}/> )
                }
            </div>
        </div>
    )
}
