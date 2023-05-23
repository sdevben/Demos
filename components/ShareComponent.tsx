import React, {Component} from 'react';
import {Alert, Share, View, Button} from 'react-native';

class ShareExample extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  render() {
    return (
      <View style={{marginTop: 50}}>
        <Button onPress={this.onShare} title="Share Text Using Native" />
      </View>
    );
  }
}

export default ShareExample;