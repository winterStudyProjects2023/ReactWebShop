import React from 'react'
import './directory.styles.scss';
import DirectoryItem from '../directory-item/directory-item';


export default function Directory({ categories }) {

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem
          category={category}
          key={category.id}
        />
      ))}
    </div>
  )
}

