import React from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import { styles } from 'app/utils/color';
import { useTranslation } from 'react-i18next';
import ImageInput from 'app/components/image-text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import SignUpScreen from './screen';

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

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };
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
    const handlePasswordChange = (val: any) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false,
            });
        }
    };
    const { colors } = useTheme();
    const goBack = () => NavigationService.goBack();
    const signUp = () => NavigationService.signUp();
    return (
        <SignUpScreen 
        data={data} 
        handlePasswordChange={handlePasswordChange}
        handleValidUser={handleValidUser}
        signUp={signUp}
         textInputChange={textInputChange}
         updateSecureTextEntry={updateSecureTextEntry}
         />

    );
};

export default Home;