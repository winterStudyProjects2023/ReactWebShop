import React from 'react';
import './shop.styles.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { setCategoriesMap } from '../../store/categories/categories.reducer';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';




export default function Shop() {
    
    const dispatch = useDispatch();

useEffect(() => {
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        dispatch(setCategoriesMap (categoryMap));
    }
    getCategoriesMap();
  }, [dispatch])

    return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category  />} />
    </Routes> 
    )
}
