import {StyleSheet} from 'react-native'
import {tertiaryColor,secondaryColor,themeDark} from '../../../resources/color'
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        height: '100%'
    },
    logoutButton: {
        backgroundColor: themeDark,
        alignItems:'center',
        height: 64,
        justifyContent: 'center',
        margin: 8,
        borderRadius: 10
        
    },
    buttonText: {
        fontSize: 28,
        color: secondaryColor,
        fontWeight: 'bold',
        
    }
})