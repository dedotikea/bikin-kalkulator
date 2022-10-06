import React from "react";

//bikin title dengan props value
const KalkulatorTitle = (props) => {
    return (
        <div className="kalkulator-title">
            { props.value }
        </div>
    )
}

export default KalkulatorTitle;