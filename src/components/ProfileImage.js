import React from 'react';
import {
    AppRegistry,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';


export default class App extends React.Component {


    constructor(props) {
        super(props);

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };


    }



    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.selectPhotoTapped.bind(this)}>
                    <View
                        style={[
                            styles.avatar,
                            styles.avatarContainer,
                            { marginBottom: 20 },
                        ]}
                    >
                        <Text>Photo</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        backgroundColor: '#F5FCFF',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150,
    },
});