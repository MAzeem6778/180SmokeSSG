import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Card from 'react-bootstrap/Card';
import styles from '../../styles/homeStyles/home.module.css'

let products = [];

const responsive = {
    0: { items: 1 },
    1024: { items: 4 },
}

const addItems = (featuredProducts) => {
    products = [];
    products = featuredProducts.data.categoryList[0].children.map((product, index) => {
        return (
            <Card className={styles.txtCenter} style={{ height: 400, fontSize: 15 }} key={index}>
                <Card.Img style={{ height: 200 }} variant="top" src={product.products.items[0].small_image.url} />
                <Card.Body style={{ height: 200, textAlign: 'center', fontSize: 10 }}>
                    <Card.Title >{product.products.items[0].thumbnail.label}</Card.Title>
                    <Card.Text>
                        <b>{product.products.items[0].price_range.minimum_price.final_price.currency} {product.products.items[0].price_range.minimum_price.final_price.value}</b>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    });
}

const FeaturedProducts = ({ featuredProducts, title }) => {

    addItems(featuredProducts);
    return (
        <>
            <div className="featured-div">
                <h1>{title}</h1>
                <hr />
                <AliceCarousel
                    items={products}
                    responsive={responsive}
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    mouseTrackingEnabled={true}
                    disableAutoPlayOnAction={true}
                />
            </div>
        </>
    )
}

export default FeaturedProducts;