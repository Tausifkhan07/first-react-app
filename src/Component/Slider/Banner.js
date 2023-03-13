import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Banner(props) {
    
    return (
        <Carousel indicators={false}>
            {
                props.Data.map(pre => {
                    return (
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100"
                                src={pre.bannerImage}
                                alt={pre.bannerImage}
                            />
                        </Carousel.Item>
                    )
                })
            }

        </Carousel>
    );
}

export default Banner;