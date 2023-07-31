import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Linking } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export  function CustomDrawerContent(props:any) {


    
    return (
      <DrawerContentScrollView {...props}>
           <MaterialCommunityIcons 
                    name="account" 
                    size={20} 
                    />
  
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('https://mywebsite.com/help')}
        />

        <DrawerItem
          label="Logout"
          onPress={props.onLogout}
        />


      </DrawerContentScrollView>
    );
  }
  