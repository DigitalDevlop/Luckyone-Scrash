import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScratchCard from 'lesca-react-scratch-card';
import './App.css';
import LogoImage from './download.png';
import Image2 from './2.png';
import Image1 from './1.png';
import Image3 from './3.png';
import Image4 from './4.png';

function App() {

    const handleComplete = () => {
        console.log('Scratch completed');
    };

    return (
        
        <Container className="container">
            <Row>
                <Col xs="12" md="4">
                    <ScratchCard
                        cover={Image1}
                        percent={60}
                        width={350}
                        height={250}
                        onComplete={handleComplete}
                    >
                        <img className="img" src={Image2} alt="Your Image" />
                    </ScratchCard>
                </Col>

                <Col xs="12" md="4">
                    <ScratchCard
                        cover={Image1}
                        percent={60}
                        width={350}
                        height={250}
                        onComplete={handleComplete}
                    >
                        <img className="img" src={Image3} alt="Your Image" />
                    </ScratchCard>
                </Col>

                <Col xs="12" md="4">
                    <ScratchCard
                        cover={Image1}
                        percent={60}
                        width={350}
                        height={250}
                        onComplete={handleComplete}
                    >
                        <img className="img" src={Image4} alt="Your Image" />
                    </ScratchCard>
                </Col>

            </Row>
        </Container>
    );
}

export default App;
