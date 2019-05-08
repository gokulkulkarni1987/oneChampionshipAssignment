import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import OCSpinner from '../../../common/OCSpinner';
import {
  fetchFeeds
} from '../actions/HomeActions';
import constants from '../../../../constants';
import ArticleRowComponent from '../../../common/ArticleRowComponent';
import YoutubeRowComponent from '../../../common/YoutubeRowComponent';

class FeedComponent extends Component {
  constructor(props) {
    super(props);
    this.renderViewDependingOnState = this.renderViewDependingOnState.bind(this);
  }

  componentDidMount() {
    this.props.fetchFeeds();
  }

  renderItem({ item }) {
    switch(item.type)  {
      case 'ARTICLE':
        return (
          <ArticleRowComponent
            key={item.id}
            article={item}
          />
        );
      case 'YOUTUBE':
        return (
          <YoutubeRowComponent
            key={item.id}
            youtubeItem={item}
          />
        );
    }
    return (
      null
    );
  }

  renderViewDependingOnState() {
    switch(this.props.viewType) {
      case constants.VIEW_TYPE.PROGRESS_VIEW:
        return (
          <OCSpinner
            loadingMessage={'Loading feed, please wait!!!'}
          />
        );
      case constants.VIEW_TYPE.MAIN_VIEW:
        return (
          <FlatList
            data={this.props.feeds}
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

const mapStateToProps = ({ feeds }) => {
  return { ...feeds };
}

export default connect(mapStateToProps, {
  fetchFeeds
})(FeedComponent);