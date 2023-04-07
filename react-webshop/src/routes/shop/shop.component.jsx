import React from 'react';
import './shop.styles.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';

export default function Shop() {

    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {Object.keys(categoriesMap).map((category) => {
                return <>
                    <h2>{category}</h2>
                    <div className='products-container'>
                        {categoriesMap[category].map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })}
                    </div>
                </>
            })
            }
        </>
    )
}
