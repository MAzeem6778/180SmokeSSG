import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import { getProductsByCategory, getCategoryById, getCategoryByUrl, getFilterData, getTextContent } from '../api/queries'
import { List } from '../../components/categoryList/categoryList'
import CategoryDetail from '../../components/categoryList/categoryDetails'
import Filter from '../../components/filters/filter';
import Layout from '../../components/layout';
// import '../../styles/styles.css'
import styles from '../../styles/category/category.module.css'

export default function CollectionPage({ _productsData, _categoryDetails, filtersData, NavItems, footerTextContents }) {
    const _products = _productsData.data.products.items;
    const details = _categoryDetails.data.category.description;

    let navigationItems = NavItems.data.categoryList[0].children.filter(cateItem => cateItem.include_in_menu == 1)
    return (
        <Layout navigationItems={navigationItems} footerTextContents={footerTextContents}>
            <Row style={{ marginTop: 100, marginBottom: 100 }}>
                <Col>
                    {/* <div className="filter-search-header"> */}
                    <div className={styles.filterSearchHeader}>
                        <div className={styles.heading}>Filters Area </div>
                        <Filter data={filtersData} />
                    </div>
                </Col>
                <Col lg={9}>
                    <List data={_products ? _products : null} />
                </Col>
            </Row>
            <Row>
                <CategoryDetail details={details} />
            </Row>
        </Layout>
    )
}



export async function getStaticProps({ params }) {

    let res =
        await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getCategoryByUrl(params.id), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).catch(error => console.log(error));
    const _categoryList = await res.json();

    const _categoryId = _categoryList.data.categoryList[0].id;


    // Call an external API endpoint to get posts
    res =
        await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getProductsByCategory(_categoryId), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).catch(error => console.log(error));
    const _productsData = await res.json();

    let details = await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getCategoryById(_categoryId), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    }).catch(error => console.log(error));
    const _categoryDetails = await details.json();

    let filters = await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getFilterData(), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        }
    }).catch(error => console.log(error));
    const filtersData = await filters.json();

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
            _productsData,
            _categoryDetails,
            filtersData,
            NavItems,
            footerTextContents
        },
    };
}



export async function getStaticPaths() {
    const _resp =
        await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getCategoryById("2"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        }).catch(error => console.log(error));
    const _collections = await _resp.json();

    let paths = [];

    _collections &&
        _collections.data &&
        _collections.data.category &&
        _collections.data.category.children &&
        _collections.data.category.children.forEach(_c => {

            if (_c.include_in_menu == 1) {

                // paths.push({
                //     params: {
                //         id: `${_c.id}`,
                //     }
                // });
                paths.push(`/c/${_c.url_key}`);
            }
        });

    // console.log('START - PATHS')
    // console.log(JSON.stringify(paths, null, 2));
    // console.log('END - PATHS')

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}