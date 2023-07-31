import { StyleSheet } from 'react-native';
import config from 'app/config/config';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
    },
    center:{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center',
    },
    button: {
        backgroundColor: '#0232c2',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    item: {
        backgroundColor: '#0232c2',
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    buttonColor: {
        color: '#0232c2',
    },
    Blue: {
        margin: 3,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
    },
    None: {
        margin: 3,
        padding: 5,
        fontWeight: 'normal',
        borderColor: 'black',
        color: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 5,
        backgroundColor: '#ececec',
    },
    fontBold: {
        fontWeight: 'bold'
    },
    ScrollStyle: {
        height: config.deviceHeight * 0.5,
    },
    inlineImgBase: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        top: 9,
    },
    top30: {
        top: 30,
    },
    inlineImgRight: {
        right: 35,
    },
    inlineImgLeft: {
        left: 35,
    },
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: config.deviceWidth - 100,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        borderColor: '#4d4d4d',
        borderStyle: 'solid',
        borderWidth: 1,
        color: '#ffffff',
    },
    inputWrapper: {
        flex: 1,
    },

    action: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        borderBottomWidth: 0,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    login: {
        padding: 8,
        textAlign: 'center',
    },
    forgot: {
        marginVertical: 20,
    },
    marginH40: {
        marginHorizontal: 40,
    },
    marginT40: {
        marginTop: 40,
    },
    headLabel: {
        marginBottom: 5,
        textAlign: 'center',
        fontSize: 20
    },
    labelStyle: {
        fontSize: 12,
        color: '#0232c2'
    },
    btnArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    btnStyle: {
        color: '#ffffff',
    },
    errorText: {
        paddingTop: 5,
        textAlign: 'center',
    },
    flatList: {
        //  backgroundColor: '#f9c2ff',
        height: config.deviceHeight * 0.88,
        width: config.deviceWidth,
        //height: '50%',
        flexGrow: 0,
    },
    searchButton: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#d1d1d1',
        borderStyle: 'solid',
    },
    footerBtn: {
        //position: 'absolute',
        left: 0,
        width: config.deviceWidth,
        //bottom: -config.deviceHeight * 0.1,
    }
});
