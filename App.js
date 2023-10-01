import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import PostsScreen from './PostsScreen';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Main App Component
export default class App extends Component {
  render() {
    return (
        // Wrap the entire app in NavigationContainer
        <NavigationContainer>
          {/* Define the Screens in the Stack Navigator */}
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Posts" component={PostsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
