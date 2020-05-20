import React, {Component} from 'react'
import {View, Text} from 'react-native'
import propTypes from 'prop-types'
import relativeDate from 'relative-date'
import translations from '../../../../../i18n/index'
import styles from './Style'
import {messageYou, messageOthers} from '../../../../../resources/color'
class MessageRowComponent extends Component{
    render(){
        const userName = this.props.isCurrentUser? translations.t('you') : this.props.message.user.email
        const createdAt = relativeDate(new Date(this.props.message.createdAt))
        const alignSelf = this.props.isCurrentUser? 'flex-end' : 'flex-start'
        const margin = this.props.isCurrentUser? {marginLeft: 100} : {marginRight: 100}
        const messageBoxColor = this.props.isCurrentUser? messageYou: messageOthers
        return(
            <View style={[{alignSelf: alignSelf}, margin]}>
                <View style={[styles.messagebox,{backgroundColor: messageBoxColor}]}>
                    <Text style={styles.userBox}>{userName}</Text>
                    <Text style={styles.textMessage}>{this.props.message.text}</Text>
                    <Text style={styles.dateBox}>{createdAt}</Text>
                </View>
            </View>
        )
    }
}
MessageRowComponent.propTypes = {
    isCurrentUser: propTypes.bool.isRequired,
    message: propTypes.shape({
        createdAt: propTypes.number.isRequired,
        text: propTypes.string.isRequired,
        user: propTypes.shape({
            id: propTypes.string.isRequired,
            email: propTypes.string.isRequired
        })
    })
}
export default MessageRowComponent
