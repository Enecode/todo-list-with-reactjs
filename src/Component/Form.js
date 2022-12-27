import React from "react"
import "../App.css"

function Form({setInputText}){
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="to-do-input" />
            <button className="todo-button" type="submit">
                {/*<i className"a fas fa-plus-square"></i>*/}
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