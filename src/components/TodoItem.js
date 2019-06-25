import React from 'react';


class TodoItem extends React.Component{
    constructor(props){
        super(props)
    }
    reqestUser = () => {
        const reqest = fetch(this.state.urlUsers);
        reqest.then((response) => {
          response.json().then((data) => {
            return data
            })
          })
        } 
      
    

    render(){

        return (
            <table>
                <tbody>
                    {this.props.todos.map((todo)=>{
                    return (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>
                                {this.reqestUser().find((user) => {
                                    return user.id === todo.userId
                                })}
                            </td>
                        </tr>
                    )})}
                </tbody>
                
            </table>)
    }
        
        
    
}

export default TodoItem;