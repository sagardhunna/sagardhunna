import React from 'react';
import "./projects.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';


const Projects = () => {
    return (
        <div className='projectCards'>
            <div className='card-styling rounded'>
                <h2 style={{margin:'10px'}}>RemindMe</h2>
                <Card style={{ width: '30rem', height: '30rem', padding:'0px'}}>
                    {/*could add image in future if needed<Card.Img variant="top" src="holder.js/100px100" />*/}
                    <div className='project1Image'>
                        <Card.Img 
                            variant="top" 
                            src="src/assets/AlarmImage@3x.png" 
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
                <h2 style={{margin:'10px'}}>PROJECTNAME</h2>
                <Card style={{ width: '30rem', height: '30rem', padding: '0px' }}>
                    {/*could add image in future if needed<Card.Img variant="top" src="holder.js/100px100" />*/}
                    <div style={{border:'solid', margin:'-4px'}}>
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