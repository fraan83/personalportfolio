import React from 'react';
import classes from "./Link.module.css";
import Contattami from '../form-contatti/Contattami';
import { FormControlLabel, TextareaAutosize, Checkbox } from "@material-ui/core";

const Link = () => {
    return (
        <div className={classes.content}>
            <div className={classes.container}>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6" style={{textAlign: 'center' }}>
                           <h2>Link utili:</h2>
                            <ul>
                                <li> <a href="https://github.com/fraan83" target="_blank" ><img src="/github.png" width="100" alt="GITHUB FRAAN83" />
                                        <br />
                                    Il mio profilo Github</a></li>
                                <li>
                                    <a href="https://www.linkedin.com/in/francesco-greco-a2b17b31/" target="_blank" ><img src="/linkedin.png" width="100" alt="GITHUB FRAAN83" />
                                    <br />
                                        Il mio profilo LinkedIn </a>
                                </li>
                                <li>
                                    INFO: <a href="mailto:fraan83@gmail.com">fraan83@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                 
                        <div className="col-md-6">
                            <h2>CONTATTAMI</h2>
                            <Contattami title="Hai bisogno di una Web App?" icon="/settings.svg"/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Link
