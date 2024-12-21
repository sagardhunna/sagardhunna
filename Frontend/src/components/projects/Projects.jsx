import React from 'react';
import "./projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


const Projects = () => {
    return (
        <div className='projectCards'>
            <div className='card-styling'>
                <h2 style={{margin:'10px'}}>RemindMe</h2>
                <Card style={{ width: '30rem', height: '30rem' }}>
                    {/*could add image in future if needed<Card.Img variant="top" src="holder.js/100px100" />*/}
                    <Card.Img variant="top" src="src/assets/AlarmImage@3x.png" />
                    <Card.Body>
                        <Card.Text>
                            {/*Can put card text here if we want to*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className='goSomewhereButton' variant='light'>Go somewhere</Button>
            </div>

            <div className='card-styling'>
                <h2 style={{margin:'10px'}}>PROJECTNAME</h2>
                <Card style={{ width: '30rem', height: '30rem' }}>
                    {/*could add image in future if needed<Card.Img variant="top" src="holder.js/100px100" />*/}
                    THIS IS WHERE THE FRONT PICTURE OF THE APP
                    <Card.Body>
                        <Card.Text>
                            {/*Can put card text here if we want to*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Button className='goSomewhereButton' variant='light'>Go somewhere</Button>
            </div>
        </div>
    )

}

export default Projects