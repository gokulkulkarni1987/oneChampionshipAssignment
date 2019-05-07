import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import HeaderComponent from '../../../HeaderComponent';


class HomeComponent extends Component {
  static navigationOptions = (props) => {
    return {
      header: 
        <HeaderComponent
          {...props}
        />,
    }
  }
  render() {
    return (
      <View>
        <Text>This is my app</Text>
      </View>
    )
  }
}

export default HomeComponent;