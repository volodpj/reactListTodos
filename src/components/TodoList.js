import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          urlUsers: 'https://jsonplaceholder.typicode.com/users',
            urlTodos: 'https://jsonplaceholder.typicode.com/todos',
            todoList: [],
            users: [],
            
        }
    }

    reqestTodo = () => {
      const reqest = fetch(this.state.urlTodos);
      reqest.then((response) => {
        response.json().then((data) => {
          this.setState({
            todoList: data,
          })
        })
      } )
    }

    reqestUser = () => {
      const reqest = fetch(this.state.urlUsers);
      reqest.then((response) => {
        response.json().then((data) => {
          this.setState({
              users: data
          })
          })
        })
      } 

    
    
    render(){
      
        return (
          <div>
            <button onClick={() => {this.reqestTodo()}}>load list</button>
            <TodoItem 
              todos={this.state.todoList}
              users={this.state.users}
              
            />
          </div>
    
        )
        
    }
}

export default TodoList;