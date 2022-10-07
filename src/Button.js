import React from "react";

//bikin button dengan nama props label, diassign data dari value
const Button = (props) => {
    return (
        <input
            type="button"
            value={props.label}>
        </input>
    )
}

export default Button;