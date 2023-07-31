import React,{ Component } from "react";
import {StyleSheet, View} from 'react-native';



 class Row extends Component<any> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
    }


    render(){
        return  (
            <View style={styles.container} > 
              {this.props.children} 
            </View>
         )
      }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
    });
  
  
  export default Row;