import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id : 1,
            text : "hello world"
        }
    ]
}

// function sayHello() {
//     console.log("Hello from todoSlice");
// }

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // addTodo: sayHello
        addTodo : (state ,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo: (state ,action) => {
            const id= action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },
        updateTodo: (state,action) =>{
            const {id,text} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if(todo) {
                todo.text= text;
            }
        }
    }
})

export const {addTodo,removeTodo,updateTodo} =  todoSlice.actions;

export default todoSlice.reducer

