import React from 'react'
import BasicForm from '../BasicForm/Component'
import propTypes from 'prop-types'
import translations from '../../../../i18n/index'
const LoginFormComponent = props => 
<BasicForm buttonTitle={translations.t('login')}
onButtonPress={props.login}
/>
 LoginFormComponent.propTypes = {
     login: propTypes.func.isRequired
 }
export default LoginFormComponent