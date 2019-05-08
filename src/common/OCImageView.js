import React from 'react';
import FastImage from 'react-native-fast-image'

export default OCImageView = (props) => (
    <FastImage
        style={props.style}
        source={{
            uri: props.uri,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
    />
);