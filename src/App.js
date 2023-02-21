import Header from "./mycomponents/Header";
import Todos from "./mycomponents/Todos";
import AddTodo from "./mycomponents/AddTodo";
import Footer from "./mycomponents/Footer";
import React, { useState, useEffect } from "react";
function App() {
  let initTodo;
 
    initTodo = JSON.parse(localStorage.getItem("todo")||'[]');
  

  const onDelete = (todo) => {
    console.log("click,todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    console.log("adding", title, desc);
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
    console.log(mytodo);

    localStorage.setItem("todo", JSON.stringify(todos));
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="myTodoslist" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
