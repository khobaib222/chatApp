import React, {Component} from 'react'
import propTypes from 'prop-types'
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import translations from '../../../../i18n/index'
import styles from './Styles'
import {primaryColor} from '../../../../resources/color'
class BasicFormComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',
            passwordVisibility: 'eye-off',
            secureEntry: true,
            confPasswordColor: 'gray'
        }
        this.handleEmailChange = (email) => {
            this.setState({email: email})
        }
        this.handlePasswordChange = (pass_word) => {
            var change = {password: pass_word}
            if(this.state.confirm_password==pass_word && pass_word!='' && pass_word!=null)
                change = {...change, confPasswordColor: 'green'}
            else change={...change,confPasswordColor:'gray'}
            this.setState(change)
            
        }
        this.handleConfirmPasswordChange = (confirmPassword) => {
            var change = {confirm_password: confirmPassword}
            if(confirmPassword==this.state.password && confirmPassword!='' && confirmPassword!=null)
                change = {...change, confPasswordColor: 'green'}
            else change={...change,confPasswordColor:'gray'}
            this.setState(change)
        }
        this.handlePasswordVisibility = () => {
            if(this.state.secureEntry)
                this.setState({passwordVisibility: 'eye',secureEntry: false})
            else this.setState({passwordVisibility: 'eye-off', secureEntry: true})
        }
        this.handleButtonPress = () => {
            if(this.state.confirm_password!=this.state.password && this.props.buttonTitle==translations.t('signup'))
                Alert.alert(translations.t('error'),"Comfirm Password and Password do not match!")
            else
                this.props.onButtonPress(this.state.email,this.state.password)
        }
    }
    render(){
        
        var confPasscol = (
            <View style={styles.passwordInputContainer}>
            <TextInput
            style={styles.passwordInput}
            placeholder={translations.t('confirm_password')}
            autoCapitalize='none'
            value={this.state.confirm_password}
            underlineColorAndroid={'transparent'}
            returnKeyType='done'
            onChangeText={this.handleConfirmPasswordChange}
            secureTextEntry={true}/>
            <Icon style={styles.iconStyle} color={this.state.confPasswordColor} name='check-decagram' size={24} onPress={this.handlePasswordVisibility}/>
        </View>
        )
        if(this.props.buttonTitle==translations.t('login'))
            confPasscol = null
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logo}>C</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                    style={styles.emailInput}
                    placeholder={translations.t('email')}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    value={this.state.email}
                    underlineColorAndroid={'transparent'}
                    returnKeyType = 'next'
                    onChangeText={this.handleEmailChange}/>
                    <View style={styles.passwordInputContainer}>
                        <TextInput
                        style={styles.passwordInput}
                        placeholder={translations.t('password')}
                        autoCapitalize='none'
                        value={this.state.password}
                        underlineColorAndroid={'transparent'}
                        returnKeyType='done'
                        onChangeText={this.handlePasswordChange}
                        secureTextEntry={this.state.secureEntry}/>
                        <Icon style={styles.iconStyle}  color={primaryColor} name={this.state.passwordVisibility} size={24} onPress={this.handlePasswordVisibility}/>
                    </View>
                    {confPasscol}
                    <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleButtonPress}>
                        <Text style={styles.buttonTitle}>{this.props.buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
BasicFormComponent.propTypes = {
    buttonTitle: propTypes.string.isRequired,
    onButtonPress: propTypes.func.isRequired
} 
export default BasicFormComponent 