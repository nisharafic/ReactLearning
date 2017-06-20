import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, 
    Icon, Footer, FooterTab, Left, Right, Body,Input } from 'native-base';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    DefaultAnimation,
} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const defaultAnimation = new DefaultAnimation({ animationDuration: 150 });

export default class PopupdialogSample extends Component {
    constructor(props) {
        super(props);
        this.state = { showFooter: true };
        this.showSlideAnimationDialog = this.showSlideAnimationDialog.bind(this);
    }
    showSlideAnimationDialog() {
        this.slideAnimationDialog.show();
    }
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.showSlideAnimationDialog}>
                        <Text>Click Me! </Text>
                    </TouchableOpacity>
                    <PopupDialog height="60%"
                        dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
                        ref={(popupDialog) => {
                            this.slideAnimationDialog = popupDialog;
                        } }
                        dialogAnimation={slideAnimation}>
                        <View style={styles.dialogContentView}>
                            <View style={{ flex: 0.9 }} >
                                 <Input placeholder="What's on your mind?"/>
                            </View>
                            <View style={{ flex: 0.1, backgroundColor: 'red' }} >
                                <Text>Slide Animation 2</Text>
                            </View>
                        </View>
                    </PopupDialog>
                </View>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#fff' }}>
                        <Button>
                            <Icon style={{ color: 'red' }} name="apps" />
                        </Button>
                        <Button>
                            <Icon name="camera" />
                        </Button>
                        <Button>
                            <Icon name="navigate" />
                        </Button>
                        <Button>
                            <Icon name="person" />
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