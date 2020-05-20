import {StyleSheet} from 'react-native'
import {primaryColor, secondaryColor} from '../../../../resources/color'
export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'stretch',
        justifyContent:'center',
        
    },
    emailInput: {
        backgroundColor: secondaryColor,
        height: 54,
        margin: 10,
        borderRadius: 10,
        paddingLeft: 24,
        fontSize: 18,
        borderWidth: 1,
        borderColor: primaryColor, 
        fontFamily: 'sans-serif-light',
    },
    passwordInput: {
        backgroundColor: secondaryColor,
        height:54,
        margin:10,
        flex:1,
        borderRadius: 10,
        paddingLeft: 24,
        paddingRight: 40,
        fontSize: 18,
        borderWidth: 1,
        borderColor: primaryColor,
        fontFamily: 'sans-serif-light'
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'stretch',
        position: 'relative',
    },
    iconStyle: {
      alignSelf: 'center',
      marginRight: 10,
      position: 'absolute',
      right: 10,
     
    },
    button: {
        backgroundColor: primaryColor,
        height: 48,
        margin: 10,
        borderRadius: 10,
        padding: 3,
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonTitle: {
        color: secondaryColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    logo: {
        fontSize: 150,
        fontFamily: 'sans-serif',
        color: primaryColor,
        fontWeight: 'bold',         
    },
    logoContainer: {
        alignItems: 'center',
        flex:1,
        justifyContent:'center',
        
    },
    formContainer: {
        flex: 1
    }
})