import React, { Component } from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

// Define some mock posts
const posts = [
    { id: '1', username: 'JohnDoe', content: 'Exploring the world of React Native! Loving it so far!' },
    { id: '2', username: 'JaneSmith', content: 'Does anyone have good resources for learning advanced React patterns?' },
    { id: '3', username: 'CoolCoder', content: 'Just found a cool library for animations! Check out react-native-reanimated!' },
    // Add more posts as needed
];

// Posts Screen Component
class PostsScreen extends Component {
    // Method to navigate back to the Home Screen
    navigateToHome = () => {
        this.props.navigation.navigate('Home');
    };

    // Method to render each item in the FlatList
    renderPost = ({ item }) => (
        <View style={styles.postContainer}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.content}>{item.content}</Text>
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                {/* FlatList to render the posts */}
                <FlatList
                    data={posts}
                    renderItem={this.renderPost}
                    keyExtractor={(item) => item.id}
                />
                {/* Wrapping the Button inside a View and style the View */}
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
        paddingHorizontal: 10,
    },
    postContainer: {
        backgroundColor: '#eaeaea',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    username: {
        fontWeight: 'bold',
    },
    content: {
        marginTop: 5,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20, // Add bottom margin to the button
        width: '100%',
    },
});

export default PostsScreen;
