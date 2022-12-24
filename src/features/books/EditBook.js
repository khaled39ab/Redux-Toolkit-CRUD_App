import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const EditBook = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateBook({ id, title, author }))
        navigate('/show-books', { replace: true })
    }

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-field'>
                    <label htmlFor="title">Title: </label>
                    <input 
                    type="text" 
                    defaultValue={title} 
                    name='title'
                    onChange={(e)=>setTitle(e.target.value)}
                    required />
                </div>
                <div className='form-field'>
                    <label htmlFor="author">Author: </label>
                    <input 
                    type="text" 
                    defaultValue={author} 
                    onChange={(e)=>setAuthor(e.target.value)}
                    name='author'
                    required />
                </div>
                <button type='submit'>Update</button>
            </form>
        </div>
    );
};

export default EditBook;