import * as types from './actionTypes'
import firebaseService from '../../services/firebase'

const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')
const FIREBASE_REF_MESSAGES_LIMIT = 20

export const sendMessage = message => {
    return (dispatch) => {
        dispatch(chatMessageLoading())
        let currentUser = firebaseService.auth().currentUser
        let createdAt = new Date().getTime()
        let chatMessage = {
            text: message,
            createdAt: createdAt,
            user: {
                id: currentUser.uid,
                email: currentUser.email
            }
        }
        FIREBASE_REF_MESSAGES.push().set(chatMessage,(error)=>{
            if(error){
                dispatch(chatMessageError(error.message))
            }else{
                dispatch(chatMessageSuccess())
            }
        })
    }
}
export const loadMessages = () => {
    return (dispatch) => {
        FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot)=>{
            dispatch(loadMessagesSuccess(snapshot.val()))
        },(errorObject)=>{
            dispatch(loadMessagesError(errorObject.message))
        })
    }
}
export const updateMessage = text => {
    return(dispatch) => {
        dispatch(updateMessageText(text))
    }
}
const updateMessageText = message => ({
    type: types.CHAT_MESSAGE_UPDATE,
    message
})
const chatMessageLoading = () => ({
    type: types.CHAT_MESSAGE_LOADING
})

const chatMessageError = error => ({
    type: types.CHAT_MESSAGE_ERROR,
    error
})

const chatMessageSuccess = () => ({
    type: types.CHAT_MESSAGE_SUCCESS
})

const loadMessagesSuccess = (messages) => ({
    type: types.CHAT_LOAD_MESSAGE_SUCCESS,
    messages
})

const loadMessagesError = (error) => ({
    type: types.CHAT_LOAD_MESSAGE_ERROR,
    error
})


