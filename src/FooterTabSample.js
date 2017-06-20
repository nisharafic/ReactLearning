import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';
import {
    Container, Content, Card, CardItem, Thumbnail, Button,
    Icon, Footer, FooterTab, Left, Right, Body, Input
} from 'native-base';


export default class FooterTabSample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "apps"
        };
    }

    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <TouchableOpacity>
                        <Text>Click Me! </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 1, width: "100%", backgroundColor: "#CED0CE", }}/>
                <Footer borderColor={{ borderColor: 'red' }}>
                    <FooterTab style={{ backgroundColor: '#fff', borderColor: 'red' }}>
                        <Button onPress={() => this.setState({ selectedTab: 'apps' })}>
                            <Icon style={{ color: this.state.selectedTab === 'apps' ? '#bd0f2d' : null }} name="apps" />
                        </Button>
                        <Button onPress={() => this.setState({ selectedTab: 'camera' })}>
                            <Icon name="camera" style={{ color: this.state.selectedTab === 'camera' ? '#bd0f2d' : null }} />
                        </Button>
                        <Button onPress={() => this.setState({ selectedTab: 'navigate' })}>
                            <Icon name="navigate" style={{ color: this.state.selectedTab === 'navigate' ? '#bd0f2d' : null }} />
                        </Button>
                        <Button onPress={() => this.setState({ selectedTab: 'person' })}>
                            <Icon name="person" style={{ color: this.state.selectedTab === 'person' ? '#bd0f2d' : null }} />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dialogContentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});