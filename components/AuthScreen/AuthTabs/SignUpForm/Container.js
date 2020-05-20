import React, {Component} from 'react'
import SignUpFormComponent from './Component'
import propTypes from 'prop-types'
import translations from '../../../../i18n/index'
import {connect} from 'react-redux'
import {signupUser} from '../../../../store/session/actions'
class SignUpFormContainer extends Component{
    static navigationOptions = {
        tabBarLabel: translations.t('signup')
    }
    render(){
        return (
            <SignUpFormComponent
            signup={this.props.signup}
            />
        )
    }
}
const mapDispatchToProps = {
    signup: signupUser
}
SignUpFormComponent.propTypes={
    signup: propTypes.func.isRequired
}
export default connect(null,mapDispatchToProps)(SignUpFormContainer)