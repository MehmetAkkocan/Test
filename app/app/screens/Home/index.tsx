import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import { styles } from 'app/utils/color';
import NavigationService from 'app/navigation/NavigationService';
const Home: React.FC = (props) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  const onTab = () => NavigationService.navigate('TabScreen');


  useEffect(() => {
    // tarayıcının başlık bölümünü değiştirmemizi sağlar
    console.log(props);
    //getCargos(id_token,successHandler,errorHandler)
  },[]);


  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>

      <Button
    mode="text"
    onPress={onTab}>
    Tab
  </Button>


    </View>
  );
};

export default Home;
