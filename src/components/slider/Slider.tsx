import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../reset.css'
import './SliderStyle.css'
import slide2 from '../../images/1664534620_53-podacha-blud-com-p-klubnichnii-barkhat-tort-foto-54.jpg';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};



export default function CarouselBox() {

    return (
        <div>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                infinite={true}
                autoPlay={ false}
                autoPlaySpeed={5000}

            >
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
                <div className="SlideItem"><img className="scroll-image" src={slide2} alt="" /></div>
            </Carousel>
        </div>

    );
}