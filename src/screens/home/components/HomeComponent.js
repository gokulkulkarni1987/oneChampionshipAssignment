import React, { Component } from 'react';
import {
  View
} from 'react-native';
import HeaderComponent from '../../../HeaderComponent';
import UpComingEventComponent from './UpComingEventComponent';

class HomeComponent extends Component {

  constructor(props) {
    super(props);
  }

  static navigationOptions = (props) => {
    return {
      header: 
        <HeaderComponent
          {...props}
        />,
    }
  }

  fetchHomeDetails() {
  }

  render() {
    return (
      <View>
        <UpComingEventComponent
        />
      </View>
    )
  }
}

export default HomeComponent;