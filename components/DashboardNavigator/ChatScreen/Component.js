import React,{Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import MessageList from './MessageList/Container'
import MessageForm from './MessageForm/Container'
import styles from './Styles'
import {logoutUser} from '../../../store/session/actions'
import {connect} from 'react-redux'
class ChatScreenComponent extends Component{
    constructor(props){
        super(props)
        this.handleLogoutPress = ()=>{
            this.props.logout()
        }
        
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.logoutButton} onPress={this.handleLogoutPress}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
                <MessageList/>
                <MessageForm/> 
            </View>
        )
    }
}
const mapDispatchToProps={
    logout: logoutUser
}
export default connect(null,mapDispatchToProps)(ChatScreenComponent)
