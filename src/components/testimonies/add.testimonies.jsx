import React from 'react';
import { Form, Container, Button } from 'react-bootstrap';

import './testimonies.styles.css';
import appendData_Testimonies from './add-testimonies';

class TestimonieForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"",
            testimonie:""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        appendData_Testimonies({
            Name:this.state.name[0],
            Testimonies:this.state.testimonie[0],
            Date:new Date().toLocaleDateString()
        })
        document.getElementById('form').reset();
    }

    render(){
        return(
            <>
      <Container>
        <h1>Add Testimonies</h1>
        <Form id = "form" onSubmit = {this.handleSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>           
            </Form.Group>
            <Form.Group>
                <Form.Label>Testimonie</Form.Label>
                <Form.Control type = "textarea" name = "testimonie" placeholder = "testimonie" onChange = {this.handleChange}/>
            </Form.Group>
            <Form.Group>
                <Button className = "btn" type="submit">Submit</Button>
            </Form.Group>
        </Form> 
     </Container>  
    </>
    )
    }
}
export default TestimonieForm;