import {StyleSheet} from 'react-native'
import {primaryColor} from '../../../../resources/color'
export default StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        minWidth: '100%',
    },
    icon: {
        alignSelf: 'center',
        marginRight: 10,
    },
    textInput: {
        borderColor: primaryColor,
        flex:1,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth:2,
        fontSize: 18
    }
})