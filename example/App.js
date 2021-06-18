/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import InstaStory from 'react-native-insta-story';
import {IUserStoryItem} from "../src/interfaces/IUserStory";

const data = [
    {
        user_id: 1,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: "Ahmet Çağlar Durmuş",
        stories: [
            {
                story_id: 1,
                story_image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://www.nawpic.com/media/2020/wallpaper-for-phone-nawpic-4.jpg",
            }]
    },
    {
        user_id: 2,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Test User",
        stories: [
            {
                story_id: 1,
                story_image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://www.nawpic.com/media/2020/wallpaper-for-phone-nawpic-4.jpg",
                onPress: () => console.log('story 2 swiped'),
            }]
    }]

export default class App extends Component<{}> {


    render() {
        return (
            <View style={styles.container}>
                <InstaStory data={data}
                            duration={10}
                            customSwipeUpComponent={<View>
                                <Text>kaldır</Text>
                            </View>}
                            style={{marginTop: 30}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
