import React from 'react';
import './shop.styles.scss';
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';



export default function Shop() {

    return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
    </Routes> 
    )
}
