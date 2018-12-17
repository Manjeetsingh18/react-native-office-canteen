import * as React from "react";
import {
    StyleSheet,
    View,
    Animated,
    SafeAreaView,
    FlatList,
    TouchableWithoutFeedback,
    Platform
} from "react-native";
import moment from "moment";
import { Text, Theme, NavHeader } from '../../components';
import {
    ListItem,
    Left,
    Body,
    Icon,
    Right,
    Title
} from 'native-base';



export default class History extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: "Movies", Date: '12/02/2018', price: '10', header: true },
                { name: "Interstellar", Date: '12/02/2018', price: '10', header: false },
                { name: "Dark Knight", Date: '12/02/2018', price: '10', header: false },
                { name: "Music", price: '10', Date: '13/02/2018', header: true },
                { name: "Adams", price: '10', Date: '13/02/2018', header: false },
                { name: "Oye Hoye", price: '10', Date: '13/02/2018', header: false },
                { name: "India", price: '10', header: false },
                { name: "People", price: '10', Date: '15/02/2018', header: true },
                { name: "Jazzy", price: '10', Date: '15/02/2018', header: false },
                { name: "Arrow", price: '10', Date: '15/02/2018', header: false },
                { name: "Things", price: '10', Date: '16/02/2018', header: true },
                { name: "table", price: '10', Date: '16/02/2018', header: false },
                { name: "chair", price: '10', Date: '16/02/2018', header: false },

            ],
            stickyHeaderIndices: []
        };
    }

    componentWillMount() {
        var arr = [];
        this.state.data.map(obj => {
            if (obj.header) {
                arr.push(this.state.data.indexOf(obj));
            }
        });
        arr.push(0);
        this.setState({
            stickyHeaderIndices: arr
        });
    }
    renderItem = ({ item }) => {
        if (item.header) {
            return (
                <ListItem itemDivider>
                    <Left />
                    <Body style={{ marginRight: 40 }}>
                        <Text style={{ fontWeight: "bold" }}>
                            {item.Date}
                        </Text>
                    </Body>
                    <Right />
                </ListItem>
            );
        } else if (!item.header) {
            return (
                <ListItem style={{ marginLeft: 0 }}>
                    <Body style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </Body>
                </ListItem>
            );
        }
    };

    backFn = () => {
        this.props.navigation.goBack();
    }

    render() {
        const { navigation } = this.props;
        const { backFn } = this;
        return (
            <View style={styles.container}>
                <NavHeader title="History" back {...{ navigation, backFn }} />
                <FlatList
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