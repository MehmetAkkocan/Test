import React, {useState}  from 'react';


import { View, StyleSheet } from 'react-native';

import ThemeText from '../theme-text';
import { useTranslation } from 'react-i18next';
import { styles } from 'app/utils/color';

/* eslint-disable no-console */

    export   const ErrorMessage = (props: {
        fields: string[]; 
    }) => {
        
      const { t, i18n } = useTranslation();

    
    return (
            <View> 
              { props.fields
                                // .map(element=>   (Number(this.state.currentid)===Number(element))?"X"+element:element )
                    .map((element)  => 
    
                    <ThemeText style={styles.errorText} key={element.text } 
                    
                    
                    >{t("Lütfen alanı doldurun! ")+" '"+t(element.text)+"'"}</ThemeText>
                    )}
        </View>

                    
    );
    
}
