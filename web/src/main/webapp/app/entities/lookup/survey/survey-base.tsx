import React, { Component } from 'react';

import './App.css';
import { Row, Col, Badge } from 'reactstrap';
import { QueryItem } from "./QueryItem"
import Finish from "./Finish";
import { Translate } from 'react-jhipster';
import { trim } from 'lodash';


export default class SurveyBase extends Component<any> {

    savedData = {

    }

    state = {
        control: 0,
        answer: {},
        price: [{ 'currentid': -1, 'answer': -1 }],
        last: {},
        sQuestion: null,
        questions: this.props.questions
    }

    constructor(props) {

        super(props);




        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

        this.handleData = this.handleData.bind(this);
        this.handleDataGet = this.handleDataGet.bind(this);




    }

    componentDidMount() {
        // this.handleNext("");  


    }

    handleData(event) {

        //  this.state.answer[  event.target.id] = event.target.value;
        this.savedData[event.target.id] = event.target.value;
    }


    handleDataGet(name) {

        return (name in this.savedData) ? this.savedData[name] : "";
    }

    notFondOrStringIsNull(val) { return val !== undefined && trim(val).length > 0 }


    validate() {
        let result = false;
        const qu = this.props.questions[this.state.control];
        if (qu.controls !== [] && qu.isRequired) {
            result = qu
                .controls
                .map(element => { return this.savedData[element.text] })
                .indexOf(false) !== -1;


        }
        else result = true;

        return result;


    }



    handleBaseSeek(e, index) {


        //  this.state.IDs.push( this.props.questions[this.state.control+1].name);
        if (this.state.control < this.props.questions.length - 1) {
            this.savedData[this.props.questions[this.state.control].name] = e.target.value;
            console.warn(this.savedData);

        }

        if ((this.state.control + 1 < this.props.questions.length && index > 0) || (this.state.control - 1 > -1 && index < 0)) {
            this.setState({
                //            sQuestion:this.props.questions[this.state.control+1],
                // .filter(element=> element.name===this.state.IDs[this.state.IDs.length-1])[0],
                control: this.state.control + index
            });

        }

    }



    handleNext(e) {

        this.handleBaseSeek(e, 1);

    }



    handlePrev(e) {

        this.handleBaseSeek(e, -1);

    }


    render() {

        return (
                <div style={{ textAlign: "center", verticalAlign: "middle" }}>

                    <div className="wizard-header" >

                        {

                            this.state.questions
                                // .map(element=>   (Number(this.state.currentid)===Number(element))?"X"+element:element )
                                .map((element) =>

                                    <Badge key={element.name} className="wizard-header-badge" color={(element.name === this.props.questions[this.state.control].name)
                                        ? "primary"
                                        : "secondary"}><Translate contentKey={"TestApp.lookup.wizard." + element.name}>{element.name}</Translate></Badge>
                                )
                        }
                    </div>
                    <div style={{ textAlign: "center", verticalAlign: "middle" }}>
                        {this.state.control > -1
                            ? <QueryItem
                                question={this.props.questions[this.state.control]}
                                handleNext={this.handleNext}
                                handlePrev={this.handlePrev}

                                handleData={this.handleData}
                                handleDataGet={this.handleDataGet}
                                savedData={this.savedData}

                            />
                            : null
                        }
                        <div>
                        </div>

                    </div>

                </div>
        )

    }
}

