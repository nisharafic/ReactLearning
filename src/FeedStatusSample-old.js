import React, { Component } from 'react';
import {
    StyleSheet,
    Text, TextInput,
    View, TouchableOpacity
} from 'react-native';
import { Container, Header, Footer, FooterTab, Button, Icon,Title,Left,Right,Body, Content, Item, InputGroup, Input } from 'native-base';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export default class FeedStatusSample extends Component {
    constructor(props) {
        super(props);
        this.state = { textValue: 'My initial\nText' };
    }

    render() {
        return (
            <Container>
                <Header >
                    <Left>
                        <Button transparent>
                            <Text>Cancel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Post status</Title>
                    </Body>
                </Header>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.8 }}>
                        <AutoGrowingTextInput placeholder="What's happening?"
                            style={styles.textInput} maxLength={700}
                            underlineColorAndroid={'transparent'} maxHeight={300} />
                    </View>
                    <View style={{ height: 1, width: "100%", backgroundColor: "#CED0CE", }} />
                    <Footer style={{ backgroundColor: "#fff" }}>
                        <View style={{ flex: 0.2 }}>
                            <View style={styles.statusBtn}>
                                <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', }}>
                                    <TouchableOpacity>
                                        <Icon name="md-image" style={{ color: '#bd0f2d' }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', }} >
                                    <TouchableOpacity>
                                        <Icon name="md-camera" style={{ color: '#bd0f2d' }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                                </View>
                                <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity>
                                        <Icon name="md-send" style={{ color: '#bd0f2d', }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Footer>
                </View>
            </Container>
        );
    }
    _onChange(event) {
        this.setState({ textValue: event.nativeEvent.text || '' });
    }
}
const styles = StyleSheet.create({
    textInput: {
        flex: 0.9,
        fontSize: 22,
        margin: 2,
        height: 300,
    },
    statusBtn: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 2,
        marginRight: 2,
        alignItems: 'center',
        height: 50,
    },
});