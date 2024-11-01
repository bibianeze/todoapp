import "./App.css";
import Foot from "./component/Foot";
import Header from "./component/Header";
import Todo from "./component/Todo";
import { useState, useEffect } from "react";

function App() {
   const [isNight, setIsNight] = useState(false);

   const toggleDayNight = () => {
     setIsNight(!isNight);
   };
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  };

  // Load todos from local storage
  const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todoList");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };
  // create an array in a use state cause it is subject to change
  const [todoList, setTodoList] = useState(loadTodosFromLocalStorage());
  // create another empty array to make changes to the list i.e adding to it
  // Save todos to local storage whenever the todoList state changes
  useEffect(() => {
    saveTodosToLocalStorage(todoList);
  }, [todoList]);
  const [newTodoList, setNewTodoList] = useState("");
  const [filter, setFilter] = useState("all");
  // handle the submit of the form and prevent default reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure that the new todo is not just whitespace
    if (newTodoList.trim()) {
      const newTask = {
        id: todoList.length + 1,
        task: newTodoList,
        completed: false,
      };
      // set the already existing todo list to add on to the list a new task
      setTodoList([...todoList, newTask]);
    }
    // set the new list array to empty to clear the input field
    setNewTodoList("");
  };

  // handle changes made to the input field
  const handleInputChange = (e) => {
    setNewTodoList(e.target.value);
  };
  // adding a new task to the list

  //filter out completed tasks
  const handleCompleted = () => {
    const todosleft = todoList.filter((todo) => todo.completed === false);
    setTodoList(todosleft);
  };
  // Filter todos based on filter state
  const filteredTodos = () => {
    if (filter === "completed")
      return todoList.filter((todo) => todo.completed === true);
    if (filter === "uncompleted")
      return todoList.filter((todo) => todo.completed === false);
    return todoList;
  };
  //change todo to completed 2
  const completedTodo = (id) => {
    const updatedTodo = todoList.find((t) => t.id === id);
    const updatedTodoList = todoList.map((t) => {
      if (t.id === updatedTodo.id) {
        return { ...t, completed: !t.completed };
      } else {
        return t;
      }
    });

    setTodoList(updatedTodoList);
  };

  return (
    <div
      style={{ backgroundColor: "hsl(235, 24%, 19%)" }}
      className="bg-blue-950 min-h-screen pb-10 ${isNight ? 'bg-night text-white' : 'bg-day text-black'}"
    >
      <Header
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        newTodoList={newTodoList}
        setFilter={setFilter}
        toggleDayNight={toggleDayNight}
      />
      <Todo
        completedTodo={completedTodo}
        setFilter={setFilter}
        filteredTodos={filteredTodos}
        setTodoList={setTodoList}
        handleCompleted={handleCompleted}
        todoList={todoList}
      />
      <Foot setFilter={setFilter} />
    </div>
  );
}

export default App;
