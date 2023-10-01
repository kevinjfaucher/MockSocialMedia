import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

// Home Screen Component
class HomeScreen extends Component {
    // Method to navigate to the Profile Screen
    navigateToProfile = () => {
        this.props.navigation.navigate('Profile');
    };

    // Method to navigate to the Posts Screen
    navigateToPosts = () => {
        this.props.navigation.navigate('Posts');
    };

    render() {
        return (
            // Styling the container using styles object
            <View style={styles.container}>
                {/* Displaying a welcome message */}
                <Text style={styles.welcomeText}>Welcome to Mock Social App!</Text>

                {/* Button to navigate to Profile Screen */}
                <View style={styles.buttonContainer}>
                    <Button title="Go to Profile" onPress={this.navigateToProfile} />
                </View>

                {/* Button to navigate to Posts Screen */}
                <View style={styles.buttonContainer}>
                    <Button title="Go to Posts" onPress={this.navigateToPosts} />
                </View>
            </View>
        );
    }
}

// Define styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    welcomeText: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        width: '100%', // Make button take the full width
        marginBottom: 10, // Add space below each button
        paddingHorizontal: 10, // Add some horizontal padding
    },
});

export default HomeScreen;
