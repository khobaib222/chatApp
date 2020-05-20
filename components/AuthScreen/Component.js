import React,{Component} from 'react'
import AuthTabs from './AuthTabs/index'
import LoadingIndicator from './LoadingIndicator/Component'
import translations from '../../i18n/index'
import propTypes from 'prop-types'
import {View, Alert} from 'react-native'
import styles from './Styles'
class AuthScreenComponent extends Component{
    componentDidUpdate(prevProps){
        if(!prevProps.error && this.props.error){
            Alert.alert(translations.t('error'),this.props.error)
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <AuthTabs/>
                {this.props.loading && <LoadingIndicator/>}
            </View>
        )
    }
} 
AuthScreenComponent.propTypes={
    loading: propTypes.bool.isRequired,
    error: propTypes.string
}
export default AuthScreenComponent