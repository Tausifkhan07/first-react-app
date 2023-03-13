import React from 'react';
import { Container } from 'react-bootstrap';
import ReactOwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './product-carousel.css';

const ProductCarousel = () => {
    const itemBox = {
        dots: false,
        autoWidth: true,
        margin: 25,
        responsive: {
            0 : {
                nav: false
            },
            768 : {
                nav: true
            }
        }
    }
  return (
    <Container fluid className='mb-5'>
        <ReactOwlCarousel {...itemBox}>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/printer/w/n/f/epson-l1800-original-imae9gzugbjwmz7d.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/kl175ow0/tablet/t/1/x/za7d0021in-lenovo-original-imagy8w3ycyw2wm7.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
                <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/instant-camera/e/2/u/-original-imagk4myz37c3dtx.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/headphone/p/r/z/enco-buds-2-oppo-original-imagh9frfp7gxdb3.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/xif0q/printer/s/8/d/-original-imafkykednshkhx5.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/hair-dryer/c/t/g/philips-hp8100-46-original-imaemymzuxrnzfjb.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/kylvr0w0/mouse/v/8/i/pop-wireless-multi-device-logitech-original-imagasukheypwhh4.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/printer/w/n/f/epson-l1800-original-imae9gzugbjwmz7d.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
            <div className='item-box'>
            <div className='img-box'>
                <img src='https://rukminim1.flixcart.com/image/200/200/kws5hu80/laptop-skin-decal/v/r/d/stockmarket-stickers-sharemarket-sticker-intraday-trading-best-original-imag9eyax9wrh2uq.jpeg?q=70' alt='img1'/>
                </div>
                <div className='title'>Hp Color Printer</div>
            </div>
        </ReactOwlCarousel>
    </Container>
  )
}

export default ProductCarousel