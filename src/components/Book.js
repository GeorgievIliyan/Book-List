import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './BookForm';

function Book({ books, completeBook, deleteBook, updateBook }) {
    const [editedBook, setEditState] = useState({ id: null, value: '' });

    const submitUpdate = value => {
        updateBook(editedBook.id, value);
        setEditState({ id: null, value: '' });
    };

    if (editedBook.id) {
        return <BookForm edit={editedBook} onSubmit={submitUpdate} />;
    }

    if (!books || books.length === 0) {
        return <p className='my-5'>No books added yet!</p>;
    }

    return (
        <div className="row g-4">
            {books.map(book => (
                <div key={book.id} className="col-sm-3">
                    <div className={`card h-100 my-3 ${book.isComplete ? 'bg-success text-white' : ''}`}>
                        <div onClick={() => completeBook(book.id)} className='card-body p-3'>
                            {book.text}
                        </div>
                        <div className="card-footer">
                            <i
                                className="bi bi-x-lg text-danger me-2"
                                onClick={() => deleteBook(book.id)}
                            ></i>
                            <i
                                className="bi bi-pencil-square text-warning"
                                onClick={() => setEditState({ id: book.id, value: book.text })}
                            ></i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Book;