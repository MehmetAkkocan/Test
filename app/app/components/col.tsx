import React,{ Component } from "react";
import {StyleSheet,View} from 'react-native';



 class Col extends Component<any> {
    // static propTypes: { styleCol: { alignItems: "center"; }; };


    constructor(props: {} | Readonly<{}>) {
        super(props);
    }


    render(){
        return  (
            <View style={[styles.container,this.props.styleCol?this.props.styleCol:styles.center]} > 
              {this.props.children} 
            </View>
         )
      }

}

const styles = StyleSheet.create({
    container: {
        //flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignItems: 'center',
        margin:15,

    },

    center: {
         alignItems: 'center',
         justifyContent:'center',


    }
    });

    
  

//     Col.propTypes = {
//         styleCol: styles.center,

// };
  
  export default Col;