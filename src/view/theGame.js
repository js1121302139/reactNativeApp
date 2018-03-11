import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

export default class GameScreen extends React.Component {
    static navigationOptions = {
        title: '赛场',
    };
    render() {
        return (
            <View>
                <Text>赛场</Text>
            </View>
        )
    }
}