import React, { Component } from "react";
import { StatusBar, Platform, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import IconButton from "./common/IconButton";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.onMenuPress = this.onMenuPress.bind(this);
    this.onSearchPress = this.onSearchPress.bind(this);
  }

  onMenuPress() {
    this.props.navigation.openDrawer();
  }

  onSearchPress() {
    alert('Coming soon !!!')
  }

  render() {
    return (
      <View>
        <StatusBar translucent={true} backgroundColor={"black"} />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "black",
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "black",
            justifyContent: 'space-between'
          }}
        >
          <IconButton
            iconName="menu"
            iconColor="white"
            iconFamily="material"
            onPress={this.onMenuPress}
          />
          <IconButton
            iconName="search"
            iconColor="white"
            iconFamily="material"
            onPress={this.onSearchPress}
          />
        </View>
      </View>
    );
  }
}

export default HeaderComponent;
