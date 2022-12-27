import Form from "./Component/Form"
import Todo from "./Component/Todo"
import './App.css';
import { useState } from "react";
import TodoList from "./Component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header><h2>Todo List</h2></header>
      
      <Form 
          inputText={inputText}
          todos={todos} 
          setTodos={setTodos} 
          setInputText={setInputText}
        />
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
