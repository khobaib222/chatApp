import React, {Component} from 'react'
import propTypes from 'prop-types'
import MessageRow from './Component'
import firebaseService from '../../../../../services/firebase'
class MessageRowContainer extends Component{
    render(){
        let userEmail = firebaseService.auth().currentUser.email
        
        let currentUser = userEmail == this.props.message.user.email
        return(
            <MessageRow isCurrentUser={currentUser} 
            message={this.props.message}/>
        )
    }
}

MessageRowContainer.propTypes={
    email: propTypes.string.isRequired,
    message: propTypes.object.isRequired
}


export default MessageRowContainer