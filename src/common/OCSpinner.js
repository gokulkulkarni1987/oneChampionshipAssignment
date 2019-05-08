import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  Text
} from 'react-native'
import { GREY_BG_COLOR, BLUE_COLOR, WHITE_COLOR } from '../../res/values/colors';

class OCSpinner extends Component {

  render() {
    return (
      <View style={styles.spinnerParentStyle}>
        <ActivityIndicator size="small" color={BLUE_COLOR} />
        <Text>{this.props.loadingMessage}</Text>
      </View>
    );
  }
}

const styles = {
  spinnerParentStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: WHITE_COLOR,
    zIndex:10
  }
};


export default OCSpinner;
