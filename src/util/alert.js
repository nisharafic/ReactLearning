'use strict'

var React = require('react-native');

var {
    Platform,
    AlertIOS,
    ToastAndroid
} = React;

var alert = React.createClass({
    show: function (text) {
        switch (Platform.OS) {
            case 'ios':
                AlertIOS.alert(text);
                break;
            case 'android':
                ToastAndroid.show(text,ToastAndroid.SHORT);
                break;
        }
    }
});

module.exports = alert;