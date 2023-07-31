import { Text } from "native-base";
import React,{ Component } from "react";

import { useTheme } from '@react-navigation/native';

  

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

 function ThemeText (props: any) {
    const theme = useTheme();
  
    return <ThemeTextLocal {...props} theme={theme} style={[{color:theme.colors.text},props.style]}  />;
  }
  
  export default ThemeText;