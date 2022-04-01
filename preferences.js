import { StyleSheet, Text, Button, View, Alert, TextInput } from 'react-native';
import { Component } from 'react/cjs/react.production.min';


export default class Preferences extends Component {

    render() {
        const s = this.props.styles
        return (
            <View>
            <Text style={s.text}>PREFERENCES</Text>
            <TextInput
            </View>
        )
    }
}
 
