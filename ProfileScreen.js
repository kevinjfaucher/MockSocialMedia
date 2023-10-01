import React, { Component } from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';

// Profile Screen Component
class ProfileScreen extends Component {
    // Method to navigate back to the Home Screen
    navigateToHome = () => {
        this.props.navigation.navigate('Home');
    };

    render() {
        return (
            // Styled container for holding the content
            <View style={styles.container}>

                {/* Displaying a static profile picture */}
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.profileImage}
                />

                {/* Displaying static user information */}
                <Text style={styles.username}>Username: JohnDoe</Text>
                <Text style={styles.bio}>Bio: Just another mock user exploring the world of React Native!</Text>
                <Text style={styles.contact}>Contact: johndoe@example.com</Text>

                {/* Button to navigate back to Home Screen */}
                <View style={styles.buttonContainer}>
                    <Button title="Back to Home" onPress={this.navigateToHome} />
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
        paddingHorizontal: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75, // to make the image circular
        marginBottom: 20,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bio: {
        marginBottom: 10,
        textAlign: 'center',
    },
    contact: {
        marginBottom: 20,
        fontStyle: 'italic',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
});

export default ProfileScreen;
