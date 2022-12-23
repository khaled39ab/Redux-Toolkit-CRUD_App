import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BooksSlice';

const AddBook = () => {
    const date = new Date().getMilliseconds();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleAddBook = e => {
        e.preventDefault();
        const book = { id: date, title, author }
        dispatch(addBook(book));
        navigate('/show-books', { replace: true })
    };

    return (
        <div>
            <h2>Add a Book</h2>
            <form onSubmit={handleAddBook}>
                <div className='form-field'>
                    <label htmlFor="title">Book Title: </label>
                    <input
                        type="text"
                        name='title'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required />
                </div>
                <div className='form-field'>
                    <label htmlFor="author">Author: </label>
                    <input
                        type="text"
                        name='author'
                        id='author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required />
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;