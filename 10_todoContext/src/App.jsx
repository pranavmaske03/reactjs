import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-6 py-4 text-white">
          {/* Improved Heading */}
          <h1 className="text-3xl font-extrabold text-center mb-8 mt-2 text-indigo-400">
            Task Manager with Context API 🚀
          </h1>

          {/* Todo Form */}
          <div className="mb-6">
            <TodoForm />
          </div>

          {/* Todo List */}
          <div className="flex flex-wrap gap-y-3">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-300">No tasks available. Start adding some! ✨</p>
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
