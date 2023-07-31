import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Text, Button } from 'react-native-paper';
import { styles } from 'app/utils/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import ImageInput from 'app/components/image-text';
import images from 'app/config/images';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const LoginScreen=  (props: 
        { 
            id: any; 
            data:any;
            textInputChange: (arg0: any) => any;
            handleValidUser: (arg0: any) => any;
            updateSecureTextEntry: (arg0: any) => any;
            handlePasswordChange: (arg0: any) => any;
            onForgot: () =>void;
            onLogin: () =>void;
            signUp: () =>void;
           
        }) => {

  const { t, i18n } = useTranslation();
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView style={styles.container}>  
      <ScrollView>      
        <View style={styles.container}>
          <Image
            source={images.icons.logo}
            style={{ width: 103, height: 113, paddingVertical: 30 }}
          />
          <Image
            source={images.icons.logo2}
            style={{ width: 280, height: 80, marginVertical: 10 }}
          />
        </View>
        
        <Text style={styles.login}>Login Status : {props.id}</Text>
        
        <ImageInput
          imageName="account"
          placeholder={t('Your Username')}
          secureTextEntry={false}
          textInputChange={props.textInputChange}
          handleValidUser={props.handleValidUser}
        />

        <View>
          <TouchableOpacity
            style={[styles.inlineImgBase, styles.inlineImgRight, styles.top30]}
            onPress={props.updateSecureTextEntry}>
            <MaterialCommunityIcons
              name="eye-outline"
              color={colors.text}
              size={20}
            />
          </TouchableOpacity>

          <ImageInput
            imageName="lock-outline"
            placeholder={t('Your Password')}
            secureTextEntry={props.data.secureTextEntry ? true : false}
            textInputChange={props.handlePasswordChange}
            handleValidUser={() => {console.log("End");
            props.onLogin();
            }}
          />
        </View>

        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={props.onForgot}>
          {t('Forgot Password')}
        </Button>
        
        <View style={styles.btnArea}>
          <Button
            style={styles.button}
            labelStyle={styles.btnStyle}
            icon="login"
            mode="outlined"
            onPress={props.onLogin}>
            {t('Login')}
          </Button>
          <Button
            style={styles.button}
            labelStyle={styles.btnStyle}
            icon="login-variant"
            mode="outlined"
            onPress={props.signUp}>
            {t('SignUp')}
          </Button>
        </View>
       
      </ScrollView>
        </KeyboardAvoidingView>
  );
};

export default LoginScreen;
