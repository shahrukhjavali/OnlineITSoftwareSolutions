import React from 'react';
import { Modal, Form, Button} from 'react-bootstrap';
import appendData_Reg from './add-record';
import '../enquiry/quick-enquiry.styles.css';


class Register extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"",
            email:"",
            mobile:"",
            course:""
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:[e.target.value]});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        appendData_Reg({
            Name:this.state.name[0],
            Email:this.state.email[0],
            Mobile_Number:this.state.mobile[0],
            Course:this.state.course[0],
            date:new Date().toLocaleDateString()
        });

    }

    render(){
        return(
            <>
        <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>Register For the Course</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                   <Form id = "reg" onSubmit = {this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type = "text" name = "name" placeholder = "First Name" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" name = "email" placeholder = "Email ID" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type = "number" name = "mobile" placeholder = "Mobile Number" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Course</Form.Label>
                        <Form.Control type = "text"  name = "course" placeholder = "Course" onChange = {this.handleChange}/>
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                   </Form> 
                </Modal.Body>
        </Modal.Dialog> 
    </>
        )
    }
}
export default Register;