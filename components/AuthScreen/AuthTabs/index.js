import React from 'react'
import LoginForm from './LoginForm/Container'
import SignUpForm from './SignUpForm/Container'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {primaryColor} from '../../../resources/color'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
function login(){
    return <LoginForm/>
}
function signup(){
    return <SignUpForm/>
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="login"
      tabBarOptions={{
        activeTintColor: primaryColor,
      }}
    >
      <Tab.Screen
        name="login"
        component={login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <Icons name="login" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="signup"
        component={signup}
        options={{
          tabBarLabel: 'SignUp',
          tabBarIcon: ({ color, size }) => (
            <Icons name="account-plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function AuthTabs() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
}
  