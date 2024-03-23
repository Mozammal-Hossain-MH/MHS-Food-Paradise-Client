import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true}>
            <div>
                <img src={'/01.webp'} />
            </div>
            <div>
                <img src={'/02.webp'} />
            </div>
            <div>
                <img src={'/03.webp'} />
            </div>
            <div>
                <img src={'/04.webp'} />
            </div>
            <div>
                <img src={'/05.webp'} />
            </div>
            <div>
                <img src={'/06.webp'} />
            </div>
        </Carousel>
    );
};

export default Banner;