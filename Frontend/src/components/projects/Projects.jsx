import React from 'react';
import "./projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


const Projects = () => {
    return (
        <div className='projectCards'>
            <div className='card-styling rounded'>
                <h2 style={{ margin: '10px' }}>RemindMe</h2>
                <Card style={{ width: '20rem', height: '20rem', padding: '0px' }}>
                    <div className='project1Image'>
                        <Card.Img
                            variant="top"
                            src="/assets/AlarmImage@3x.png"
                            style={{width: '100%', height: '100%'}}
                        />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            {/*Can put card text here if we want to*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className='goSomewhereButton border border-dark border-2' variant='light'>Go somewhere</Button>
            </div>

            <div className='card-styling rounded'>
                <h2 style={{ margin: '10px' }}>PROJECTNAME</h2>
                <Card style={{ width: '20rem', height: '20rem', padding: '0px' }}>
                    <div className='project1Image' style={{width: '105%', height: '105%', alignSelf: 'center'}}>
                        <Card.Img variant="top" src="holder.js/400px400" />
                    </div>
                    <Card.Body>
                        <Card.Text>
                            {/*Can put card text here if we want to*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className='goSomewhereButton border border-dark border-2' variant='light'>Go somewhere</Button>
            </div>
        </div>
    )

}

export default Projects