// import '../../styles/styles.css'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


let images = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
}

const loadImages = (imagesArray) => {
    images = [];
    if (imagesArray) {
        imagesArray.forEach((item, index) => {
            images.push(<img src={item.url} width='70%'/>);
        });
    }
}


const AliceCarousell = ({imagess}) => {
    loadImages(imagess);
    return (
        <div >
            {images ? <AliceCarousel
                items={images}
                responsive={responsive}
                autoPlayInterval={2000}
                autoPlayDirection="rtl"
                autoPlay={true}
                fadeOutAnimation={true}
                mouseTrackingEnabled={true}
                disableAutoPlayOnAction={true}
            /> : null}
        </div>
    )
}

export default AliceCarousell;