import React from "react"
import "../App.css"
import { FaPlus } from "react-icons/fa";


function Form({setInputText, todos, inputText, setTodos, setStatus}){
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text : inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    const statusHandler = (e) =>{
        setStatus(e.target.value);
    }


    return(
        <form>
            <input 
                inputText={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="to-do-input"
                value={inputText} 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <FaPlus style={{fontSize: '20px'}} />
            </button>

            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )

}

export default Form