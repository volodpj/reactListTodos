import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            urlUsers: 'https://jsonplaceholder.typicode.com/users',
            urlTodos: 'https://jsonplaceholder.typicode.com/todos'
        }
    }

    reqestUser = () => {
    const reqest = fetch(this.state.urlUsers);
    reqest.then((response) => {
      response.json().then((data) => {
        console.log(data)
      })
    } )
    }
    
    render(){
        this.reqestUser()
        return <h1>hello</h1>
    }
}

export default TodoList;