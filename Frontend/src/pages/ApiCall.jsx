import './apicall.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ApiCall() {
    return (
        <div>
            <h1 style={{ fontSize: '5rem', margin: '1%' }}>Test API Call</h1>
            <div className='api-call-container'>
                <div className="img-button-container rounded">
                    <div className='images'>
                        <Card.Img
                            className='api-image rounded'
                            variant="top"
                            src='/assets/question-mark.jpg'
                        />
                        <Card.Img
                            className='api-image rounded'
                            variant="top"
                            src='/assets/question-mark.jpg'
                        />
                    </div>

                    <Button className='goSomewhereButton border border-dark border-2' variant='light' style={{fontSize: '1.5rem'}}>Find new images!</Button>
                </div>
            </div>
        </div>
    )
}

export default ApiCall;
