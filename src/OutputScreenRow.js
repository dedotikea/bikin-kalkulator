import React from "react";

//buat nampilin si inputan sama jawaban
const OutputScreenRow = (props) => {
    return (
        <div className="scren-row">
            <input
                type="text"
                readOnly
                value={props.values}></input>
        </div>
    )
}

export default OutputScreenRow;