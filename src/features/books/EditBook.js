import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EditBook = () => {
    const location = useLocation();

    const [title, seTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);

    return (
        <div>
            <h2>Edit Book</h2>
            <form>
                <div className='form-field'>
                    <label htmlFor="title">Title: </label>
                    <input type="text" defaultValue={title} required />
                </div>
                <div className='form-field'>
                    <label htmlFor="title">Author: </label>
                    <input type="text" defaultValue={author} required />
                </div>
                <button>Update</button>
            </form>
        </div>
    );
};

export default EditBook;