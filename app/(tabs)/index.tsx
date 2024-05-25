import { View, Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';

export default function HomeScreen() {
  const animation = useRef(null);

  return (
    <View style={{ backgroundColor: '#ffff80', flex: 1}}>
      <ThemedView>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 400,
            height: 400,
            position: 'absolute',
          }}
          source={require('../../assets/dog.json')}
        />
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
