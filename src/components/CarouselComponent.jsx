
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

function CarouselComponent(){
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    let settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    const deskImgUrl = ['../../public/desktop-image-hero-1.jpg', '../../public/desktop-image-hero-2.jpg', 
                    '../../public/desktop-image-hero-3.jpg'];
    const mobileImgUrl = ['../../public/mobile-image-hero-1.jpg', '../../public/mobile-image-hero-2.jpg', 
                        '../../public/mobile-image-hero-3.jpg'];
    const heroTitle = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials'];
    const paragraph = [`We provide unmatched quality, comfort, and style for property owners across the country. 
        Our experts combine form and function in bringing your vision to life. Create a room in your 
        own style with our collection and make your property a reflection of you and what you love.`, 
        `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
        store locator. Any questions? Don't hesitate to contact us today.`, 
        `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
        experience in this industry, we understand what customers want for their home and office.`];

    const btn = <div className="btn-container">
        <button className="button" onClick={previous}>
            <img src="../../public/icon-angle-left.svg" alt="" />
        </button>
        <button className="button" onClick={next}>
                <img src="../../public/icon-angle-right.svg" alt="" />
            </button>
        </div>
    
    const promp = <a href="#" className="promp">Shop now <span><img src="../../public/icon-arrow.svg" alt="" /></span></a>

    return(
        <div className="slider-container">
            <Slider  ref={slider => {
                        sliderRef = slider;
            }} {...settings}>
                <div className="slider">
                    <div className="pic-container">
                        <img src={deskImgUrl[0]} alt="" className="hero-img-desk" />
                        <img src={mobileImgUrl[0]} alt="" className="hero-img-mobile" />
                        {btn}
                    </div>
                    
                    <div className="text">
                        <h1>{heroTitle[0]}</h1>
                        <p>{paragraph[0]}</p>
                        {promp}
                    </div>
                </div>
                <div className="slider">
                    <div className="pic-container">
                        <img src={deskImgUrl[1]} alt="" className="hero-img-desk" />
                        <img src={mobileImgUrl[1]} alt="" className="hero-img-mobile" />
                        {btn}
                    </div>
                    <div className="text">
                        <h1>{heroTitle[1]}</h1>
                        <p>{paragraph[1]}</p>
                        {promp}
                    </div>
                </div>
                <div className="slider">
                    <div className="pic-container">
                        <img src={deskImgUrl[2]} alt="" className="hero-img-desk" />
                        <img src={mobileImgUrl[2]} alt="" className="hero-img-mobile" />
                        {btn}
                    </div>
                    <div className="text">
                        <h1>{heroTitle[2]}</h1>
                        <p>{paragraph[2]}</p>
                        {promp}
                    </div>
                </div>
            </Slider>
            
        </div>
        
    
    );
}

export default CarouselComponent