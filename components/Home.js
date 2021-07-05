import React, { useEffect } from 'react';
import classes from '../styles/Home.module.css';
import Image from 'next/image';
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from './buttons/Button';
import PropTypes from "prop-types";

const Home = ({ goToPage }) => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, [])



    return (
        <div styles={{ height: '100%', width: '100%' }} className={classes.sfondoSotto}>

            <div className="container-fluid justify-content-center" style={{ marginTop: '2vh' }}>
                <div className="row " data-aos="fade-right">
                    <div className="col-md-6 " aos-data="fade-up">
                        <div className={classes.payoffTitle}>
                            Ciao,
                        </div>
                        <div className={classes.payoffSubTitle}>
                            Sono Francesco
                        </div>
                        <div className={classes.payoffSubTitle}>
                            web  designer e developer.
                        </div>
                        <div className={classes.payoffButtons}>
                            <Button className="btn btn-lg btn-block btn-success" text="Contattami" onClick={() => goToPage('link')} > </Button>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <div data-aos="fade-left" className="justify-content-start text-center">
                           <Image src="/home_design.svg" width={600} height={600}></Image>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}
Home.propTypes = {
    goToPage: PropTypes.func
};

export default Home
