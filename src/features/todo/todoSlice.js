import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState={
//     todo:[{id:1, text:"Hello World"}]
// }

export const todoSlice=createSlice({
    name:'todo',
    initialState:{
        todoList:[{id:1, text:"Hello World"}]
    },
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id: nanoid(),
                text:action.payload
            }
            state.todoList.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todoList=state.todos.filter((todos)=>todos!==state.payload)
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer
