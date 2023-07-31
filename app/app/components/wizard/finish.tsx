import React, { useState } from 'react';


import { View, StyleSheet, Text, ScrollView } from 'react-native';

import ThemeText from '../theme-text';
import { useTranslation } from 'react-i18next';
import { styles } from 'app/utils/color';
import { ButonDisabled } from './butondisabled';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { query1 } from 'app/screens/HomeTab/resources/query1';



/* eslint-disable no-console */

export const Finish = (props: {
    onClickReset: () => void;
}) => {

    const { t, i18n } = useTranslation();

    const selectedColor = 'primary';
    const [cssColor, setCssColor] = useState(selectedColor);

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={{ paddingVertical: 15,fontSize:20 }}>{t("Load Saved")} </Text>

                <ButonDisabled key={"finish"}
                    css={cssColor}
                    disableCss="selectButton selectButtonDisable"
                    onClick={props.onClickReset}
                    disabled={false}
                    value={"0"}
                >
                    <View style={styles.center}>
                        <MaterialCommunityIcons name={"plus-circle-outline"} size={30} />
                        <Text
                            style={styles.buttonColor}>
                            {t("Add Load")}
                        </Text>
                    </View>
                </ButonDisabled>

            </View>
        </ScrollView>
    );

}
// const styless = StyleSheet.create({



//     buttonBackNext:{
//         marginHorizontal:50,

//     }
// });
