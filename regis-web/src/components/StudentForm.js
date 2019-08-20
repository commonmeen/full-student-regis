import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import StudentItem from './StudentItem';
import axios from 'axios'
import { async } from 'q';

const StudentForm = (props) => {

    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [faculty, setFaculty] = useState()
    const [year, setYear] = useState()
    const [all, setAll] = useState([])
    const { insertStudent, getAllStudent, deleteAllStudent, result } = props
    const arrSize = all.length
    useEffect(() => {
        const response = axios.get("http://localhost:8080/api/all").then(response => {
            setAll(response.data)
        })
    }, []);

    const handleSumbit = (e) => {

        const data = {
            name,
            surname,
            faculty,
            year
        }
        insertStudent(data)
    }

    const hadleDelete = (e) =>{
        deleteAllStudent()
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={handleSumbit}>
                            <p>Student Form</p>
                            <Form.Control type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)}></Form.Control>
                            <Form.Control type="text" name="surname" placeholder="Surname" onChange={e => setSurname(e.target.value)}></Form.Control>
                            <Form.Control type="text" name="faculty" placeholder="Faculty" onChange={e => setFaculty(e.target.value)}></Form.Control>
                            <Form.Control type="number" name="year" placeholder="Year" onChange={e => setYear(e.target.value)}></Form.Control>
                            <Button type="submit">Enter</Button>
                            <Button type="submit" variant="danger" onClick={hadleDelete}>Delete All</Button>
                        </Form>
                    </Col>

                    <Col sm={6}>
                        <StudentItem {...all}></StudentItem>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default StudentForm