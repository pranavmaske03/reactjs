import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1,text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state,action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            state.todos = state.todos.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, text } : prevTodo
            );
        },
        setTodoEditing: (state,action) => {
            state.editingTodoId = action.payload;
        },
    }
}) 

export const { addTodo,removeTodo,updateTodo,setTodoEditing } = todoSlice.actions

export default todoSlice.reducer


//  OBJECTS LOOKS LIKE THIS UNDER THE HOOD
/*
    const todoSlice = {
    name: "todo",
    reducer: function (state, action) { 
        if (action.type === "todo/addTodo") {
        const todo = { id: nanoid(), text: action.payload };
        state.todos.push(todo);
        }
        if (action.type === "todo/removeTodo") {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    },
    actions: {
        addTodo: (payload) => ({ type: "todo/addTodo", payload }),
        removeTodo: (payload) => ({ type: "todo/removeTodo", payload })
    }
};

*/