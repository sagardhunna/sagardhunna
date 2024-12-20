import React from 'react';
import "./projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Projects = () => {
    return (
        <div className='projectCards'>
            <div className='card-1'>
                <Card style={{ width: '30rem', height: '30rem' }}>
                    <Card.Title>Project 1 Name</Card.Title>
                    {/*could add image in future if needed<Card.Img variant="top" src="holder.js/100px100" />*/}
                    <Card.Body>
                        <Card.Text>
                            {/*Can put card text here if we want to*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="primary" style={{width: '20rem', marginTop:'10px'}}>Go somewhere</Button>
            </div>

            <div className='card-2'>
                <Card style={{ width: '30rem', height: '30rem' }}>
                    <Card.Title>Project 2 Name</Card.Title>
                    {/*could add image in future if needed<Card.Img variant="top" src="holder.js/100px100" />*/}
                    <Card.Body>
                        <Card.Text>
                            {/*Can put card text here if we want to*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button variant="primary" style={{width: '20rem', marginTop:'10px'}}>Go somewhere</Button>
            </div>      
        </div>
    )

}

export default Projects