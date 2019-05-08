import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Card, Icon } from "react-native-elements";
import moment from 'moment';
import OCImageView from "./OCImageView";

export default (YoutubeRowComponent = props => {
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
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <Icon name="star" color="yellow" type="material" />
        <Text>{props.youtubeItem.data.title}</Text>
      </View>
      <OCImageView
        uri={props.youtubeItem.data.featured_image.url}
        style={{
          width: Dimensions.get("window").width - 20,
          height: 200
        }}
      />
      <Text
        style={{
          justifyContent: "flex-end",
          fontSize: 10,
          marginTop: 5
        }}
      >
        {moment(props.youtubeItem.data.published_date).fromNow()}
      </Text>
      <Text
        numberOfLines={2}
        style={{
          marginTop: 5
        }}
      >
        {props.youtubeItem.data.description}
      </Text>
    </Card>
  );
});
