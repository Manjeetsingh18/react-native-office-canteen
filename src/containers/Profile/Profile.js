import * as React from "react";
import {
    StyleSheet,
    View,
    Animated,
    SafeAreaView,
    TouchableWithoutFeedback,
    Platform,
    ScrollView
} from "react-native";
import moment from "moment";
import QRCodeScanner from 'react-native-qrcode';

import { Text, Theme, ProfileImage } from '../../components';
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export default class Profile extends React.Component {

    state = {
        scrollAnimation: new Animated.Value(0),
        text: 'Manjeet97k@gmail.com'
    };
    render() {
        const { scrollAnimation } = this.state;
        const opacity = scrollAnimation.interpolate({
            inputRange: [0, 60],
            outputRange: [1, 0],
            extrapolate: "clamp"
        });
        const translateY = scrollAnimation.interpolate({
            inputRange: [0, 60],
            outputRange: [0, -60],
            extrapolate: "clamp"
        });
        const fontSize = scrollAnimation.interpolate({
            inputRange: [0, 60],
            outputRange: [36, 24],
            extrapolate: "clamp"
        });
        const height = scrollAnimation.interpolate({
            inputRange: [0, 60],
            outputRange: Platform.OS === "android" ? [70, 70] : [80, 50],
            extrapolate: "clamp"
        });
        const marginTop = scrollAnimation.interpolate({
            inputRange: [0, 60],
            outputRange: [24, 0],
            extrapolate: "clamp"
        });
        const shadowOpacity = scrollAnimation.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 0.25],
            extrapolate: "clamp"
        });
        return (
            <View style={styles.container}>
                <AnimatedSafeAreaView style={[styles.header, { shadowOpacity }]}>
                    <Animated.View style={[styles.innerHeader, { height }]}>
                        <View>
                            <AnimatedText
                                type="large"
                                style={[styles.newPosts, { opacity, transform: [{ translateY }] }]}
                            >Profile</AnimatedText>
                            <AnimatedText
                                type="header2"
                                style={{ fontSize, marginTop }}
                            >
                                {moment().format("dddd")}
                            </AnimatedText>
                        </View>
                    </Animated.View>
                </AnimatedSafeAreaView>
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollAnimation
                            }
                        }
                    }])}>
                    <ProfileImage />
                    <QRCodeScanner
                        value={this.state.text}
                        size={200}
                        bgColor={'#000'}
                        fgColor={'#fff'} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: "#fff",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        elevation: 8,
        zIndex: 10000
    },
    innerHeader: {
        marginHorizontal: Theme.spacing.base,
        marginVertical: Theme.spacing.tiny,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    newPosts: {
        position: "absolute",
        top: 0
    }
});