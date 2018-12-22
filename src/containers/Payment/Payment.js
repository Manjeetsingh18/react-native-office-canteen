import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import { Theme, NavHeader } from '../../components';

export default class Payment extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    backFn = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigation } = this.props;
        const { backFn } = this;
        return (
            <View style={styles.container}>
                <NavHeader title="Payment" back {...{ navigation, backFn }} />
                <View>
                    <Text>Payment</Text>
                </View>
            </View >
        )
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