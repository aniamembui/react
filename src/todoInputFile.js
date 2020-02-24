/* eslint-disable react-hooks/rules-of-hooks */
// todoInputFile.js

import React , {useState}  from 'react'

function todoInputFile( { addTodo} ){
    
            
    const [ value, setValue ] = useState("");

    const handleSubmit = e => {

        e.preventDefault();
        if( !value ) ; 
        addTodo( value ) ; 
        setValue("");
    };
    
    return(

    
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                className="input"
                value={value}
                onChange={ e => setValue( e.target.value)}
            />
        </form> 

    )

}

export default todoInputFile 

