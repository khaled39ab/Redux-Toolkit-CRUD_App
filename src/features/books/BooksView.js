import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const BooksView = () => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.booksReducer.books)

    const handleDelete = id =>{
        dispatch(deleteBook(id))
    }

    return (
        <div>
            <h1>List of Books</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => {
                            const { id, title, author } = book;
                            return (
                                <tr key={book.id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <Link to={'/edit-book'} state={{title,author}}> <button>Edit</button> </Link>
                                        <button onClick={()=>handleDelete(id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;