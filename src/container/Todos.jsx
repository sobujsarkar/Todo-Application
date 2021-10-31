import { Component } from "react";
import rendomId from "react-id-generator";
import Controler from "../components/Controler/index";
import ListView from "../components/ListView";
import Modal from "../components/Modal";
import Search from "../components/Search";
import TableView from "../components/TableView/index";


export default class Todos extends Component {

    state = {
        todos : [{
            id: 'adj',
            time: new Date(),
            title: "Tody",
            isComplite: true,
            isChecked: false,
        },{
            id: 'adjs',
            time: new Date(),
            title: "Holyday",
            isComplite: false,
            isChecked: false
        }],
        view : 'list',
        fillter: "all",
        searchTarm : '',
        modal : false
    }
    handaleView = (view) => {
        this.setState({
            view : view
        })
    }
    handaleChecke = (id) => {
        const {todos} = this.state
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)   
        todo.isChecked = !todo.isChecked
        this.setState ({
            todos : todos
        })
    }

    handaleSearch = (value) => {
        this.setState({
            searchTarm : value
        })
    }

     handaleComplite = (id) => {
        const {todos} = this.state;
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.isComplite = !todo.isComplite
        this.setState({todo: newTodos})
    }

    handaleFilter = (filteTerm) => {
        this.setState({
            fillter: filteTerm 
        })
    }

    searchGenarator() {
        const newTodos = [...this.state.todos];
        return newTodos.filter(todo => todo.title.toLowerCase().includes(this.state.searchTarm))
    }


    filterGanarete() {
        const {fillter} = this.state;
        const todos = this.searchGenarator()
        if(fillter === "complite") {
            return  todos.filter(todo => todo.isComplite === true)

        }else if(fillter === "running") {
            return todos.filter(todo => todo.isComplite === false)
        }else {
            return todos
        }
    }

    clearComplite = () => {
        const newTodos = this.state.todos.filter (todo => todo.isComplite === false)
        this.setState({todos: newTodos})
    }
    clearSelect = () => {
        const newTodos = this.state.todos.filter(todo => todo.isChecked === false)
        this.setState({todos : newTodos})
    }
    reset = () => {
        this.setState ({
            view : 'list',
            fillter: "all",
            searchTarm : ''
        })
    }
    handaleSubmit = (e, data) => {
        e.preventDefault()
        if(data.text) {
           let  todo = {
                id: rendomId(),
                time: new Date(),
                title:data.text,
                isComplite: false,
                isChecked: false,
            }
          let newTodos = [todo,...this.state.todos]
          this.setState({todos : newTodos, modal : false})
        }
        e.target.reset()
        
    }
    handaleModal = () => {
        this.setState ({
            modal : true
        })
    }
    cancelModal =  () => {
        this.setState({
            modal : false
        })
    }


    viewGanarete() {
        const todos = this.filterGanarete()
        if(this.state.view === "list") {
             return <ListView todos ={todos}  handaleComplite = {this.handaleComplite} handaleChecke = {this.handaleChecke} /> 
        }else {
            return<TableView todos ={todos} handaleComplite = {this.handaleComplite} handaleChecke = {this.handaleChecke} />
        }
    }

    render () {
        return (
            <div className ="container my-5">
                <h2 className = "display-4 my-3 text-center">Todo Application</h2>
                <Search  searchTarm ={this.state.searchTarm} handaleSearch = {this.handaleSearch} handaleModal ={this.handaleModal} />

                <Controler handaleFilter = {this.handaleFilter} view ={this.state.view} handaleView = {this.handaleView}  reset ={this.reset} clearSelect ={this.clearSelect} clearComplite ={this.clearComplite} filter = {this.state.fillter} />
                <div className ="my-3">
                    {this.viewGanarete()}
                </div>

                {this.state.modal && <Modal submite = {this.handaleSubmit} cancelModal ={this.cancelModal} />}
               
            </div>
        )
    }
}