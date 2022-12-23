import { createSlice } from "@reduxjs/toolkit";

const initialValue =[
    {id: 1, title: 'Hello You', author: 'Umok Sala'},
    {id: 2, title: 'You and Me', author: 'Tmuk Sali'}
]

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialValue,
    reducers: {
        showBooks: state => state
    }
});

export const {showBooks} = booksSlice.actions;
export default booksSlice.reducer;