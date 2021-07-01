import React from 'react';
import PropTypes from "prop-types";
import classes from '../../styles/Buttons.module.css';


const Button = ( { text, onClick, ...params } ) => {
    if(onClick){
        return ( <button onClick={() => onClick()} className={classes.button} {...params}> {text} </button> ) 
    } else {
        return( <button  className={classes.button} {...params}>{text}</button>);
    }
   
    
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    text: "INVIA",
};


export default Button
