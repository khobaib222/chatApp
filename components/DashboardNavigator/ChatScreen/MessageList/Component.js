import React, {Component} from 'react'
import {FlatList, Text} from 'react-native'
import MessageRow from './MessageRow/Container'
import styles from './Styles'
import translations from '../../../../i18n/index'
import propTypes from 'prop-types'

class MessageListComponent extends Component{
    constructor(){
        super()
        this.renderItem = ({item})=> {
            return (<MessageRow message={item}/>)
        }
        this.emptyList = () => {
            return (
                <Text
                style={styles.placeholder}>
                    {translations.t('placeholder')}
                </Text>
            )
        }
    }
    componentDidUpdate(){
        if(this.props.data.length){
            this.FlatList.scrollToIndex({animated: true, index: 0})
        }
    }
    render(){
        const contentContainerStyle = this.props.data.length ? null : styles.flatListContainerStyle
        return(
            <FlatList
            ref={(c) => {this.FlatList = c}}
            data={this.props.data}
            renderItem = {this.renderItem}
            ListEmptyComponent={this.emptyList}
            keyExtractor = {item=>item.time}
            style={styles.container}
            contentContainerStyle={contentContainerStyle}
            inverted
            />
        )
    }
}

MessageListComponent.propTypes={
    data: propTypes.array.isRequired
}

export default MessageListComponent