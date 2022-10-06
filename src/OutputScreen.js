import React from "react";
import OutputScreenRow from "./OutputScreenRow";

//bikin 2 screen output buat jawaban sama pertanyaan
const OutputScreen = (props) => {
    return (
        <div className="screen">
            <OutputScreenRow value={props.question}></OutputScreenRow>
            <OutputScreenRow value={props.answer}></OutputScreenRow>
        </div>
    )
}

export default OutputScreen;