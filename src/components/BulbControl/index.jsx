
export default function BulbControl ({clearSelect, clearComplite, reset}) {

    return (
        <div className ="btn-group">
            <button className ="btn btn-danger " onClick ={() => clearSelect()} >Clear Select</button>
            <button className ="btn btn-success " onClick ={() => clearComplite()} >Clear Complite</button>
            <button className ="btn btn-primary" onClick ={() => reset()} >Reset</button>
        </div>
    )
}