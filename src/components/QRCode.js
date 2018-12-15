import React from 'react';
import { View, StatusBar, Text, TextInput, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import QRCodeScanner from 'react-native-qrcode';


export class QRCode extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Manjeet'
        }
    }

    render() {
        return (
            <Container>
                <Content>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({ text: text })}
                            value={this.state.text}
                        />
                        <QRCodeScanner
                            value={this.state.text}
                            size={200}
                            bgColor={'#000'}
                            fgColor={'#fff'} />
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});