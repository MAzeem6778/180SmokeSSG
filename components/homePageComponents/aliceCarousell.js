import { useEffect, useState } from 'react';
// import '../../styles/styles.css'
import styles from '../../styles/homeStyles/aliceCarousel.module.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



let images = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 1 },
}

const loadImages = (bannerUrls) => {
    images = [];
    bannerUrls.bannerUrls.data.rbsliderBanner[0].sliders.forEach((item, index) => {
        images.push(<img src={item.img_url_final} />);
    });
}


const AliceCarousell = (bannerUrls) => {
    loadImages(bannerUrls);
    return (
        <div className="aliceCarousel">
            {images.length ? <AliceCarousel
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