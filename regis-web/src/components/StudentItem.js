import React, { useState, useEffect } from 'react';
import { Button, Card, Form } from 'react-bootstrap'
import axios from 'axios'
const StudentItem = (props) => {

    const [remove,setRemove] = useState(false)
    const [id,setId] = useState()
    const [edit,setEdit] = useState(false)
    const [all, setAll] = useState([])
    const {deleteStudent} = props


    useEffect(() => {
        const response = axios.get("http://localhost:8080/api/all").then(response => {
            setAll(response.data)
        })
    }, []);



    const handleOnClick = (e) => {
        console.log(remove)
        if(remove){
            deleteStudent(id)
        }
        
    }

    return (
        <div>
            {all.map((result, i) =>
                <Form key={i} onSubmit={handleOnClick}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title value={result.id}>Student Id: {result.id}</Card.Title>
                            <Card.Text value={result.name}>Name: {result.name} {result.surname}</Card.Text>
                            <Card.Text value={result.faculty}>Faculty: {result.faculty}</Card.Text>
                            <Card.Text value={result.year}>Year: {result.year}</Card.Text>
                            <Button type="submit" variant="success" onClick={e => (setEdit(true), setId(result.id)) } >Edit</Button>
                            <Button type="submit" variant="danger" onClick={e => (setRemove(true), setId(result.id)) } >Delete</Button>
                        </Card.Body>
                    </Card>
                    <br/>
                </Form>
            )}
        </div>
    )
}

export default StudentItem