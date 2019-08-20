import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
const StudentItem = (props) => {

    const arr = Object.values(props)
    console.log("arr",arr)


    return (
        <div>
            {arr.map((result,i) =>
                <Card key={i} style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Student Id: {result.id}</Card.Title>
                        <Card.Text>
                            Name: {result.name} {result.surname}<br />
                            Faculty: {result.faculty}<br/>
                            Year: {result.year} <br />
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default StudentItem