
export default function Filter({handaleFilter, filter}) {

    return (
        <div className ="btn-group">
            <button className ={["btn ", filter === 'all' ? 'btn-active' : "btn-secondary" ].join(" ")}  onClick ={() => handaleFilter("all")} >All</button>
            <button className ={["btn", filter === 'complite' ? 'btn-active' : "btn-success" ].join(" ")} onClick ={() => handaleFilter("complite")} >Complite</button>
            <button className ={["btn ",filter === 'running' ? 'btn-active' : "btn-danger" ].join(" ")} onClick ={() => handaleFilter("running")} >Running</button>
        </div>
    )
}