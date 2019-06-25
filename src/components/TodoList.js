import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            urlUsers: 'https://jsonplaceholder.typicode.com/users',
            urlTodos: 'https://jsonplaceholder.typicode.com/todos',
            todoList: [],
            
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

    
    
    render(){
      
        return (
          <div>
            <button onClick={() => {this.reqestUser()}}>load list</button>
            <TodoItem 
              todos={this.state.todoList}
              
            />
          </div>
    
        )
        
    }
}

export default TodoList;