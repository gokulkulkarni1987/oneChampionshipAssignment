import React, { Component } from 'react';
import {
  ScrollView
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
      <ScrollView
        nestedScrollEnabled={true}
      >
        <UpComingEventComponent
        />
      </ScrollView>
    )
  }
}

export default HomeComponent;