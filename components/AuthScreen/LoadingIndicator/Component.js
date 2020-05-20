import React from 'react'
import {View, ActivityIndicator} from 'react-native'
import styles from './Styles'
import {themeDark} from '../../../resources/color'
const LoadingIndicator = () => 
<View style={styles.loadingContainer}>
    <ActivityIndicator size={100} color={themeDark} style={styles.LoadingIndicator}/>
</View>
export default LoadingIndicator