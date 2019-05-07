import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Icon } from "react-native-elements";

export default (IconButton = props => {
  return (
    <TouchableWithoutFeedback
      onPress={props.onPress}
      style={{
        alignSelf: "flex-end"
      }}
    >
      <View
        style={{
          padding: 10
        }}
      >
        <Icon
          name={props.iconName}
          color={props.iconColor}
          type={props.iconFamily}
        />
      </View>
    </TouchableWithoutFeedback>
  );
});
