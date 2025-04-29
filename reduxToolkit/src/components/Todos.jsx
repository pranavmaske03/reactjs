import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, setTodoEditing } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <div className="max-w-lg mx-auto mt-8">
      <ul className="space-y-3">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li
              key={todo.id}a
              className="flex justify-between items-center bg-gray-800 text-white px-5 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <span className="text-lg">{todo.text}</span>
              
              <div className="flex space-x-3">
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition-all"
                  onClick={() => dispatch(setTodoEditing(todo.id))}
                >
                  ✏️ Edit
                </button>
                
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition-all"
                  onClick={() => dispatch(removeTodo(todo.id))}
                >
                  🗑 Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400 mt-5">No Todos Yet! Add One. ✅</p>
        )}
      </ul>
    </div>
  )
}

export default Todos
