import React from 'react';
import './directory-item.styles.scss';
import { useNavigate } from 'react-router-dom';

export default function DirectoryItem ({category}) {
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const handleNavigate =() => navigate(`/shop/${title}`);
  
  return (
    <div className='directory-item-container' onClick={handleNavigate}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-item-body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
