import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector(state => state.booksReducer)
    
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
                        books.map(book => <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BooksView;