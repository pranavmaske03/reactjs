import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-indigo-400 shadow-md">
        🚀 Redux Toolkit Todo App
      </h1>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <AddTodo />
        <Todos />
      </div>

    </div>
  )
}

export default App
