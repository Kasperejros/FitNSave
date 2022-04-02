import React from 'react';
import { Text } from 'react-native';
import { observer, inject } from 'mobx-react'

class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            distance: 0,
            price: 0
        }
    }
    incrementDistance = (value) => {
        const { changeDistance } = this.props.store;
        changeDistance(value);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('in derived')
        return {
            distance: props.store.distance,
            price: props.store.price,
        }
    }

    render () {
        const { distance, price } = this.props.store;
        return (
        <div>
            <Text>{distance * price}</Text><br/>
            <span>
                <input type='button' value='INCREMENT' onClick={(e) => { e.preventDefault(); this.incrementDistance(10) } } />
            </span>
        </div>
        );
    }
  };

  export default inject('store')(observer(Tracker))