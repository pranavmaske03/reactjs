import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoItem({todo}) {
    const [msg, setMsg] = useState();
    const [isEditable, setIsEditable] = useState(false);
    const {removeTodo,toggleComplete,updateTodo} = useTodo();

    return (
        <div>
            {!isEditable ? (
                
            ) : (
                <h1></h1>
            )}
        </div>
    )
}

export default TodoItem
