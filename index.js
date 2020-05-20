import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import reducer from './store/reducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

class MyApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
AppRegistry.registerComponent(appName, () => MyApp);
