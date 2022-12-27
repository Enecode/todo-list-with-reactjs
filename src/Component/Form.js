import React from "react"
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAdn,
  } from "@fortawesome/free-brands-svg-icons";


function Form({setInputText, todos, inputText, setTodos}){
    const inputTextHandler = (e) => {
        console.log(e.target.value);
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
                <FontAwesomeIcon icon={faAdn} size="2x" />
            </button>

            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )

}

export default Form