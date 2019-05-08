import React from 'react';
import OCImageView from './OCImageView';
import { Dimensions, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';

const screenWidth = Dimensions.get('window').width;
export default UpcomingEvent = (props) => {
  const eventDate = moment(props.event.startTime);
  const currentDate = moment(new Date());
  const timeRemaining = eventDate.diff(currentDate, 'seconds');
  return (
    <View>
      <OCImageView
        uri={props.event.creatives.bannerUpcoming.url}
        style={{
          width: screenWidth,
          height: 200
        }}
      />
      <CountDown
        until={timeRemaining}
        digitStyle={{
          backgroundColor: 'transparent',
        }}
        digitTxtStyle={{
          color: 'white'
        }}
        timeLabelStyle={{
          color: 'white',
          marginTop: -10
        }}
        size={18}
        style={{
          position: 'absolute',
          top: 140,
          alignSelf: 'center'
        }}
      />
    </View>
  );
}