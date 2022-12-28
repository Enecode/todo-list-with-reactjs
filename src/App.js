import Form from "./Component/Form"
import './App.css';
import { useState, useEffect } from "react";
import TodoList from "./Component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case "completed":
        setfilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case "uncompleted":
          setfilteredTodos(todos.filter(todo => todo.completed === false))
          break;
          default:
            setfilteredTodos(todos);
          break; 
          }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

  const getLocalStorage = () => {
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h2>--- Todo List ---</h2>
      </header>
      
      <Form 
          inputText={inputText}
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
          setStatus={setStatus}
        />
      <TodoList 
          setTodos={setTodos} 
          todos={todos}
          filteredTodos={filteredTodos}
        />
    </div>
  );
}

export default App;
