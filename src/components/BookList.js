import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './BookForm';
import Book from './Book';
import 'bootstrap-icons/font/bootstrap-icons.css';

function BookList() {

    const [books, setBooks] = useState([])

    const addBook = book => {
        if (!book.text || /^\s*$/.test(book.text)){
            return
        }

        const newBooks = [book, ...books]

        setBooks(newBooks)
    }

    const updateBook = (bookId, newText) => {
        if (!newText || /^\s*$/.test(newText)) {
            return;
        }

        const safeText = typeof newText === 'object' ? newText.text : newText;

        setBooks(prev =>
            prev.map(item =>
                item.id === bookId ? { ...item, text: safeText } : item
            )
        );
    };




    const deleteBook = id => {
        const array = [...books].filter(book => book.id !== id)
        setBooks(array)
    }

    const completeBook = id => {
        let updatedBooks = books.map(book => {
            if (book.id === id){
                return {...book, isComplete: !book.isComplete};
            }
            return book;
        })

        setBooks(updatedBooks)
    }

    return (
        <div className='user-select-none'>
            <h1 className='text-center text-primary fw-semibold mb-3'>My Book List</h1>
            <BookForm onSubmit={addBook}/>
            <Book
                books = {books}
                completeBook={completeBook}
                deleteBook={deleteBook}
                updateBook={updateBook}
            />
        </div>
    )
}

export default BookList