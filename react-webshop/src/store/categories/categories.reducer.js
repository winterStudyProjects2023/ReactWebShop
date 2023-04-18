import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    categoriesMap: {},
}

export const categoriesSlice = createSlice ({
    name: 'categories',
    initialState: INITIAL_STATE,
    reducers: {
        setCategoriesMap (state, action) {
            state.categoriesMap = action.payload;
        }
    }
})

export const {setCategoriesMap} = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;