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
import ImagePicker from 'react-native-image-crop-picker';

export default class App extends React.Component {


    constructor(props) {
        super(props);

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
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