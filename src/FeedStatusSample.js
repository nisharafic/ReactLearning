import React, { Component } from 'react';
import {
    StyleSheet,
    Text, TextInput,
    View, TouchableOpacity
} from 'react-native';
import { Container, Header, Footer, FooterTab, Button, Icon, Title, Left, Right, Body, Content, Item, InputGroup, Input } from 'native-base';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';

export default class FeedStatusSample extends Component {
    constructor(props) {
        super(props);
        this.state = { textValue: 'My initial\nText' };
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#bd0f2d" }} >
                    <Left>
                        <Button transparent>
                            <Icon name="md-close"  style={{ color: '#FFF' }} />
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
                        <View style={styles.PostContainer}>
                            <View style={styles.postFooter}>
                                <View style={styles.UtilityNav}>
                                    <TouchableOpacity>
                                        <Icon name="md-image"  style={{ color: '#bd0f2d' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Icon name="md-camera"  style={{ color: '#bd0f2d' }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.PostButtonContainer}>
                                    <View style={styles.postButton}>
                                        <Text style={styles.PostButtonText}>Post</Text>
                                    </View>
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
    header: {
        color: '#fff'
    },
    textInput: {
        flex: 0.9,
        fontSize: 22,
        margin: 2,
        height: 300,
    },
    PostContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    postFooter: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        flex: 1,
        padding: 8
    },
    UtilityNav: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    PostButtonContainer: {
        flex: 5,
        alignItems: 'flex-end'
    },
    postButton: {
        flexDirection: 'row',
        backgroundColor: '#bd0f2d',
        padding: 8,
        borderRadius: 6,
        justifyContent: 'space-between',
        width: 60,
    },
    PostButtonText: {
        color: 'white'
    }

});
