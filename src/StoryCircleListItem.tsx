import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { usePrevious } from './helpers/StateHelpers';
import { IUserStory, StoryCircleListItemProps } from './interfaces';

import DEFAULT_AVATAR from './assets/images/no_avatar.png';

const StoryCircleListItem = ({
  item,
  unPressedBorderColor,
  pressedBorderColor,
  unPressedAvatarTextColor,
  pressedAvatarTextColor,
  avatarSize = 60,
  showText,
  avatarTextStyle,
  handleStoryItemPress,
  avatarImageStyle,
  avatarWrapperStyle,
}: StoryCircleListItemProps) => {
  const [isPressed, setIsPressed] = useState(item?.seen);

  const prevSeen = usePrevious(item?.seen);

  useEffect(() => {
    if (prevSeen != item?.seen) {
      setIsPressed(item?.seen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.seen]);

  const _handleItemPress = (item: IUserStory) => {
    if (handleStoryItemPress) handleStoryItemPress(item);

    setIsPressed(true);
  };

  const avatarWrapperSize = avatarSize + 4;
  const gradientColors = ['#FF40E2', '#FE7DB2', '#FDBF7E'];
  const gradientNoColors = ['#343A40', '#343A40', '#343A40'];
  const gradientPositions = [0, 0.5, 1];
  const gradientStart = {
    x: 0.0,
    y: 0.25,
  };
  const gradientEnd = { x: 0.5, y: 1.0 };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isPressed ? gradientNoColors : gradientColors}
        locations={gradientPositions}
        start={gradientStart}
        end={gradientEnd}
        style={{
          width: avatarWrapperSize + 2,
          height: avatarWrapperSize + 2,
          borderRadius: avatarWrapperSize / 2,
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => _handleItemPress(item)}
          style={[
            styles.avatarWrapper,
            {
              height: avatarWrapperSize,
              width: avatarWrapperSize,
            },
            avatarWrapperStyle,
          ]}
        >
          <Image
            style={[
              {
                height: avatarSize + 2,
                width: avatarSize + 2,
                borderColor: '#191919',
                borderWidth: 2,
                borderRadius: (avatarSize + 2) / 2,
              },
              avatarImageStyle,
            ]}
            source={{ uri: item.user_image }}
            defaultSource={Platform.OS === 'ios' ? DEFAULT_AVATAR : null}
          />
        </TouchableOpacity>
      </LinearGradient>
      {showText && (
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[
            {
              width: avatarWrapperSize,
              ...styles.text,
              ...avatarTextStyle,
            },
            isPressed
              ? { color: pressedAvatarTextColor || undefined }
              : { color: unPressedAvatarTextColor || undefined },
          ]}
        >
          {item.user_name}
        </Text>
      )}
    </View>
  );
};

export default StoryCircleListItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginRight: 10,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#191919',
    borderRadius: 100,
    height: 64,
    width: 64,
  },
  text: {
    marginTop: 3,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 11,
  },
});
