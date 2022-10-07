//import packages sama file yang dibutuhin
import React from "react";
import KalkulatorTitle from './KalkulatorTitle';
import OutputScreen from './OutputScreen';
import Button from './Button';


//program kalkulator
//bikin class component kalkulator
function Kalkulator() {

    return (
        <div>
            <KalkulatorTitle></KalkulatorTitle>
            <OutputScreen></OutputScreen>
            <div className="button-row">
            <Button label={"test"}></Button>
            <Button label={"test2"}></Button>
            <Button label={"test3"}></Button>
            <Button label={"test4"}></Button>
            </div>
        </div>
    )
}
export default Kalkulator;