import * as types from './actionTypes'

const initialState = {
    sending: false,
    sendingError: null,
    message: '',
    messages: {},
    loadMessagesError: null
}

const chat = (state = initialState,action) => {
    switch(action.type){
        case types.CHAT_MESSAGE_LOADING:
            return {...state, sending: true, sendingError: null}
        case types.CHAT_MESSAGE_SUCCESS:
            return {...state, sendingError: null, sending: false, message:''}
        case types.CHAT_MESSAGE_ERROR:
            return {...state, sending:false, sendingError: action.error}
        case types.CHAT_MESSAGE_UPDATE:
            return {...state, sending: false, message: action.message, sendingError: null}
        case types.CHAT_LOAD_MESSAGE_SUCCESS:
            return {...state, messages: action.messages, loadMessagesError: null}
        case types.CHAT_LOAD_MESSAGE_ERROR:
            return {...state, messages: null, loadMessagesError: action.error}
        default:
            return state
    }
}

export default chat