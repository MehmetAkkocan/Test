import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import { styles } from 'app/utils/color';
import { useTranslation } from 'react-i18next';
import ImageInput from 'app/components/image-text';
import config from 'app/config/config';


const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
});
  const textInputChange = (val: any) => {
    if (val.trim().length >= 4) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            isValidUser: true,
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            isValidUser: false,
        });
    }
};
const handleValidUser = (val: any) => {
  if (val.trim().length >= 4) {
      setData({
          ...data,
          isValidUser: true,
      });
  } else {
      setData({
          ...data,
          isValidUser: false,
      });
  }
};
  const goBack = () => NavigationService.goBack();
  const send = () => NavigationService.send();
  return (
    <View style={[styles.container]}>
      <KeyboardAvoidingView behavior='position'>
        
          <ImageInput
            imageName="email"
            placeholder={t('Your E-mail')}
            secureTextEntry={false}
            textInputChange={textInputChange}            
            handleValidUser={handleValidUser}
          />
          <Button style={[styles.button, { marginTop: 20 }]} labelStyle={styles.btnStyle} icon="send" mode="outlined" onPress={send}>
            {t("Send")}
          </Button>
           </KeyboardAvoidingView>
        </View>
     
   
  );
};

export default Home;
