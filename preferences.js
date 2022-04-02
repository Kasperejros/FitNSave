import { StyleSheet, Text, Button, View, Alert, TextInput } from 'react-native';
import { Component } from 'react/cjs/react.production.min';


export default class Preferences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'User',
            price: '1'
        }
    }
    render() {
        const s = this.props.route.params.styles
        return (
            <View>
            <Text style={s.text}>Username:</Text>
            <TextInput
            placeholder='Input Your Name'
            onChangeText={newText => this.setState({name: newText})}
            />
            <Text style={s.text}>{this.state.name}</Text>
            <Text style={s.text}>Fuel Price (PLN):</Text>
            <TextInput
            placeholder='Input Your Name'
            onChangeText={newText => this.setState({price: newText})}
            />
            <Text style={s.text}>{this.state.price}</Text>
            </View>
        )
    }
}