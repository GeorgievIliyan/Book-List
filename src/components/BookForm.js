import React, { use } from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid4 from "uuid4";


function BookForm(props) {

    const [input, setInput] = useState('')

    const handleChange = e =>{
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: uuid4(),
            text: input
        })
    }

    return (
        <form className='d-flex gap-2' onSubmit={handleSubmit}>
            <input 
                className='form-control'
                placeholder='Book name'
                value = {input}
                onChange={handleChange}                
            >
            </input>

            <button className='btn btn-primary' type='submit'>Add</button>
        </form>
    )
}

export default BookForm