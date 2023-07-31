import React, { useState, useEffect } from 'react';



import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import Col from '../../col';
import InputList from '../input-list';


import InputText from '../myInput';
import ThemeText from '../../theme-text';
import { styles } from 'app/utils/color';


/* eslint-disable no-console */

/* eslint no-eval: 0 */

export const QuestionControlScreen = (props:
    {
        handleData: (arg0: any) => void;
        handleClick: (arg0: any) => void;
        handleChange: (arg0: any) => void;
        getLookupHandler: (arg0: any, succes: any, error: any) => void;
        savedData: {};
        dataList: {};
        buttons: any[];
        handleDataGet: (arg0: string) => any;
        blank: {
            text: React.ReactNode;

            validate: boolean;
        }[];
        t: (arg0: string) => any;
    }) => {


    const handleChangemaster = (event: { target: { value: any; }; }) => {

        //console.warn(event.target.value);
        props.handleData(event);
        // inputValue[  event.target.id] = event.target.value;
        // console.warn(inputValue);


    }


    return (


        <View>
            {props.buttons.map(control =>

                <Col key={control.text + "Col"}  >
                    <ThemeText
                        style={{ textAlign: 'center', fontSize: 20 }}>
                        {props.t(control.text)}
                    </ThemeText>


                    {"parent" in control ?



                        <InputList getEntitiesParent={() => { }}

                            id={control.parent.startsWith("value:")
                                ? props.handleDataGet(control.parentvalue)
                                : `${control.parent}`}
                            val={props.handleDataGet(`Controller_${control.text}`)}
                            data={props.dataList}
                            parent={control.parent.startsWith("value:")
                                ? props.handleDataGet(control.parentvalue)
                                : `${control.parent}`}

                            placeholder={props.t(control.placeholder)}//
                            name={`Controller_${control.text}`}
                            savedData={props.savedData}
                            onChange={control.onChange
                                ? control.onChange
                                : null}
                            validate=
                            {props.blank ?
                                props
                                    .blank
                                    .filter(x => x.text == control.text).length == 0
                                : true}

                        />

                        : <InputText
                            placeholder={props.t(control.placeholder)}
                            text={control.text}
                            value={props.handleDataGet(`Controller_${control.text}`)}
                            onChangeText={props.handleChange}

                            validate=
                            {props.blank ?
                                props
                                    .blank
                                    .filter(x => x.text == control.text).length == 0
                                : true}
                        />




                    }

                </Col>


            )}
        </View>


    );

}


