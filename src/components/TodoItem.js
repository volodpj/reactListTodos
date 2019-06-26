import React from 'react';


class TodoItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
            
        }
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
                                {this.props.users.find((user) => {
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