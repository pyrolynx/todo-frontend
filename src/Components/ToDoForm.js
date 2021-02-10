import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput) return;
        addTask(userInput);
        setUserInput("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Col>
                    <Form.Control type="text" value={userInput} onChange={handleChange} placeholder="Enter task ..."/>
                </Col> 
                <Col md="auto">
                    <Button type="submit" variant="success">Submit</Button>
                </Col>
            </Form.Row>
        </Form>
    );
}

export default ToDoForm;