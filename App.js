/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 球馆
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation'

import Gymnasium from './src/view/gymnasium'
import MeScreen from './src/view/Me'
import GameScreen from './src/view/theGame'
import MallScreen from './src/view/mall'

const SimpleApp = TabNavigator({
    // 场馆
    Home: {screen: Gymnasium},
    // 赛事
    TheGame: {screen: GameScreen},
    // 商城
    mall: { screen: MallScreen },
    // 我的
    Me: { screen: MeScreen }

},{
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
});

export default SimpleApp;
