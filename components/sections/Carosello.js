import React, { useEffect } from 'react';
import classes from "./Carosello.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
const Carosello = () => {
    return (
        <div className={classes.content}>
            <div className={classes.container}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={classes.title}>
                                i miei ultimi lavori
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/carosello_covidstats.jpg"
                                        alt="COVID STATS ITALIA "
                                    />
                                    <Carousel.Caption>
                                        <a href="http://coviditaliastats.surge.sh/" target="_blank">
                                            <h3>STATISTICHE COVID ITALIA</h3>
                                            <p>Sito di statistiche sul covid realizzatø con ANGULAR </p></a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="/carosello_craon.jpg"
                                        alt="Main Site CRAON"
                                    />

                                    <Carousel.Caption>
                                        <a href="www.craon.it" target="_blank">
                                            <h3>Main Site CRAON SRL</h3>
                                            <p>Sito realizato per Craon Srl con Next.js</p></a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="carosello_giussani.jpg"
                                        alt="DON LUIGI GIUSSA CONTRIBUTI "
                                    />

                                    <Carousel.Caption>
                                        <a href="https://contributicentenario.comunioneliberazione.org/it/index.html" target="_blank">
                                            <h3> Centenario  Don Luigi Giussani</h3>
                                            <p>Sito realizzato in pure HTML + JavaScript + Bootstrap 5.</p> </a>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carosello
