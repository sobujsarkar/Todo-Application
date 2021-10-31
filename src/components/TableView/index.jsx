import React from "react";

function TodoItem ({todo, handaleChecke, handaleComplite}) {

    return (
        <tr>
            <th><input type ="checkbox" checked ={todo.isChecked}  onChange ={() => handaleChecke(todo.id)}  /></th>
            <th>{todo.time.toDateString()} </th>
            <th>{todo.title} </th>
            <th> <button className = {["btn" , todo.isComplite ? "btn-success" : "btn-danger"].join(" ")} onClick = {() => handaleComplite(todo.id)} >{todo.isComplite ? "Complite" : "Running"} </button> </th>
        </tr>
    )
}


export default function  TableView  ({todos , handaleComplite , handaleChecke}) {

    return (
        <table className ="table table-dark">
            <thead>
                <tr>
                    <th scope ="col" >#</th>
                    <th scope= "col">Time</th>
                    <th scope= "col">Name</th>
                    <th scope= "col">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <TodoItem todo ={todo} key ={todo.id} handaleComplite = {handaleComplite} handaleChecke = {handaleChecke} />
                ))}
            </tbody>

        </table>
    )
}