import React from "react";

//buat nampilin si inputan sama jawaban
const OutputScreenRow = (props) => {
    return (
        <form>
            <input type="text" readOnly value={props.label}></input>
        </form>
    )
}

export default OutputScreenRow;