import React from 'react';
import { Link } from 'react-router-dom';
import ProducCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

export default function CategoryPreview({ category , products }) {
    return (
        <div className="category-preview-container">
            <h2>
                <Link className='title' to={`/shop/${category.toLowerCase()}`}>
                {category.toUpperCase()}
               </Link>
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
