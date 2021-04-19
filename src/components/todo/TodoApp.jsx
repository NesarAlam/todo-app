import React, {Component} from 'react'
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent.jsx'
import { withRouter } from 'react-router';
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'


class TodoApp extends Component {
    render(){
        return (
            <div className= "TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
               {/* <LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

// class HeaderComponent extends Component{
//     render(){
//         const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
//         console.log(isUserLoggedIn);
//         return(
//             <header>
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="http://www.in28Minutes.com" className="navbar-brand">in28Minutes</a></div>
//                     <ul className="navbar-nav">
//                         {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
//                         {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
//                     </ul>
//                     <ul className="navbar-nav navbar-collapse justify-content-end">
//                         {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//                         {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
//                     </ul>
//                 </nav>
//             </header>
            
//         )
//     }
// }

// class FooterComponent extends Component{
//     render(){
//         return(
//             <footer className="footer">
//                 <span className="text-muted">All Rights Reserved 2021 @by Nesar</span>
//             </footer>
//         )
//     }
// }



// class ListTodosComponent extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             todos :
//             [
//                 {id:1, description : 'Learn React', done:false, targetDate:new Date()},
//                 {id:2, description : 'Build projects',done:false, targetDate:new Date()},
//                 {id:3, description : 'Java certification',done:false, targetDate:new Date()}

//             ]
            
//         }
//     }
//     render(){
//         return (
//             <div>
//                     <h1>List Todos</h1> 
//                     <div className="container">
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>id</th>
//                                     <th>description</th>
//                                     <th>is completed</th>
//                                     <th>Target date:</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.todos.map(
//                                         todo =>
//                                         <tr key={todo.id}>
//                                             <td>{todo.id}</td>
//                                             <td>{todo.description}</td>
//                                             <td>{todo.done.toString()}</td>
//                                             <td>{todo.targetDate.toString()}</td>
//                                         </tr>
//                                     )
                            
//                                 }
//                             </tbody>
//                         </table>
//                     </div>        
//             </div>

//         )
//     }
// } 

// class WelcomeComponent extends Component {
//     render(){
//         return(
//             <>
//                 <h1>Welcome </h1>
//                 <div className="container">
//                 Welcome {this.props.match.params.name}. Manage your todos <Link to="/todos">here</Link>
//                 </div>
//             </>
//         ) 
//     }
// } 

// function ErrorComponent() {
//     return <div>ERROR occured. Contact support</div>
// }


function ShowInvalidCredentials(props) {
    if(props.hasLoginFailed){
        return <div>Invalid Credentials</div> 
    }
    return null       
        
}
function ShowLoginSuccessMessage(props) {
    if(props.showSuccessMessage){
        return <div>Login Successful</div>
    }
    return null
    
}
 export default TodoApp

// import { withRouter } from 'react-router';
 
// class HeaderComponent extends Component {
 
// {/*...Header component code ....*/}
 
// }
 
// export default withRouter(HeaderComponent);