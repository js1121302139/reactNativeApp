import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

export default class MeScreen extends React.Component {
    static navigationOptions = {
        title: '我的',
    };
    render() {
        return (
            <View>
                <Text>我的</Text>
            </View>
        )
    }
}