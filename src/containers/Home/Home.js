import * as React from "react";
import {
    StyleSheet,
    View,
    Animated,
    SafeAreaView,
    TouchableWithoutFeedback,
    Platform
} from "react-native";
import moment from "moment";
import { Text, Theme } from '../../components';
import { Button, Icon } from "native-base";
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export default class Dashboard extends React.Component {

    state = {
        scrollAnimation: new Animated.Value(0)
    };

    onPressPayment = () => {
        this.props.navigation.navigate('Payment');
    }

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
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                            <View style={{ width: '80%' }}>
                                <AnimatedText
                                    type="large"
                                    style={[styles.newPosts, { opacity, transform: [{ translateY }] }]}
                                >
                                    Dashboard
                            </AnimatedText>
                                <AnimatedText
                                    type="header2"
                                    style={{ fontSize, marginTop }}
                                >
                                    {moment().format("dddd")}
                                </AnimatedText>
                            </View>
                            <Button
                                transparent
                                onPress={() => {
                                    this.onPressPayment();
                                }}
                                style={{
                                    marginLeft: 10,
                                    width: '20%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}>
                                <Icon style={{ color: Theme.palette.primary }} name={'qr-scanner'} />
                                <Text style={{ color: Theme.palette.primary }}>Pay</Text>
                            </Button>
                        </View>
                    </Animated.View>

                </AnimatedSafeAreaView>
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
        elevation: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
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