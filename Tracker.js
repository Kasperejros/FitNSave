import React from 'react';
import { Text } from 'react-native';

export default class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 0,
            price: 0
        }
    }

    static getDerivedStateFromProps = (props, state) =>
    {
        const {distance, price} = state
        console.log(distance, price, props)
        if(props.route.params.distance !== distance || props.route.params.price !== price) {
            return { 
                distance: props.route.params.distance,
                price: props.route.params.price 
            }
        }
    }

    render () {
        const {distance, price} = this.state;
        return <Text>{distance * price}</Text>;
    }
  };