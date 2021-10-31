import { Component } from "react"









export default class Modal extends Component {
    state = {
        text : '',
        discription: ''
    }

    handaleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    render () {

        return (

            <div className ="modal bg-dark" style = {{ display: "block" }} >
                <div style ={{width:"500px", padding : "1rem", margin : "2rem auto", border: "4px"}} className ="bg-white">
                    <div className ="d-flex align-items-center justify-content-between">
                        <h2 className = "display-6">Add Todo List</h2>
                        <span style ={{cursor : "pointer"}} onClick ={this.props.cancelModal}>Cancel</span>
                    </div>
                    <form action="" className ="from" onSubmit = {(e) => this.props.submite(e,this.state) }>
                        <div className="form-group">
                            <label  style ={{width: "100%"}} > 
                                Name
                                <input type="text" className="form-control"  value = {this.state.text} placeholder ="Todo Name" onChange ={this.handaleChange} name ="text" />
                            </label>
                        </div>
                        <div className="form-group">
                            <label  style ={{width: "100%"}}>Discription
                                <input type="text" className="form-control"  value = {this.state.discription} placeholder ="Your Todo Discription" onChange ={this.handaleChange} name ="discription"/>
                            </label>
                        </div>
                       
    
                        <button className ="btn btn-primary d-block my-3">Add Todo</button>
                    </form>
    
                </div>
    
            </div>
        )
    }

   
}