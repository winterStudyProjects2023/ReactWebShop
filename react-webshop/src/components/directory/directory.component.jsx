import React from 'react'
import './directory.styles.scss';
import '../category-item/Category-item.component';
import CategoryItem from '../category-item/Category-item.component';

export default function Directory({categories}) {
  return (
    <div className='categories-container'>
    {categories.map((category) => (
      <CategoryItem category ={category} key={category.id} />
    ))}
  </div>
  )
}

