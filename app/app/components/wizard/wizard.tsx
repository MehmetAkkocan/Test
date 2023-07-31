import React, { Component } from "react";

import { TouchableOpacity, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';

import { trim } from 'lodash';
import { QueryItem } from "./queryItem";
import { WizardHeader } from "./wizardheader";
import { ErrorMessage } from "./error-message";
import { styles } from "app/utils/color";
import { Finish } from "./finish";


class Wizard extends Component<any> {

    constructor(props: {} | Readonly<{}>) {
        super(props);

        this.handleReset = this.handleReset.bind(this);
        this.handleReset1 = this.handleReset1.bind(this);


        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);

        this.handleData = this.handleData.bind(this);
        this.handleDataGet = this.handleDataGet.bind(this);

        this.handleReset();
    }


    handleReset(){

        this.state = {
            control: 0,
            answer: {},
            price: [{ 'currentid': -1, 'answer': -1 }],
            last: {},
            fillFields: [],
            sQuestion: null,
            questions: this.props.questions,
            finish:false,
        }

        this.savedData = {

        }

    }



    handleReset1(){

        this.setState({
            control: 0,
            answer: {},
            price: [{ 'currentid': -1, 'answer': -1 }],
            last: {},
            fillFields: [],
            sQuestion: null,
            finish:false,

        });


        this.savedData = {

        }
        console.log("handleReset1");
        

    }

    componentDidMount() {


    }

    componentWillUnmount() {

    }


    // ------------------------------------------------------------------------

    savedData = {

    }


    handleData(event: { target: { id: string | number; value: any; }; }) {
        console.log("event", event);

        //  this.state.answer[  event.target.id] = event.target.value;
        this.savedData[event.target.id] = event.target.value;
    }


    handleDataGet(name: string) {

        return (name in this.savedData) ? this.savedData[name] : "";
    }

    notFondOrStringIsNull(val: any) { return val !== undefined && trim(val).length > 0 }


    validate() {
        let result = false;
        const qu = this.props.questions[this.state.control];
        if (qu.controls !== [] && qu.isRequired) {
            result = qu
                .controls
                .map((element: { text: string | number; }) => { return this.savedData[element.text] })
                .indexOf(false) !== -1;


        }
        else result = true;

        return result;


    }



    handleBaseSeek(e: { target: { value: any; }; }, index: number) {
        let blank = this.props
            .questions[this.state.control]
            .controls
            .filter(x => x.isRequired)
            .filter(x =>
                (("Controller_" + x.text in this.savedData)
                    && (this.savedData["Controller_" + x.text] == "0"
                        || this.savedData["Controller_" + x.text] == ""))
                || !("Controller_" + x.text in this.savedData))

        console.log("blank", blank);



        if (blank.length > 0 && index > 0) {

            this.setState({
                fillFields: blank
            });
            return
        }
        //  this.state.IDs.push( this.props.questions[this.state.control+1].name);
        if (this.state.control < this.props.questions.length - 1) {
            this.savedData[this.props.questions[this.state.control].name] = e.target.value;
            //    console.warn(this.savedData);

        }

        if ((this.state.control + 1 < this.props.questions.length && index > 0) || (this.state.control - 1 > -1 && index < 0)) {
            this.setState({
                //            sQuestion:this.props.questions[this.state.control+1],
                // .filter(element=> element.name===this.state.IDs[this.state.IDs.length-1])[0],
                control: this.state.control + index
            });

        }


        this.setState({
            fillFields: []
        });

        console.log(this.state.control, this.savedData);


    }



    handleNext(e: { target: { value: any; }; }) {
        switch (e.target.value) {
            case "0":
                this.handleFinish();
                break;
        
            default:
                this.handleBaseSeek(e, 1);
                break;
        }
       

    }
    handleFinish() {
        console.log("Method not implemented.");
        // validation 
        // assert valıdation  fillFields: [],
        // move data to model /models/models/cargo.model.ts
        //post data 
        // succesful screen
        this.props.finish(this.savedData);
        this.setState({
            finish:true,

        });

        
    //    this.handleReset();
    }



    handlePrev(e: { target: { value: any; }; }) {

        this.handleBaseSeek(e, -1);

    }



    // ------------------------------------------------------------------------


    render() {
        return (
            <View>
                <View>
                        {/* {
                        
                                this.state.questions
                                // .map(element=>   (Number(this.state.currentid)===Number(element))?"X"+element:element )
                    .map((element)  => 
    
                    <Text key={element.name} 
                    color={(element.name===this.props.questions[this.state.control].name)
                        ? "primary"
                        :"secondary" }>{element.name}</Text>
                    )
                    } */}

                        <WizardHeader
                            questions={this.state.questions}
                            control={this.state.control}
                        />
                   </View>
                    {this.state.finish 
                    ? <View style={styles.container} >
                       { this.props.finishScreen 
                       ?this.props.finishScreen 
                       : <Finish onClickReset={this.handleReset1}/>}
                    </View>
                    :<View >
                        {this.state.control > -1
                            ? <QueryItem
                                t={this.props.t}
                                blank={this.state.fillFields}
                                question={this.state.questions[this.state.control]}
                                handleNext={this.handleNext}
                                handlePrev={this.handlePrev}

                                handleData={this.handleData}
                                handleDataGet={this.handleDataGet}
                                savedData={this.savedData}
                                getLookupHandler={this.props.getLookupHandler}
                                finish={this.state.control==this.state.questions.length-1}

                            />
                            : null
                        }


                    </View>}
            </View>
        )
    }
}

export default Wizard;