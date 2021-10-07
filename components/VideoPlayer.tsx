import React from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';

const VideoPlayer = () => {
  const videoLink = "https://drive.google.com/file/d/1l6fURMcaq9aS4D5xoAnCkmzMzVtkDR7X/view?usp=sharing";
  return (
    <>
      <View>
        <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(videoLink)}></Text>
      </View>
    </>
  )
}

export default VideoPlayer;