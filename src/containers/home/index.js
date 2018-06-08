
import React, { Component } from 'react';
import Services from '../../utils/services';
import {
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    Services.createProduct('Dosificador de Crema 4 cepillos', '24900','10','megashoptv','cleaning');
  }
  render() {
    return (
      <View >
        <Text >
         Firebase Basics
        </Text>
      </View>
    );
  }
}

