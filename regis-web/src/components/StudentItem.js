import React, { useState, useEffect } from 'react';
import { Button, Card, Form, Modal, Container } from 'react-bootstrap'
import axios from 'axios'
const StudentItem = (props) => {

    const [remove, setRemove] = useState(false)
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [faculty, setFaculty] = useState()
    const [year, setYear] = useState()
    const [edit, setEdit] = useState(false)
    const [all, setAll] = useState([])
    const [show, setShow] = useState(false)
    const { deleteStudent, insertStudent } = props


    useEffect(() => {
        const response = axios.get("http://localhost:8080/api/all").then(response => {
            setAll(response.data)
        })
    }, []);

    const handleOnClick = (e) => {
        if (edit) {
            handlePopup(e)
        }
        if (remove) {
            handlePopup(e)
        }
    }

    const getData = (result) => {
        setId(result.id)
        setName(result.name)
        setSurname(result.surname)
        setFaculty(result.faculty)
        setYear(result.year)
    }

    const handlePopup = (e) => { setShow(true) }
    const handleClose = (e) => { 
        setShow(false) 
        setEdit(false) 
        setRemove(false)
    }

    const editSave = (e) => {
        const data = {
            id,
            name,
            surname,
            faculty,
            year
        }
        insertStudent(data)
        setShow(false)
        window.location.reload(true);
    }

    const removeSave = (e) =>{
        deleteStudent(id)
        window.location.reload(true)
    }




    return (
        <div>
            {all.map((result, i) =>
                <Form key={i} onSubmit={handleOnClick}>
                    <Card key={i} style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title value={result.id}>Student Id: {result.id}</Card.Title>
                            <Card.Text value={result.name}>Name: {result.name} {result.surname}</Card.Text>
                            <Card.Text value={result.faculty}>Faculty: {result.faculty}</Card.Text>
                            <Card.Text value={result.year}>Year: {result.year}</Card.Text>
                            <Button type="submit" variant="success" onClick={e => (setEdit(true), getData(result))} >Edit</Button>
                            <Button type="submit" variant="danger" onClick={e => (setRemove(true), setId(result.id))} >Delete</Button>
                        </Card.Body>
                    </Card>
                    <br />
                </Form>
            )}


            {/* ------------------------- Edit Modal ------------------------- */}
            <Modal show={show} onHide={handleClose}>
                {edit ?
                    < div >
                        <Modal.Header closeButton>
                            <Modal.Title>Student id: {id}</Modal.Title>
                        </Modal.Header>
                        <Container className="mt-2 mb-2">
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={e => setName(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control type="text" name="surname" value={surname} onChange={e => setSurname(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Faculty</Form.Label>
                                <Form.Control type="text" name="faculty" value={faculty} onChange={e => setFaculty(e.target.value)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="number" name="year" value={year} onChange={e => setYear(e.target.value)}></Form.Control>
                            </Form.Group>
                        </Container>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={editSave}>
                                Save Changes
                             </Button>
                        </Modal.Footer>

                    </ div>


                    //  ------------------------- Delete Modal ------------------------- 
                    :
                    <div>
                        <Modal.Header closeButton>
                            <Modal.Title>Student id: {id}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Do you want to delete student id: {id} ?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={removeSave}>Save changes</Button>
                        </Modal.Footer>
                    </div>
                }

            </Modal>
        </div>
    )
}

export default StudentItem