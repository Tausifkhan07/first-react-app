import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const WorkCard = () => {

    

    return (
        <div>
            <Container fluid>
                <Row lg={4} md={2} xs={1}>
                    <Col>
                        <Card className='my-3'>
                            <Card.Img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.smanikdesign.com/wp-content/uploads/2021/03/Chalk-Chuckles.png" alt='first image' />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='my-3'>
                            <Card.Img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.smanikdesign.com/wp-content/uploads/2021/03/Luxury-villa.png" alt='first image' />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='my-3'>
                            <Card.Img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.smanikdesign.com/wp-content/uploads/2021/03/Chalk-Chuckles.png" alt='first image' />
                        </Card>
                    </Col>
                    <Col>
                        <Card className='my-3'>
                            <Card.Img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.smanikdesign.com/wp-content/uploads/2021/03/Luxury-villa.png" alt='first image' />
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* <Container className='bg-primary'>
                <Row>
                    <Card className='col-md-6 bg-primary'>
                        <div className='m-3'>
                            <Card.Img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.smanikdesign.com/wp-content/uploads/2021/03/Chalk-Chuckles.png" alt="Card image" />
                        </div>
                    </Card>
                    <Card className='col-md-6 bg-primary'>
                        <div className='m-3'>
                            <Card.Img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.smanikdesign.com/wp-content/uploads/2021/03/Luxury-villa.png" alt="Card image" />
                        </div>
                    </Card>
                </Row>
            </Container> */}
            <p className="col-md-5 mx-auto">paragraph</p>
        </div>
    )
}

export default WorkCard;