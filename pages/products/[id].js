import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import ViewOptions from '../../components/addToCartButton/viewOptions';

import { getSimpleProductDetail, getConfigurableProductDetail, getBundleProduct, getTextContent } from '../api/queries'

import Reviews from '../../components/reviews/reviews'
import AliceCarousel from '../../components/aliceCarousel';
import Layout from '../../components/layout';


let gData = null;

const types = {
    simple: 'SimpleProduct',
    configurable: 'ConfigurableProduct',
    bundle: 'BundleProduct'
};

// const getData = async (id, productType, setData) => {

//     if (productType == types.simple) {
//         let res =
//             await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getSimpleProductDetail(id), {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 }
//             }).catch(error => console.log(error));
//         const _categoryList = await res.json();
//         setData(_categoryList)
//     } else if (productType == types.configurable) {
//         let res =
//             await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getConfigurableProductDetail(id), {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 }
//             }).catch(error => console.log(error));
//         const _categoryList = await res.json();
//         setData(_categoryList)
//     } else if (productType == types.bundle) {
//         let res =
//             await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getBundleProduct(id), {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 }
//             }).catch(error => console.log(error));
//         const _categoryList = await res.json();
//         setData(_categoryList)
//     }
// }




export default function Product({ items, reviews, NavItems, footerTextContents }) {
    // const [data, setData] = useState(null);
    const router = useRouter()
    var type = router.query.type


    // useEffect(() => {
    //     getData(router.query.id, type, setData)
    // }, []);



    // console.log('here is the data', data);
    let navigationItems = NavItems ? NavItems.data.categoryList[0].children.filter(cateItem => cateItem.include_in_menu == 1) : null

    return (
        <Layout navigationItems={navigationItems} footerTextContents={footerTextContents}>
            <Row style={{ margin: "5% 0px" }}>
                <Col lg={6} md={6} style={{ textAlign: "center" }}>
                    {!items ? <h6>loading....</h6> : <AliceCarousel imagess={items[0].media_gallery} />}
                </Col>
                <Col lg={6} md={6} >
                    <div style={{ width: '80%' }}>
                        {items ?
                            <>
                                <h1 className="pd-product-title"> {items[0].name} </h1>
                                <p>{items[0].reviews.count ? items[0].reviews.count + " Reviews" : " No Reviews"}</p>
                                <br />
                                <p className="pd-meta-description"><b>{items[0].price_range.minimum_price.final_price.currency} {items[0].price_range.minimum_price.final_price.value}</b> </p>
                                <br />
                                <p className="pd-meta-description"> {items[0].meta_description}</p>
                            </>
                            :
                            null}
                    </div>
                    <div style={{ width: '80%' }}>
                        {/* {data ? <ViewOptions productType={type} options={data.data.productDetail.items[0].configurable_options} /> : null} */}
                        <ViewOptions productType={type} options={''} />
                    </div>
                </Col>
            </Row>
            <Row className="pd-description">
                {items ?
                    <>
                        <h1>Description</h1>
                        <br />
                        <div className="pd-meta-description" dangerouslySetInnerHTML={{ __html: items[0].description.html }} />
                    </>
                    : null}
            </Row>
            <Row>
                {items ? items[0].reviews.count ?
                    <Reviews reviews={reviews} />
                    : null : null}
            </Row>
        </Layout>
    )
}

export async function getStaticProps({ params }) {

    const res = await fetch("https://180smokejsproxy.sprintech.digital/180_proxy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `
                {
                    productDetail: products(filter: {url_key:{eq:"${params.id}"}}) {
                        items {
                          url_key
                          id
                          name
                          __typename
                          meta_description
                          reviews{
                            rating
                            count
                          }
                          price_range{
                            minimum_price{
                              final_price{
                                value
                                currency
                              }
                            }
                          }
                          description{
                            html
                          }
                          media_gallery{
                            label
                            url
                          }
                          image{
                            label
                            url
                          }
                          
                        }
                  }
                  }
                `,
        }),
    }).catch(error => console.log(error));
    const _products = await res.json();
    const items = _products.data.productDetail.items
    const pId = items[0].id

    const review_res = await fetch("https://180smokejsproxy.sprintech.digital/180_proxy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `
                {
                    reviews(filter: { product_id: ${pId} }) {
                        summary {
                            rating
                            count
                        }
                        items {
                            customer_id
                            detail
                            nickname
                            title
                            review_at
                            ratings {
                                vote_id
                                review_id
                                rating_code
                                value
                            }
                        }
                    }
                }
                `,
        }),
    }).catch(error => console.log(error));
    const rev_results = await review_res.json();
    const reviews = rev_results.data.reviews;

    const NavItems = await fetch("https://180smokejsproxy.sprintech.digital/180_proxy", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            query: `
      {
        categoryList(filters: { ids: { in: ["2"] } }) {
          id
          name
          children {
            id
            name
            position
            level
            url_key
            url_path
            include_in_menu
          }
        }
      }
      `,
        }),
    })
        .then(r => r.json())
        .then(data => data).catch(error => console.log(error));


    let footerTextContent =
        await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getTextContent(), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).catch(error => console.log(error));
    const footerTextContents = await footerTextContent.json();

    return {
        props: {
            items,
            reviews,
            NavItems,
            footerTextContents
        },
    };
}


const api = async () => {
    const arr = ["35", "17", "46", "14", "20"]
    let paths = []
    for (const item of arr) {
        const res = await fetch("https://180smokejsproxy.sprintech.digital/180_proxy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                query: `
                    {
                        products(filter:{category_id:{eq:"${item}"}}){
                            items {
                                id
                                url_key
                            }
                        }
                    }
                    `,
            }),
        }).catch(error => console.log(error));
        const _products = await res.json();
        _products &&
            _products.data &&
            _products.data.products &&
            _products.data.products.items &&
            _products.data.products.items.forEach((_p) => paths.push(`/p/${_p.url_key}`))
        console.log("insideloop", paths.length)
    }
    return paths;
}
export async function getStaticPaths() {
    const paths = await api();
    return { paths, fallback: false }
}



