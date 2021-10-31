
export default function ViewControl ({handaleView, view}) {

    return (
        <div className ="d-flex">
            <label className ="mx-2">
                <input 
                    type ="radio" 
                    name ="view"  
                    className ="mx-2" 
                    checked = {view === "list" ? true : false}
                    onChange = {()=> handaleView('list')} /> List
            </label>
            <label className ="mx-2">
                <input 
                    type ="radio" 
                    name ="view"  
                    className ="mx-2" 
                    checked = {view === "table" ? true : false}
                    onChange = {()=> handaleView('table')} /> Table 
            </label>
        </div>
    )
}