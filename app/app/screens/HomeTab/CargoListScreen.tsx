import MyList from "app/components/MyList";
import { getCargos } from "app/services/apiCargos";
import React, { useEffect, useState } from "react";
import { DeviceEventEmitter, Image, NativeAppEventEmitter, Platform } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../Login/loginx";
import { styles } from 'app/utils/color';

import { Button } from 'react-native-paper';
import * as apiAction from 'app/store/actions/apiAction';
import ThemeText from "app/components/theme-text";
import { CargoListSearchScreen } from "./CargoListSearchScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from '@react-navigation/native';
import Col from "app/components/col";
import { useTranslation } from 'react-i18next';



export function CargoListScreen(props: any) {
  const id_token = useSelector(
    (state: LoginState) => state.loginReducer.id_token,
  );

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const ongetCargoList = () => dispatch(apiAction.getCargoList(successHandler, errorHandler));

  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const [search, setSearch] = useState(false)

  const theme = useTheme();


  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    ongetCargoList();
    console.log(props.navigation)
    //getCargos(id_token,successHandler,errorHandler)
  }, []);


  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', e => {
      // Prevent default behavior
      console.log("E", e)
      //e.preventDefault();

      // Do something manually
      // ...
    });

    return unsubscribe;
  }, [props.navigation]);


  const successHandler = (d: any) => {
    console.log(d);

    let ldata = Object.values(d.data);
    console.log(ldata);
    setData(ldata);


    const emitter = Platform.OS == 'ios' ? NativeAppEventEmitter : DeviceEventEmitter;

    emitter.emit("myProgressEvent", ldata.length);



    console.log("****************************", props.navigation);
    //props.setBadge(ldata.length);

  }
  const errorHandler = (e: any) => {
    console.log(e);
  }

  const onClickCargo = () => { getCargos(id_token, successHandler, errorHandler) }

  const onClickSeach = (val: any) => { setSearch(!search) }


  const finish = (val: any) => {



    let model = {
      sourcecity: { id: val['Controller_il'] },
      sourcedistinct: { id: val['Controller_ilce'] },
      vehicletype: { id: val['Controller_arac tipi'] },
      vehiclecasetype: { id: val['Controller_kasa tipi'] },
      cargotype: { id: val['Controller_yuk tipi'] },
      destinationcity: { id: val['Controller_indirme il'] },
      destinationdistinct: { id: val['Controller_indirme ilce'] },
    };

    console.log(model);

    console.log("arama için buraya kod yazılacak   model  oluşturlacak ");
    setSearch(false);


  }



  function ItemSmall({ item, onSelect, t }) {
    return (
      <View
        style={{
          // backgroundColor: '#d1d1d1',
          height: "auto",
          //width: "100%",
          marginTop: 20,
          padding: 3

        }}>
        <TouchableOpacity onPress={() => onSelect(item)}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ padding: 10, marginRight: 20, justifyContent: 'center' }}>
              <Image source={require("app/assets/gzaticon.png")} style={{ width: 60, height: 40 }} />
              <ThemeText style={{ textAlign: 'center' }}>
                {t("View")}
              </ThemeText></View>
            <View>
              <ThemeText >
                {item.item.sourceaddress}
              </ThemeText>
              <ThemeText >
                {item.item.cargodescription}
              </ThemeText>

              <ThemeText >
                {item.item.destinationaddress}
              </ThemeText></View>
          </View>
        </TouchableOpacity>

        <View style={{ width: '100%', height: 2, backgroundColor: '#d1d1d1', marginTop: 20 }}></View>
      </View>

    );
  }



  return (
    <View style={styles.container}>
      <View style={{display:'flex',flexDirection: 'row',justifyContent:'space-evenly',width:'100%',backgroundColor:'#ececec'}}>

      <TouchableOpacity style={{width:'50%'}} onPress={() => onClickSeach(1)} >
        
        <View style={[styles.searchButton,styles.center,{backgroundColor:theme.colors.background}]}>
          <MaterialCommunityIcons name={'toy-brick-search-outline'} size={30} color={theme.colors.text} />
          <ThemeText>{t("Search Cargo")}</ThemeText>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'50%'}} onPress={() => (1)} >
        <View style={[styles.searchButton,styles.center,{backgroundColor:theme.colors.background}]}>
          <MaterialCommunityIcons name={'map-search-outline'} size={30} color={theme.colors.text} />
          <ThemeText>{t("Search On Map")}</ThemeText>
        </View>
      </TouchableOpacity>
      </View>


      {!search

        ? <View >
          <MyList
            stylex={styles.flatList}
            data={data}
            onSelect={itemm => { }}
            item={itemm => (
              <ItemSmall item={itemm} onSelect={itemm => { }} t={t} />

            )}
          />

        </View>
        : <CargoListSearchScreen finish={finish} />}


    </View>
  );
}
