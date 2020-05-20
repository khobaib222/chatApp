import React from 'react'
import BasicForm from '../BasicForm/Component'
import propTypes from 'prop-types'
import translations from '../../../../i18n/index'
const SignUpFormComponent = props => 
<BasicForm 
buttonTitle={translations.t('signup')}
onButtonPress={props.signup}
/>
SignUpFormComponent.propTypes = {
    signup: propTypes.func.isRequired
}
export default SignUpFormComponent