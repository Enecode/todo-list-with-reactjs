import React from 'react';

const Todo = ({text, todos, todo, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    }

    const completeHandler = () => {
        setTodos(todos.filter((t) => { if (t.id !== todo.id){
            return{
                ...t, completed: !t.completed
            };
        }
        return t;
    }))
}

    
    return(
        <div className="todo">
            <li className="todo-item">{text}</li>
            <button onClick={completeHandler} className='complete-btn' >+</button>
            <button onClick={deleteHandler} className='trash-btn'>X</button>
       </div>

    );
}

export default Todo;