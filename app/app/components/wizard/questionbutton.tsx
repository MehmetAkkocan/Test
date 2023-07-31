import React, { useState } from 'react';


import { ButonDisabled } from "./butondisabled";
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Col from '../col';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from 'app/utils/color';
import { themeReducer } from 'app/store/reducers/themeReducer';
import { useTheme } from '@react-navigation/native';

/* eslint-disable no-console */

export const QuestionButton = (props: {
    handleClickPrev: (arg0: any) => void;
    handleClickNext: (arg0: any) => void;
    handleData: (arg0: any) => void;
    buttons: any[];
    t: (arg0: string) => any;
    finish: boolean;

}) => {

    const selectedColor = 'primary';
    const [cssColor, setCssColor] = useState(selectedColor);


    const handleClickNext = (e: any) => {
        switch (e.target.value) {
            case "-1":
                props.handleClickPrev(e)
                break;
            case "1":
                props.handleClickNext(e)
                break;
            case "0": //finish
                props.handleClickNext(e)
                break;

            default:
                break;
        }

        console.log("Button value", e);
        // if (e.target.value === "-1")
        //     props.handleClickPrev(e)
        // if (e.target.value === "1")
        //     props.handleClickNext(e)
        setCssColor(selectedColor);
    }

    const theme = useTheme();

    return (
        <View>
            <Col>
                {props.buttons.map(button =>
                    props.finish && button.val == 1 ?
                        <ButonDisabled key={"finish"}
                            css={cssColor}
                            disableCss="selectButton selectButtonDisable"
                            onClick={handleClickNext}
                            disabled={false}
                            value={"0"}
                        >
                            <MaterialCommunityIcons name={"check-bold"} size={30} style={styles.marginH40} color={theme.colors.text} />
                            <Text
                                style={[styles.buttonColor, styles.marginH40]}>
                                {props.t("Finish")}
                            </Text>
                        </ButonDisabled>
                        :
                        <ButonDisabled key={button.text}
                            css={[cssColor]}
                            disableCss="selectButton selectButtonDisable"
                            onClick={handleClickNext}
                            disabled={false}
                            value={button.val}
                        >
                            {
                                button.icon
                                    ? <MaterialCommunityIcons name={button.icon} size={30} style={styles.marginH40} color={theme.colors.text} />
                                    : null
                            }
                            <Text
                                style={[styles.marginH40, styles.buttonColor]}>
                                {props.t(button.text)}
                            </Text>
                        </ButonDisabled>
                )}
                {/* 
                    {props.finish? 
                    

                <ButonDisabled key={"finish"}
                        css={cssColor}
                        disableCss="selectButton selectButtonDisable"
                        onClick={handleClickNext}
                        disabled={false}
                        value={"0"}
                    >
                            <MaterialCommunityIcons name={"check-circle"} size={30} style={styless.buttonBackNext} />
                        

                        <Text 
                        style={[styles.buttonColor,styless.buttonBackNext]}>
                        {props.t("Finish")}
                        </Text>
                    </ButonDisabled>
                    :null
                } */}


            </Col>
        </View>


    );

}

// const styless = StyleSheet.create({



//     buttonBackNext: {
//         marginHorizontal: 50,

//     }
// });
