import React, {Component} from 'react'

class ListTodosComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            todos :
            [
                {id:1, description : 'Learn React', done:false, targetDate:new Date()},
                {id:2, description : 'Build projects',done:false, targetDate:new Date()},
                {id:3, description : 'Java certification',done:false, targetDate:new Date()}

            ]
            
        }
    }
    render(){
        return (
            <div>
                    <h1>List Todos</h1> 
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>description</th>
                                    <th>is completed</th>
                                    <th>Target date:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.todos.map(
                                        todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                    )
                            
                                }
                            </tbody>
                        </table>
                    </div>        
            </div>

        )
    }
} 

export default ListTodosComponent