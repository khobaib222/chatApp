import * as actionTypes from './actionTypes'
import firebaseService from '../../services/firebase'

export const restoreSession = () => {
    return (dispatch) => {
        dispatch(sessionRestoring())
        let unsubscribe  = firebaseService.auth()
            .onAuthStateChanged(user => {
                if(user){
                    dispatch(sessionSuccess(user))
                    unsubscribe()
                }else{
                    dispatch(sessionLogout())
                    unsubscribe()
                }
            })
    }
}
export const loginUser = (email,password) => {
    return (dispatch) => {
        dispatch(sessionLoading())
        firebaseService.auth()
            .signInWithEmailAndPassword(email,password)
            .catch(error => {
                dispatch(sessionError(error.message))
            })
        let unsubscribe = firebaseService.auth()
            .onAuthStateChanged(user => {
                if(user){
                    dispatch(sessionSuccess(user))
                    unsubscribe()
                }
            })
    }
}
export const signupUser = (email,password) => {
    return (dispatch)=>{
        dispatch(sessionLoading())
        firebaseService.auth()
            .createUserWithEmailAndPassword(email,password)
            .catch(error=>{
                dispatch(sessionError(error.message))
            })
        let unsubscribe = firebaseService.auth()
        .onAuthStateChanged(user => {
            if(user){
                dispatch(sessionSuccess(user))
                unsubscribe()
            }
        })
    }
}
export const logoutUser = () => {
    return (dispatch) => {
        dispatch(sessionLoading())
        firebaseService.auth()
            .signOut()
            .then(()=>{
                dispatch(sessionLogout())
            })
            .catch(error=>{
                dispatch(sessionError(error.message))
            })
    }
}
const sessionRestoring = () => ({
    type: actionTypes.SESSION_RESTORING
})
const sessionLoading = () => ({
    type: actionTypes.SESSION_LOADING
})
const sessionSuccess = user => ({
    type: actionTypes.SESSION_SUCCESS,
    user
})
const sessionLogout = () => ({
    type: actionTypes.SESSION_LOGOUT
})
const sessionError = error => ({
    type: actionTypes.SESSION_ERROR,
    error
})