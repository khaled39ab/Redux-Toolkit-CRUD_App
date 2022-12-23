import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    books: [
        { id: 1001, title: 'Hello You', author: 'Umok Sala' },
        { id: 1002, title: 'You and Me', author: 'Tumuk Sala' }
    ]
}

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialValue,
    reducers: {
        showBooks: state => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
    }

});

export const { showBooks, addBook } = booksSlice.actions;
export default booksSlice.reducer;