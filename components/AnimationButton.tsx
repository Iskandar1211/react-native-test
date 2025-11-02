// Задача 1: Анимация кнопки
// Сделай так, чтобы при нажатии на кнопку она плавно увеличивалась в размере и затем возвращалась обратно.

import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function AnimationButton() {
  const safeAreaInsets = useSafeAreaInsets();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const onAnimate = () => {
    scale.value = withSpring(1.2, {}, () => {
      scale.value = withSpring(1);
    });
  };

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <Pressable onPress={onAnimate}>
        <Animated.View style={[styles.button, animatedStyle]}>
          <Animated.Text>Ok Animate</Animated.Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {},
});
