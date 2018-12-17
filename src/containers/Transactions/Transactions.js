import * as React from "react";
import {
    StyleSheet,
    View,
    Animated,
    SafeAreaView,
    Platform,
    FlatList
} from "react-native";
import { ListItem, Body, Left, Right, Icon } from 'native-base';
import moment from "moment";
import { Text, Theme } from '../../components';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export default class Transactions extends React.Component {

    state = {
        scrollAnimation: new Animated.Value(0),
        data: [
            { name: "Passbook" },
            { name: "Transaction List" }
        ]
    };

    onPressSelectiTem = () => {
        this.props.navigation.navigate("History");
    }

    renderItem = ({ item }) => {
        return (
            <ListItem onPress={() => this.onPressSelectiTem()}>
                <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={Theme.typography.large}>{item.name}</Text>
                </Body>
            </ListItem>
        );
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
                            >
                                Transactions
                            </AnimatedText>
                            <AnimatedText
                                type="header2"
                                style={{ fontSize, marginTop }}
                            >
                                {moment().format("dddd")}
                            </AnimatedText>
                        </View>
                    </Animated.View>
                </AnimatedSafeAreaView>
                <FlatList
                    onScroll={Animated.event([{
                        nativeEvent: {
                            contentOffset: {
                                y: scrollAnimation
                            }
                        }
                    }])}
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.name}
                    stickyHeaderIndices={this.state.stickyHeaderIndices}
                />
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