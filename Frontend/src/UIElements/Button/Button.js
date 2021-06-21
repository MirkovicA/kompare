import React from 'react';

import './Button.css';

const Button = props => {
    return (
        <button className={`button ${props.inverse && 'button--inverse'}`} 
            type={props.type} 
            onClick={props.onClick}
            disabled={props.disabled}>
                {props.children}
        </button>
    );
};

export default Button;