import { Text } from "native-base";
import React,{ Component } from "react";

import { useTheme } from '@react-navigation/native';
import { Dimensions, Platform, StyleSheet, TextInput, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { composeInitialProps } from "react-i18next/*";
import {styles} from 'app/utils/color';
  

 class ThemeTextLocal extends Component<any> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
    }
    

    render(){
        return  (
            <Text {...this.props} />
         )
      }

}

 function ImageInput (props: any) {
    const { colors } = useTheme();
  
    return (
        <View style={[styles.action]}>
        <MaterialCommunityIcons
          name={props.imageName}
          color={colors.text}
          size={20}
          style={[styles.inlineImgBase,styles.inlineImgLeft]}
        />

        <TextInput
          placeholder={props.placeholder}
          placeholderTextColor={colors.text}
          autoCapitalize="none"
          secureTextEntry={props.secureTextEntry}
          onChangeText={(val) => props.textInputChange(val)}
          onEndEditing={(e) => props.handleValidUser(e.nativeEvent.text)}
          style={[styles.input, {
            color: colors.text
          }]}
        />

      </View>

    );
  }


//   const DEVICE_WIDTH = Dimensions.get('window').width;


// const styless = StyleSheet.create({

//     inlineImgBase: {
//       position: 'absolute',
//       zIndex: 99,
//       width: 22,
//       height: 22,
//       top: 9,
//     },
  
//     inlineImgLeft: {
//       left: 35,
//     },
  
 
  
  
//     input: {
//       backgroundColor: 'rgba(255, 255, 255, 0.4)',
//       width: DEVICE_WIDTH - 100,
//       height: 40,
//       marginHorizontal: 20,
//       paddingLeft: 45,
//       borderRadius: 20,
//       borderColor:'#4d4d4d',
//       borderStyle:'solid',
//       borderWidth:1,
//       color: '#ffffff',
//     },
//     inputWrapper: {
//       flex: 1,
//     },
  
   
//     action: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//       marginTop: 20,
//       borderBottomWidth: 0,
//       borderBottomColor: '#f2f2f2',
//       paddingBottom: 5,
//     },
   
    
//   });
  
  
  export default ImageInput;