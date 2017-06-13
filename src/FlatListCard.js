import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { List, ListItem, SearchBar } from "react-native-elements";
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Right, Body } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import ProgressBar from './global/ProgressBar';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class FlatListCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false
        }
    }

    componentDidMount() {
        this._makeRemoteRequets();
    }
    _makeRemoteRequets = () => {
        const {page, seed} = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: page === 1 ? res.results : [...this.state.data, ...res.results],
                    error: res.error || null,
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "86%",
                    backgroundColor: "#CED0CE",
                    marginLeft: "14%"
                }}
                />
        );
    }
    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this._makeRemoteRequets();
        })
    }
    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
    };
    renderFooter = () => {
        if (!this.state.loading) return null;

        return (
            <View
                style={{
                    paddingVertical: 20,
                    borderTopWidth: 1,
                    borderColor: "#CED0CE"
                }}
                >
                <ActivityIndicator animating size="large" />
            </View>
        );
    };
    renderCard = (item) => {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: item.picture.thumbnail }} />
                        <Body>
                            <Text>{`${item.name.first} ${item.name.last}`}</Text>
                            <Text note>2 mins ago</Text>
                        </Body>
                    </Left>
                </CardItem>

                <CardItem cardBody>
                    <Image style={{ resizeMode: 'cover', height: 350 }} source={require('../images/wallpaper.jpg')} />
                </CardItem>
                 <View
                        style={{
                            height: 1,
                            width: "96%",
                            marginTop:5,
                            backgroundColor: "#CED0CE",
                            marginLeft:"2%",
                            marginRight:"2%"
                        }}
                        />
                <CardItem>
                    <Grid style={{ backgroundColor: '#D954D7'}}>
                        <Col style={{ backgroundColor: '#D954D7', height: 26 }}>
                            <Left>
                                <Icon  name="thumbs-up" />
                            </Left>
                        </Col>
                        <Col style={{ backgroundColor: '#D93735', height: 26 }}>
                            <Left>
                                <Icon  name="thumbs-up" />
                                <Text>999</Text>
                            </Left>
                        </Col>
                        <Col style={{ backgroundColor: '#D92555', height: 26 }}>
                            <Left>
                                <Icon  name="thumbs-up" />
                                <Text>898</Text>
                            </Left>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        );
    }

    render() {
        return (
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderCard(item)}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={false}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooter}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={5}
                    />
            </List>
        );
    }
}

const styles = StyleSheet.create({
    footerBtn: {
        height: 70,
    }
});