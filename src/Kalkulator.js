//import packages sama file yang dibutuhin
import React from "react";
import KalkulatorTitle from './KalkulatorTitle';
import OutputScreen from './OutputScreen';
import Button from './Button';


//program kalkulator
//bikin class component kalkulator
class Kalkulator extends React.Component {
    constructor() {
        super()

        //ngeset untuk hasil default (diawal/inisialisasis)
        this.state = {
            question: '',
            answer: ''
        }

        //ngebind handleClick method
        //(ngeset "this" ke si this komponen) soalnya 'this' refer ke si sumber ngeklik
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const value = event.target.value;
        switch (value) {
            case '=': {
                if (this.state.question !== '') {
                    var ans = ''
                    try {
                        ans = eval(this.state.question)
                    } catch (error) {
                        this.setState({ answer: "Pertanyaan salah" })
                    }
                    if (ans === undefined) {
                        this.setState({ answer: "Pertanyaan salah" })
                    } else {
                        this.setState({ answer: ans, question: '' })
                    }
                }
                break;
            }
            case 'Clear': {
                this.setState({ answer: '', question: '' })
                break;
            }
            case 'Delete': {
                var str = this.state.question
                str = str.substring(0, str.length - 1)
                this.setState({ question: str })
                break;
            }
            default: {
                this.setState({question: this.state.question += value})
                break;
            }
        }
    }

    render() {
        return (

            <div className="frame">
                <KalkulatorTitle value="Latihan bikin Kalkulator" />
                <div className="main">
                    <OutputScreen />
                    <div className="button-row">
                        <Button label={"Clear"} handleClick={this.handleClick}></Button>
                        <Button label={"Delete"} handleClick={this.handleClick}></Button>
                        <Button label={"."} handleClick={this.handleClick}></Button>
                        <Button label={"/"} handleClick={this.handleClick}></Button>
                    </div>
                    <div className="button-row">
                        <Button label={"7"} handleClick={this.handleClick}></Button>
                        <Button label={"8"} handleClick={this.handleClick}></Button>
                        <Button label={"9"} handleClick={this.handleClick}></Button>
                        <Button label={"*"} handleClick={this.handleClick}></Button>
                    </div>
                    <div className="button-row">
                        <Button label={"4"} handleClick={this.handleClick}></Button>
                        <Button label={"5"} handleClick={this.handleClick}></Button>
                        <Button label={"6"} handleClick={this.handleClick}></Button>
                        <Button label={"-"} handleClick={this.handleClick}></Button>
                    </div>
                    <div className="button-row">
                        <Button label={"1"} handleClick={this.handleClick}></Button>
                        <Button label={"2"} handleClick={this.handleClick}></Button>
                        <Button label={"3"} handleClick={this.handleClick}></Button>
                        <Button label={"+"} handleClick={this.handleClick}></Button>
                    </div>
                    <div className="button-row">
                        <Button label={"0"} handleClick={this.handleClick}></Button>
                        <Button label={"="} handleClick={this.handleClick}></Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Kalkulator;