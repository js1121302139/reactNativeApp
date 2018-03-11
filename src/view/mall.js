import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

export default class MeScreen extends React.Component {
    static navigationOptions = {
        title: '商城',
    };
    render() {
        return (
            <View>
                <Text>商城</Text>
            </View>
        )
    }
}