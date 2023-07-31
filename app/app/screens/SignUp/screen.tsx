import React from 'react';
import {
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from 'app/utils/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTranslation } from 'react-i18next';
import ImageInput from 'app/components/image-text';
import { useTheme } from '@react-navigation/native';

const SignUpScreen = (props:
    {
        id: any;
        data: any;
        textInputChange: (arg0: any) => any;
        handleValidUser: (arg0: any) => any;
        updateSecureTextEntry: (arg0: any) => any;
        handlePasswordChange: (arg0: any) => any;
        goBack: () => void;
        signUp: () => void;

    }) => {

    const { t, i18n } = useTranslation();
    const { colors } = useTheme();

    return (

        <View style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior='position'>

                    <ImageInput
                        imageName="account"
                        placeholder={t('Your Username')}
                        secureTextEntry={false}
                        textInputChange={props.textInputChange}
                        handleValidUser={props.handleValidUser}
                    />
                    <ImageInput
                        imageName="email"
                        placeholder={t('Your E-mail')}
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
                            handleValidUser={() => { }}
                        />
                    </View>
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
                            placeholder={t('Confirm Password')}
                            secureTextEntry={props.data.secureTextEntry ? true : false}
                            textInputChange={props.handlePasswordChange}
                            handleValidUser={() => { }}
                        />
                    </View>
                    </KeyboardAvoidingView>
                    <Button style={[styles.button,
                    { marginTop: 20 }]}
                        labelStyle={styles.btnStyle}
                        icon="account-plus"
                        mode="outlined"
                        onPress={props.signUp}>
                        {t("Sign Up")}
                    </Button>
                
            </ScrollView>
        </View>
    );
};

export default SignUpScreen;
