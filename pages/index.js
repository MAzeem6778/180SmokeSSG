import Head from 'next/head'
import styles from '../styles/homeStyles/home.module.css'
import "bootstrap/dist/css/bootstrap.css";

import { getBannerURL, getFeaturedProducts, getNewRelease, getTextContent } from '../pages/api/queries';
import Layout from '../components/layout';

import AliceCarousell from '../components/homePageComponents/aliceCarousell';
import CardSection from '../components/homePageComponents/cardSection';
import AliceCarouselProducts from '../components/homePageComponents/aliceCarouselProducts';
import InteractionSection from '../components/homePageComponents/interactionSection';
import EmailSection from '../components/homePageComponents/emailSection';
import CustomerSupport from '../components/homePageComponents/customerSupport';
import About180 from '../components/homePageComponents/about180';
import LastPoint from '../components/homePageComponents/lastPoint';



export default function Home({ NavItems, bannerUrls, featuredProducts, NewReleases, footerTextContents }) {
  
  let navigationItems = NavItems.data.categoryList[0].children.filter(cateItem => cateItem.include_in_menu == 1)

  return (
    <div className={styles.container}>
      <Layout navigationItems={navigationItems} footerTextContents={footerTextContents}>

        <AliceCarousell bannerUrls={bannerUrls} style={{marginTop: '8%'}} />
        <CardSection />
        <AliceCarouselProducts featuredProducts={featuredProducts} title="Featured Products" />
        <InteractionSection />
        <AliceCarouselProducts featuredProducts={NewReleases} title="New Release" />
        <EmailSection />
        <About180 />
        <CustomerSupport />
        <LastPoint />

      </Layout>
    </div>
  )
}



export async function getStaticProps() {
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



  let bannerUrl =
    await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getBannerURL(), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }).catch(error => console.log(error));
  const bannerUrls = await bannerUrl.json();


  let featuredProduct =
    await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getFeaturedProducts("20"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }).catch(error => console.log(error));
  const featuredProducts = await featuredProduct.json();

  let NewRelease =
    await fetch("https://180smokejsproxy.sprintech.digital/180_proxy?query=" + getNewRelease("21"), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    }).catch(error => console.log(error));
  const NewReleases = await NewRelease.json();


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
      NavItems,
      bannerUrls,
      featuredProducts,
      NewReleases,
      footerTextContents
    },
  };
}