import BulbControl from "../BulbControl";
import Filter from "../Filter";
import ViewControl from "../ViewControl";

export default function Controler ({view , handaleView, handaleFilter, reset , clearSelect, clearComplite, filter} ) {


    return (
        <div className ="d-flex align-items-center justify-content-between" >
            <Filter filter = {filter} handaleFilter ={handaleFilter} />
            <ViewControl handaleView = {handaleView} view = {view} />
            <BulbControl reset ={reset} clearSelect ={clearSelect} clearComplite ={clearComplite} />
        </div>
    )
}