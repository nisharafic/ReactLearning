'use strict'

//https://www.npmjs.com/package/react-native-gallery

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Gallery from 'react-native-gallery';
import { Container, Header, Footer, FooterTab, Button, Icon, Title, Left, Right, Body, Content, Item, InputGroup, Input } from 'native-base';

export default class ImageGallarys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:["http://p10.qhimg.com/t019e9cf51692f735be.jpg"],
        }
    }
    render() {
        return (
            <Gallery
                style={{ flex: 1, backgroundColor: 'black' }}
                images={this.state.data}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6AE2D',
    },
});