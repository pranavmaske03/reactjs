import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodoEditing } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const editingTodoId = useSelector((state) => state.editingTodoId);

  useEffect(() => {
    if (editingTodoId) {
      const todoEdit = todos.find((todo) => todo.id === editingTodoId);
      if (todoEdit) setInput(todoEdit.text);
    }
  }, [editingTodoId, todos]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (editingTodoId) {
      setInput(input);
      dispatch(updateTodo({ id: editingTodoId, text: input }));
    } else if (input.trim() !== "") {
      setErrorMsg("");
      dispatch(addTodo(input));
    } else {
      setErrorMsg("Cannot add an empty todo.");
    }
    setInput("");
    dispatch(setTodoEditing(null));
  };

  return (
    <div className="flex flex-col items-center mt-12 p-6 bg-gray-900 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-white mb-4">
        {editingTodoId ? "Update Your Todo" : "Add a New Todo"}
      </h2>
      <form onSubmit={addTodoHandler} className="w-full flex flex-col space-y-4">
        <input
          type="text"
          className="w-full bg-gray-800 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 text-white py-2 px-4 outline-none transition-colors duration-200"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setErrorMsg("");
          }}
        />
        <button
          type="submit"
          className="w-full text-white bg-indigo-500 py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-indigo-600"
        >
          {editingTodoId ? "Update Todo" : "Add Todo"}
        </button>
        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}
      </form>
    </div>
  );
}

export default AddTodo;
