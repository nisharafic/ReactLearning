'use strict'

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { Container, Header, Footer, FooterTab, Button, Icon, Title, Left, Right, Body, Content, Item, InputGroup, Input } from 'native-base';

export default class CameraRollPic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            selected: [],
        };
    }

    getSelectedImages(images, current) {
        var num = images.length;
        this.setState({
            num: num,
            selected: images,
        });
        console.log(current);
        console.log(this.state.selected);
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "#bd0f2d" }} >
                    <Left>
                        <Button transparent>
                            <Icon name="md-close" style={{ color: '#FFF' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title><Text style={styles.bold}> {this.state.num} </Text> selected</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="md-checkmark" style={{ color: '#FFF' }} />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <CameraRollPicker
                        scrollRenderAheadDistance={500}
                        initialListSize={1}
                        pageSize={3}
                        removeClippedSubviews={false}
                        groupTypes='SavedPhotos'
                        batchSize={5}
                        maximum={4}
                        selected={this.state.selected}
                        assetType='Photos'
                        imagesPerRow={3}
                        imageMargin={5}
                        callback={this.getSelectedImages.bind(this)} />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6AE2D',
    },
    content: {
        marginTop: 15,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    text: {
        fontSize: 16,
        alignItems: 'center',
        color: '#fff',
    },
    bold: {
        fontWeight: 'bold',
    },
    info: {
        fontSize: 12,
    },
});