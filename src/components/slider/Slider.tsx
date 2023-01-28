import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../reset.css'
import './SliderStyle.css'
import slide2 from '../../images/1664534620_53-podacha-blud-com-p-klubnichnii-barkhat-tort-foto-54.jpg';
import React from "react";


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


interface IProps {
    onCakeChange: (event: any) => void,
    curentItemValue: string
}

export default class CarouselBox extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);

    }

    render(): React.ReactNode {
        return (
            <div>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}

                >
                    <CustomButton
                        onCakeChange={this.props.onCakeChange} name={"Design"} value={"design-1"}
                        curentItemValue={this.props.curentItemValue} img={slide2} />
                    <CustomButton
                        onCakeChange={this.props.onCakeChange} name={"Design"} value={"design-2"}
                        curentItemValue={this.props.curentItemValue} img={slide2} />
                    <CustomButton
                        onCakeChange={this.props.onCakeChange} name={"Design"} value={"design-3"}
                        curentItemValue={this.props.curentItemValue} img={slide2} />
                    <CustomButton
                        onCakeChange={this.props.onCakeChange} name={"Design"} value={"design-4"}
                        curentItemValue={this.props.curentItemValue} img={slide2} />
                    <CustomButton
                        onCakeChange={this.props.onCakeChange} name={"Design"} value={"design-5"}
                        curentItemValue={this.props.curentItemValue} img={slide2} />
                    <CustomButton
                        onCakeChange={this.props.onCakeChange} name={"Design"} value={"design-6"}
                        curentItemValue={this.props.curentItemValue} img={slide2} />
                </Carousel>
            </div>

        );
    }

}


interface IpropsButton {
    onCakeChange: (event: any) => void,
    name: string,
    value: string,
    curentItemValue: string
    img: string
}

class CustomButton extends React.Component<IpropsButton>
{
    constructor(pops: any) {
        super(pops)
    }

    render(): React.ReactNode {
        return (
            <button
                onClick={this.props.onCakeChange}
                name={this.props.name}
                value={this.props.value}
                className={this.props.curentItemValue === this.props.value ? "curent-SlideItem" : "SlideItem"} >
                <img className="scroll-image" src={this.props.img} alt="" />
            </button>
        )
    }
}