import React from 'react';
import './category.styles.scss';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import selectCategoriesMap from '../../store/categories/category.selector'



export default function Category() {
    const { category } = useParams();

    const categoriesMap = useSelector(selectCategoriesMap)

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='single-category-container'>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </>
    )
}
