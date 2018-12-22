import React from 'react';
import { View, Text } from 'native-base';

export default class Calendar extends React.Component {

    constructor() {
        super();
        this.state = {
            date: undefined
        }
    }

    render() {
        return (
            <View>
                <Text>Calendar</Text>
            </View>
        )
    }

}