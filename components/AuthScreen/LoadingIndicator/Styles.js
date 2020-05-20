import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    loadingIndicator:{
        flex: 1,
        alignItems: 'center'
    },
    loadingContainer: {
        display:'flex',
        position: 'absolute',
        top: 0,
        bottom:0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        opacity: 0.5,
        justifyContent: 'center'
    }
})