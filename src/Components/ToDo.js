import { ListGroup } from "react-bootstrap";

const ToDo = ({todo, handleToggle}) => {
    const handleClick = (e) => {
        console.log("CLicked!")
        e.preventDefault();
        console.log("Toggle element " + e.currentTarget.id);
        handleToggle(e.currentTarget.id);
    }
    
    return (
        <ListGroup.Item id={todo.id} variant={todo.complete? "light" : ""} onClick={handleClick}>
            {todo.task}
        </ListGroup.Item>
    );
    
}

export default ToDo;