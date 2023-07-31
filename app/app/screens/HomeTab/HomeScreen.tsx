import NavigationService from "app/navigation/NavigationService";
import React, { useEffect,useRef,useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { LoginState } from "../Login/loginx";
import { useTheme } from '@react-navigation/native';
import ThemeText from "app/components/theme-text";
import { styles } from 'app/utils/color';
import MapView ,{PROVIDER_DEFAULT,Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import images from 'app/config/images';
import besiktas from 'app/rawData/besiktas.json';


export function HomeScreen(props:any) {

  const map = useRef<MapView>(null);
  
    useEffect(() => {
        // tarayıcının başlık bölümünü değiştirmemizi sağlar
        console.log(props);
        //getCargos(id_token,successHandler,errorHandler)
      },[]);
    
    
      const theme=useTheme();
    const onTab = () => NavigationService.navigate('TabScreen');
  
    const id_token = useSelector(
      (state: LoginState) => state.loginReducer.id_token,
    );
   const   [region ,setRegion] =useState({
    latitude: 41.0391683,
    longitude: 28.9982707,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })
    
    const getInitialState=()=> {
      return {
        region: {
          latitude: 40.9057974,
          longitude: 29.2649317,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
          
        },
      };
    }
    
    const onRegionChange=(region:any)=> {
      setRegion( region );
      console.log(region);
      
    }
    
    const zoomDelta = 0.005;  const onZoom = (zoomSign: number) => {
      const zoomedRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta - zoomDelta * zoomSign,
        longitudeDelta: region.longitudeDelta - zoomDelta * zoomSign,
      };
      setRegion(zoomedRegion);
      map.current!.animateToRegion(zoomedRegion);
    };  const onZoomIn = () => onZoom(1);
    const onZoomOut = () => onZoom(-1);


    const polygon = besiktas.geometries[0].coordinates[0][0].map((c:any) => {
      return {longitude: c[0], latitude: c[1]};
    });


    return (
        <View 
            style={styles.container}>
        <ThemeText style={{color:theme.colors.text}}>Home!</ThemeText>
        {/* <ThemeText style={{color:theme.colors.text}} >{id_token}</ThemeText> */}
        <MapView  
         ref={map}
      region={region}
      onRegionChange={onRegionChange}
      zoomEnabled={true}
     // zoomControlEnabled={true}
      style={stylesa.map}

      
    >
{polygon.map((c,i)=> (
        <Marker coordinate={c}  key={i}
        image={images.icons.flag} />
      ))}


    </MapView>
     <View style={stylesa.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onZoomIn}>
          <Text style={stylesa.text}>+</Text>
        </TouchableOpacity>
        <View style={stylesa.spacer} />
        <TouchableOpacity style={styles.button} onPress={onZoomOut}>
          <Text style={stylesa.text}>-</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }



  const stylesa = StyleSheet.create({
    map: {
     // flex: 1,
      width:300,
      height:400,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 30,
      end: 20,
      borderRadius: 5,
      backgroundColor: '#fff',
      padding: 12,
    },
    button: {},
    text: {
      textAlign: 'center',
    },
    spacer: {
      marginVertical: 7,
    },
  });