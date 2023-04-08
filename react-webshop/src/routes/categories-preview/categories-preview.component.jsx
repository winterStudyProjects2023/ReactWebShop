import React from 'react';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview.component.jsx/category-preview.component';

export default function CategoriesPreview() {

    const { categoriesMap } = useContext(CategoriesContext);

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
