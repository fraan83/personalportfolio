import React from 'react'
import classes from "./Bio.module.css";
import { ProgressBar } from 'react-bootstrap';
import Button from '../buttons/Button'

const Bio = () => {
    return (
        <div className={classes.content}>
            <div className={classes.container}>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-4 text-center" style={{padding: '3rem'}}>

                        
                            <h5 className="card-title text-light" style={{ mixBlendMode:"difference"}}>Francesco Greco</h5>
                            <p className="card-text text-light" style={{ mixBlendMode:"difference"}}> Web deisgner e Developer con esperienza nel campo dei gestionali e dei siti vetrina per PMI.</p>
                           
                            <img src="/fprof.jpeg" className="img-fluid" width="200px" height="200px" style={{ borderRadius: '15rem' }} alt="Francesco Greco web deisgner Developer" /> <br/>
                            <br></br>
                            <br></br>
                            <a href="https://www.linkedin.com/in/francesco-greco-a2b17b31/" target="_blank" className="btn btn-primary">Visita Profilo <i aria-hidden className="fab fa-linkedin"></i></a> <br />
                        </div>
                        <div className="col-md-4 text-center" style={{padding: '3rem'}}>
                            <div className={classes.textBio}>
                                <h1 className="text-center">Bio</h1>
                                <br />
                                Dal 2011 collaboro con vari team di sviluppo come consulente IT, sia lato Backend (.Net Framework, .Net Core, SQL server), che Frontend (HTML, CSS, JavaScript, Next.JS, ReactJS).
                                <br></br> 
                                <br></br>
                                    
                                <br></br>
                                <form method="get" action="/CV_FRANCESCOGRECO.docx" className="text-center">
                                    <button  disabled className="btn btn-disabled btn-block">Download CV</button>
                                    <br></br>
                                    <i  style={{fontSize:"12px", margin: "0 auto"}}> Ultimo aggiornamento CV: <b> Maggio 2021 </b> </i>
                                </form>
                            </div>


                        </div>
                        <div className="col-md-4" style={{padding: '3rem'}}>
                            <div className={classes.textSkills}>
                                <h1 className="center">Skills</h1>
                                <br />
                                <div>
                                    <strong>HTML5 CSS3</strong>
                                    <ProgressBar animated variant="info" now={100} />
                                    <strong>JavaScript / jQuery </strong>
                                    <ProgressBar animated variant="info" now={70} />
                                    <strong>React.js / Next.js</strong>
                                    <ProgressBar animated variant="info" now={70} />
                                    <strong>Angular</strong>
                                    <ProgressBar animated variant="info" now={70} />
                                    <strong>.Net Framework / .Net Core</strong> 
                                    <ProgressBar animated variant="info" now={60} />
                                    <strong>mySql / SQL Server</strong>
                                    <ProgressBar animated variant="info" now={50} />
                                    <strong>Adobe Creative Suite</strong>
                                    <ProgressBar animated variant="info" now={80} />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio
