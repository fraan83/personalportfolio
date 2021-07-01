
import React, { useRef, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home from '../components/Home';
import Layout from '../components/layout/Layout';
import Carosello from '../components/sections/Carosello'
import Bio from '../components/sections/Bio';
import Link from '../components/sections/Link';
import { useRouter } from 'next/router'
import ScrollNavigation from 'react-single-page-navigation'
import classes from '../styles/Index.module.css'
import Menu from '../components/layout/Menu'


export default function Index() {


  const router = useRouter();
  console.log("QUERY", router.query.section);
  return (

    <ScrollNavigation elements={{ home: {}, bio: {}, carosello: {}, link: {} }} >
      {({ refs, activeElement, goTo }) => (
        <Layout>
        <Menu  goToPage={(pagina) => goTo(pagina, "smooth")} goToPixel={(pos) => goTo(pos)} activeElement={activeElement} sezDefault={router.query.section} />

          <section ref={refs.home} className={classes.section}>
            <Home goToPage={(pagina) => goTo(pagina, "smooth")} /> 
          </section>
          <section ref={refs.bio} className={classes.section}>
            <Bio />
          </section>
          <section ref={refs.carosello} className={classes.section}>
            <Carosello />
          </section>
          <section ref={refs.link} className={classes.section}>
            <Link />
          </section>
        </Layout>
      )}
    </ScrollNavigation>
  )
}
