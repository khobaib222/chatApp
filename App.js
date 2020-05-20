import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './Styles'
import AuthScreen from './components/AuthScreen/index'
import MessageList from './components/DashboardNavigator/ChatScreen/MessageList/Container'
import {connect} from 'react-redux'
import ChatScreen from './components/DashboardNavigator/ChatScreen/Component'
class App extends Component{
  render(){
    
    return (
        <View style={styles.container}>
            {this.props.user==null && <AuthScreen/>}
            {this.props.user!=null && <ChatScreen/>}
        </View>
    );
  };
}
const mapStateToProps = (state)=>({
  user: state.session.user
})
export default connect(mapStateToProps)(App);
