import React,{Component} from 'react'
import MessageListComponent from './Component'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {loadMessages} from '../../../../store/chat/actions'
class MessageListContainer extends Component{

    componentDidMount(){
        this.props.loadMessages()
    }
    render(){
        const data = this.props.messages ? Object.keys(this.props.messages).map(key => this.props.messages[key]).reverse() :[]
        return(
            <MessageListComponent
            data={data}/>
        )
    }
}
const mapStateToProps = (state) => ({
    messages: state.chat.messages,
    error: state.chat.loadMessagesError
})
const mapDispatchToProps = {
    loadMessages: loadMessages
}
MessageListContainer.propTypes={
    messages: propTypes.object,
    error: propTypes.string,
    loadMessages: propTypes.func.isRequired
}
export default connect(mapStateToProps,mapDispatchToProps)(MessageListContainer)