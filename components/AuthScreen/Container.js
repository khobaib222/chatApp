import React, {Component} from 'react'
import AuthScreenComponent from './Component'
import propTypes from 'prop-types'
import {connect} from 'react-redux'

class AuthScreen extends Component{  
    render(){
        return(
            <AuthScreenComponent loading={this.props.loading} error = {this.props.error}/>
        )
    }
    
}
const mapStateToProps = state => ({
    loading: state.session.loading,
    error: state.session.error
})

AuthScreen.propTypes ={
    loading: propTypes.bool.isRequired,
    error: propTypes.string
}

export default connect(mapStateToProps)(AuthScreen)