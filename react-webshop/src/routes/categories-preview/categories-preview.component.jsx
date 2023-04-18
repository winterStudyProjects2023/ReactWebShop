import React from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview.component.jsx/category-preview.component';
import selectCategoriesMap from '../../store/categories/category.selector'

export default function CategoriesPreview() {

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <div className='category-preview-container'>   
                 {Object.keys(categoriesMap).map((category) => {
                   const products = categoriesMap[category];
                return <CategoryPreview key={category} category={category} products={products} />
            })
            }
    </div>    
    )
}
