import React, { useEffect, useState} from "react";
import {Container} from "reactstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoForm  from "./components/todoForm";
import Todos from "./components/todos";


const App = () =>{
  
  const [todos,setTodos ] = useState([])
  useEffect(()=>{
    const localtodos = localStorage.getItem("todos")
    if (localtodos)
    {
      setTodos(JSON.parse(localtodos))
    }
  },[]);
  const addTodos = async todo =>{
    setTodos([...todos,todo])
  }
  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  const markComplete = id =>{
    setTodos(todos.filter(todo =>todo.id!== id))
  }
   return(
<Container fluid>
  <h1>Todos</h1>
  <Todos todos={todos} markComplete = {markComplete}/>
  <TodoForm addTodos={addTodos}/>
</Container>
   )
}

export default App
