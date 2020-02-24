// App.js
import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import Todo from './Todo'
import TodoInputFile from './todoInputFile'
// import Form from "./Form" ;




function App(){

    // const setTodos = [
    //         { text: "Learn about React" },
    //         { text: "Meet friend for lunch" },
    //         { text: "Build really cool todo app" }
    //         ]

        const [todos , setTodos ] = useState([
        { text: "Learn about React" },
        { text: "Meet friend for lunch" },
        { text: "Build really cool todo app" }
        ]);

        const addTodo = text =>{
            const newTodos = [ ...todos , {text }] ; 
            setTodos(newTodos ); 
        }

    return(
        // todos.map( e => <h1> {e.text} </h1>  )
        <div className="app" >
            < div className="todo-list">
                {
                    todos.map(( todo, index ) => (
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                        />
                    ))
                }
            </div>
                <TodoInputFile addTodo={addTodo} />
        </div>
    )
}

export default App