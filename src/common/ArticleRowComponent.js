import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Buffer } from 'buffer';
import moment from 'moment';
import OCImageView from './OCImageView';

export default ArticleRowCompoent = (props) => {
  return (
    <Card
      containerStyle={{
        padding: 5,
        margin: 5
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}
      >
        <OCImageView
          uri={props.article.data.featured_image.url}
          style={{
            width: 100,
            height: 100
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: 'space-between'
          }}
        >
          <View
            style={{
              flexDirection:'row'
            }}
          >
          <Text
            style={{
              alignSelf: 'flex-start',
              fontWeight: '600',
              flex: 1,
              flexWrap: 'wrap',
            }}
            numberOfLines={3}
          >{props.article.data.title}</Text>
          </View>
            <Text
              style={{
                justifyContent: 'flex-end',
                fontSize: 10
              }}
            >
              {moment(props.article.data.published_date).fromNow()}
            </Text>
        </View>
      </View>
      <Text
        style={{
          flex: 1,
          marginTop: 5
        }}
      >
        {decodeURIComponent(props.article.data.description)}
      </Text>
    </Card>
  );
}