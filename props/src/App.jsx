import { useState } from 'react'
import './App.css'
import Avatar from './Avatar.jsx'

function App() {
  const [todo,setTodo] = useState("")

  return (
    <>
     <Avatar
        size={100}
        person={{name:'pranav',imageId: 'YfeOqp2'}}
     />
     <form className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
             <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
               
                onChange={(e) => setTodo(e.target.value)}
            /><br></br>
            {todo}

        </form>
    </>
  )
}

export default App
