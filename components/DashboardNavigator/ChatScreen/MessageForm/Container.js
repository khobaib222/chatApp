import React, {Component} from 'react'
import MessageFormComponent from './Component'
import {sendMessage, updateMessage} from '../../../../store/chat/actions'
import {connect} from 'react-redux'

class MessageFormContainer extends Component{
    render(){
        return(
            <MessageFormComponent 
            sendMessage={this.props.sendMessage}
            sending={this.props.sending}
            sendingError={this.props.sendingError}
            message={this.props.message}
            updateMessage={this.props.updateMessage}
            />
        )
    }
}

const mapDispatchToProps = {
    sendMessage: sendMessage,
    updateMessage: updateMessage
}

const mapStateToProps = (state) => ({
    sending: state.chat.sending,
    sendingError: state.chat.sendingError,
    message: state.chat.message
})

export default connect(mapStateToProps,mapDispatchToProps)(MessageFormContainer)