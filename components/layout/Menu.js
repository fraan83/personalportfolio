import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from "prop-types";
import Link from 'next/link';
import classes from "../../styles/Menu.module.css";



const Menu = ({ goToPage, goToPixel, activeElement, sezDefault }) => {

    useEffect(() => {
        if (!!sezDefault)
            goToPage(sezDefault);
    }, []);



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bgnav">
                <div className="container-fluid">
                    <Link href="/">
                        <a className="navbar-brand" >
                            <Image src="/fg_logo.png" height={60} width={65} ></Image>
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">

                        <ul className="navbar-nav   ">
                            <li className="nav-item">
                                <Link href={{ pathname: '/', query: { section: 'bio' } }}>
                                    <div onClick={() => goToPage('bio')} className={`${classes.link} ${(activeElement === 'bio') ? classes.linkActive : ""}`} > <i aria-hidden className="far fa-alien-monster"></i> Eccomi! </div>

                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href={{ pathname: '/', query: { section: 'carosello' } }}>
                                    <div onClick={() => goToPage('carosello')} className={`${classes.link} ${(activeElement === 'carosello') ? classes.linkActive : ""}`} >   <i aria-hidden className="fas fa-puzzle-piece"></i> Portfolio</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={{ pathname: '/', query: { section: 'link' } }}>

                                    <div onClick={() => goToPage('link')} className={`${classes.link} ${(activeElement === 'link') ? classes.linkActive : ""}`} >  <i aria-hidden className="far fa-envelope-open-text"></i> Contattami </div>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

Menu.propTypes = {
    goToPage: PropTypes.func,
    goToPixel: PropTypes.func,
    activeElement: PropTypes.string,
    sezDefault: PropTypes.string,
    pagInterna: PropTypes.bool,
};

export default Menu
