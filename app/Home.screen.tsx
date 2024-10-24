import { StyleSheet, StatusBar } from 'react-native';

import { Text, View, TouchableWithoutFeedback } from '@/components';
import { generateRandomRGBColor, getTextColorFromRGB } from '@/utils';
import { useState } from 'react';

export default function HomeScreen() {
  const [color, setColor] = useState(generateRandomRGBColor);
  const textColor = getTextColorFromRGB(color);
  const statusBarStyle =
    textColor === 'white' ? 'light-content' : 'dark-content';

  const onContainerPress = () => {
    setColor(generateRandomRGBColor());
  };

  return (
    <TouchableWithoutFeedback onPress={onContainerPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <StatusBar barStyle={statusBarStyle} />

        <Text style={[styles.greeting, { color: textColor }]}>Hello there</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 50,
  },
});
