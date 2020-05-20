import React, {Component} from 'react'
import {View,TextInput, Alert, ActivityIndicator} from 'react-native'
import styles from './Styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import translations from '../../../../i18n/index'
import {primaryColor} from '../../../../resources/color'
class MessageFormComponent extends Component {
    constructor(){
        super()
        this.buttonColor = 'gray'
        this.handleTextChange = (text) => {
            this.props.updateMessage(text)
        }
        this.sendMessage = () => {
            if(this.buttonColor==primaryColor)
                this.props.sendMessage(this.props.message)
        }
    }
    componentDidUpdate(){
        if(this.props.sendingError){
            Alert.alert(translations.t('error'),this.props.sendingError)
        }
    }
    render(){
        if(this.props.message.trim().length==0) this.buttonColor = 'gray'
        else this.buttonColor =  primaryColor
        let sendIcon = null
        if(!this.props.sending)
            sendIcon = (
                <Icon size={42} onPress={this.sendMessage} name='send' color={this.buttonColor}/>
            )
        else sendIcon = (
            <ActivityIndicator size={40} color={primaryColor}/>
        )
        return (
            <View style={styles.container}>
                <TextInput
                placeholder={translations.t('type')}
                style={styles.textInput} 
                value={this.props.message}
                onChangeText={this.handleTextChange}
                multiline/>
                <View style={styles.icon}>
                    {sendIcon}
                </View>
            </View>
        )
    }
}

export default MessageFormComponent