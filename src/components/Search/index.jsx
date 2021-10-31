

export default function Search  ({handaleSearch, handaleModal , searchTarm}) {


    return (
        <div className ="d-flex align-items-center my-4">
            <input className ="form-control" type="text" name="search" id="" placeholder ="Search " onChange ={(e) => handaleSearch(e.target.value)} value ={searchTarm} />
            <button className ="btn btn-primary mx-2" onClick ={handaleModal}>Add</button>
        </div>
    )
}