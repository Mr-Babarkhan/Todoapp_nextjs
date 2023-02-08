"use client";
import React, { useState } from 'react'

export const Todo = () => {
    // const [Todos,setTodos] =useState(["helllo","world","welcome","to","next js"]) ;
    const [todo , setTodo]= useState('');
    const [todos , setTodos]= useState([
        {todoText:"todo 1" , completed:false},
        {todoText:"todo 2" , completed:true},
        {todoText:"todo 3" , completed:false},
        {todoText:"todo 4" , completed:true}
    ]);
   const onClickHandler=(meraElm:any)=>{
        console.log("mer" , meraElm)
        
        const newTodos= todos.map(todo=>{
            console.log('7',todo)
            if (todo.todoText == meraElm.todoText){
                todo.completed= !todo.completed;
            }
            return todo
        });
        console.log(newTodos);
        setTodos(newTodos);
   }
   
   const addTodo=()=>{
    const newTodo ={ todoText:todo, completed:false}
    const newTodos = [...todos,newTodo]
    setTodos(newTodos);
    setTodo("")
   };
   const deleteTodo=(meraTodo:any)=>{
        const newTodos=todos.filter(todo=>{
            if(todo.todoText==meraTodo.todoText) return false;
            return true;
            
        });
        setTodos(newTodos);
   }

  return (
    <>
    <div style={{width:'20%',height:'100%',marginLeft:"40%"}}>
        <div style={{fontSize:'50px',justifyContent:'center'}}>Todo App</div>
        <input placeholder='add todo text' value={todo} onChange={(e)=>{setTodo(e.target.value)}}/>
        <button onClick={addTodo}>Add</button>



        <ul>
           {todos.map(elm=>{
            return <li style={{color:elm.completed?"green":"red",fontStyle:"oblique",listStyle:"none"}} key={elm.todoText}>
                <input type="checkbox" checked={elm.completed} onChange={()=>{onClickHandler(elm)}}></input>
                 {elm.todoText}  

<button onClick={()=>{deleteTodo(elm)}}>Delete</button>

            </li>
           })}
        </ul>
        </div>
    </>
  )
}