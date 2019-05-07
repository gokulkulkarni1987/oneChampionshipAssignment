import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeComponent from './home/components/HomeComponent';
import {
  screenChanged
} from './AppActions';
import HeaderComponent from '../HeaderComponent';

const mainNav = createStackNavigator(
  {
    MainNav: { screen: HomeComponent }
  },
  {
    initialRouteName: 'MainNav'
  }
);

mainNav.navigationOptions = {
  header: <HeaderComponent />,
};

const AppNavigator = createAppContainer(createDrawerNavigator({
  Drawer: { screen: mainNav }
}));


class MainComponent extends Component {

  render() {
    return (
      <AppNavigator
        onNavigationStateChange={(prevState, currentState) => {
          this.props.screenChanged(prevState, currentState);
        }}
      />
    );
  }
}

const mapStateToProps = ({ screenDetails }) => {
  return { screenDetails };
}

export default connect(mapStateToProps, { screenChanged })(MainComponent);