import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import Button from "../buttons/Button";
import { FormControlLabel, TextareaAutosize, Checkbox } from "@material-ui/core";
import classes from "./Contattami.module.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contattami = ({ title, subtitle, icon }) => {
 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    async function onSubmit(values) {

        console.log(values)

        let config = {
            method: 'POST',
            url: `/api/mailer`,
            headers: {
                'Content-type': 'application/json'
            },
            data: values,

        };

        // debugger

        try {
            const response = await axios(config);
            // debugger
            if (response.status == 200) {

                console.log('Success');

                toast.success('Email inviata correttamente. \nVerrai ricontattato al più presto.', {
                      position: "bottom-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                  });
                     
              //  alert('Email inviata correttamente. \n Un nostro tecnico specialista la ricontatterà al più presto.')
                reset();

            } else {
                toast.error('si è verificato un errore nell\'invio della email. \nPuò scrivermi all\'indirizzo fraan83@gmail.com direttamente dalla tua casella email,\nmi scuso per il disagio.')
            }
            console.log('response', response)

        } catch (error) {
            console.log('errore', error)
            toast.error('si è verificato un errore nell\'invio della email. \nPuò scrivermi all\'indirizzo fraan83@gmail.com direttamente dalla tua casella email,\nmi scuso per il disagio.')

        }

    }

    let msgerror = "Campo Obbligatorio";

    return (
        <div className={classes.containerForm}>
            <div className={classes.headerForm}>
                <div className={classes.titleForm} >
                    <img className={classes.iconForm} src={icon}></img>
                    {title}
                </div>

            </div>
            <div className={classes.contentForm}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        style={{ marginTop: '6px', marginBottom: '6px', }}
                        fullWidth
                        name="nome"
                        label="Nome *"
                        variant="outlined"
                        helperText={(!!errors.nome) ? msgerror : null}
                        {...register('nome', { required: true })}
                        error={!!errors.nome}
                        className="textField"
                    />

                    <TextField
                        style={{ marginTop: '6px', marginBottom: '6px', }}
                        fullWidth
                        name="cognome"
                        label="Cognome *"
                        variant="outlined"
                        helperText={(!!errors.cognome) ? msgerror : null}
                        {...register('cognome', { required: true })}
                        error={!!errors.cognome}
                        className="textField"
                    />

                    <TextField
                        style={{ marginTop: '6px', marginBottom: '6px', }}
                        fullWidth
                        name="email"
                        label="Email *"
                        variant="outlined"
                        helperText={!!errors.email ? "Inserire una email valida" : null}
                        {...register('email', {
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Inserire una email valida",
                            },
                        })}
                        error={!!errors.email}
                        className="textField"
                    />

                    <TextField
                        style={{ marginTop: '6px', marginBottom: '6px', }}
                        fullWidth
                        name="oggetto"
                        label="Oggetto *"
                        variant="outlined"
                        helperText={(!!errors.oggetto) ? msgerror : null}
                        {...register('oggetto', { required: true })}
                        error={!!errors.oggetto}
                        className="textField"
                    />

                    <TextareaAutosize

                        name="messaggio"
                        placeholder="Messaggio *"
                        className={`${classes.description} ${!!errors.messaggio && classes.errore}`}
                        {...register('messaggio', { required: true })}
                    //defaultValue={data?.oggetto}
                    />
                    <br></br>
                    {(!!errors.messaggio) && <div className="msgerror" >{msgerror}</div>}
                    <div className={classes.buttonArea}   >



                        <Button type="submit" className="btn btn-success btn-block" />
                    </div>

                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

Contattami.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    icon: PropTypes.string,
};


export default Contattami
