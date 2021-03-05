import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import appendData_Inquiry from '../util/spreadsheet';
import '../enquiry/quick-enquiry.styles.css';

class QuickEnquiry extends React.Component{
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
        this.setState({[e.target.name]:[e.target.value]})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('inquiry').reset();
        appendData_Inquiry(
            {
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
                    <Modal.Title>Fill the details below</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <Form id = "inquiry" onSubmit = {this.handleSubmit}>
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
export default QuickEnquiry;