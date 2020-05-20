import React, {Component} from 'react'
import LoginFormComponent from './Component'
import propTypes from 'prop-types'
import translations from '../../../../i18n/index'
import {connect} from 'react-redux'
import {loginUser} from '../../../../store/session/actions'
class LoginFormContainer extends Component{
    static navigationOptions = {
        tabBarLabel : translations.t('login'),
    }
    render(){
        return(
            <LoginFormComponent
            login={this.props.login}/>
        )
    }
}
const mapDispatchToProps = {
    login: loginUser
}
LoginFormContainer.propTypes = {
    login: propTypes.func.isRequired
}
export default connect(null,mapDispatchToProps)(LoginFormContainer)