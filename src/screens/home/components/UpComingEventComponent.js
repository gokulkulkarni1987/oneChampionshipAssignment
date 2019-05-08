import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  fetchUpcomingEvent
} from '../actions/HomeActions';
import constants from '../../../../constants';
import OCSpinner from '../../../common/OCSpinner';
import { Text } from 'react-native-elements';
import UpcomingEvent from '../../../common/UpcomingEvent';

class UpComingEventComponent extends Component {

  constructor(props) {
    super(props);
    this.renderViewDependingOnState = this.renderViewDependingOnState.bind(this);
  }

  componentDidMount() {
    this.props.fetchUpcomingEvent();
  }

  renderItem({ item }) {
    return (
      <UpcomingEvent
        event={item}
      />
    );
  }

  renderViewDependingOnState() {
    switch(this.props.viewType) {
      case constants.VIEW_TYPE.PROGRESS_VIEW:
        return (
          <OCSpinner
            loadingMessage={'Loading upcoming event, please wait!!!'}
          />
        );
      case constants.VIEW_TYPE.MAIN_VIEW:
        return (
          <FlatList
            data={this.props.upcomingEvent}
            renderItem={this.renderItem}
          />
        )
    }
  }

  render() {
    return (
      <View>
        {this.renderViewDependingOnState()}
      </View>
    )
  }
}

const mapStateToProps = ({ upcomingEvent }) => {
  return { ...upcomingEvent };
}

export default connect(mapStateToProps, {
  fetchUpcomingEvent
})(UpComingEventComponent);