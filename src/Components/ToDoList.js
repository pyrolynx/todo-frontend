import React from 'react';
import ToDo from "./ToDo";
import Button from "react-bootstrap/Button";
import { ListGroup } from 'react-bootstrap';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
        <ListGroup>
            {toDoList.map(todo => {
               return (
                   <ToDo key={todo.id} todo={todo} handleToggle={handleToggle}/>
               )
           })}
           <Button variant="danger" style={{margin: "20px"}} onClick={handleFilter}>Delete completed</Button>
        </ListGroup>
    )

}

export default ToDoList;