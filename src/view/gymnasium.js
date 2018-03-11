import React, {Component} from 'react'
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
} from 'react-native'

type Props = {};
import messageIco from './img/message.png'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '球馆'
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.topBar}>
                <View style={styles.addressBox}>
                    <Text style={styles.addressTxt}>福州</Text>
                </View>
                <View style={styles.shear}
                      onPress={() => navigate('Me')}
                >
                    <Text style={styles.shearTxt}>输入球馆名称地址</Text>
                </View>
                <View style={styles.Message}>
                    <Image
                        source={messageIco}
                        style={styles.MessageIco}
                    />
                    <Text style={styles.MsgNum}>99+</Text>
                </View>
                {/*<Text>*/}
                {/*Hello, Navigati4on!*/}
                {/*</Text>*/}
                {/*<Button*/}
                {/*onPress ={() => navigate('Me')}*/}
                {/*title="Chat with Lucy"></Button>*/}
            </View>
        )
    }
}

const setPadding = (padding) => {
    return {
        paddingTop: padding[0],
        paddingRight: padding[1],
        paddingBottom: padding[2],
        paddingLeft: padding[3]
    }
}

const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        height: 50,
        paddingLeft: 12,
        paddingRight: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    shear: {
        display: 'flex',
        flex: 1,
        height: 25,
        borderRadius: 12.5,
        borderWidth: 1,
        paddingLeft: 27,
        borderColor: '#333',
        backgroundColor: '#fff'
    },
    shearTxt: {
        textAlign: 'left',
        fontSize: 11,
        lineHeight: 25,
        color: '#666666'
    },
    addressBox: {
        marginRight: 14
    },
    addressTxt: {
        color: '#333',
        fontSize: 12
    },
    Message: {
        position: 'relative',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width: 44,
        height: 44,
        backgroundColor: '#000',
        marginLeft: 20
    },
    MessageIco:{
        width:22,
        height:22
    },
    MsgNum: {
        position: 'absolute',
        top: 5,
        left: 28,
        fontSize: 11,
        color: '#fff'
    }
})





