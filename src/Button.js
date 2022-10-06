import React from "react";

//bikin button dengan nama props label, diassign data dari value
const Button = (props) => {
    return (
        <input
            type="button"
            value={props.label}
            onClick={props.handleClick}>
        </input>
    )
}

export default Button;