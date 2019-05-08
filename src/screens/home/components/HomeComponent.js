import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import HeaderComponent from '../../../HeaderComponent';
import UpComingEventComponent from './UpComingEventComponent';
import FeedComponent from './FeedComponent';
import { GREY_BG_COLOR } from '../../../../res/values/colors';

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
        style={{
          backgroundColor: GREY_BG_COLOR
        }}
      >
        <UpComingEventComponent
        />

        <FeedComponent/>
      </ScrollView>
    )
  }
}

export default HomeComponent;