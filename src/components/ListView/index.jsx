

function TodoItem ({todo, handaleChecke, handaleComplite}) {

    return (
        <li className ="list-group-item d-flex  align-items-center">
            <input type ="checkbox" checked ={todo.isChecked}  onChange ={() => handaleChecke(todo.id)} className ="mx-3 " />
            <div>
                <span>{todo.title} </span> <br/>
                <span>{todo.time.toDateString()} </span>
            </div>
            <button 
                style ={{marginLeft: "auto"}} 
                className = {['btn' , todo.isComplite ? "btn-success" : "btn-danger"].join(" ")} 
                onClick = {() => handaleComplite(todo.id)} >
                    {todo.isComplite ? "Complite" : "Running"} 
                </button>
        </li>
    )
}

export default function ListView ({todos , handaleComplite , handaleChecke}) {

    return (
        <ul className ="list-group ">
            {todos.map((todo, index) => (
                <TodoItem todo = {todo} key = {index} handaleComplite = {handaleComplite} handaleChecke = {handaleChecke} />
            ))}
        </ul>
    )
}

