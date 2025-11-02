// Задача 1: Анимация кнопки
// Сделай так, чтобы при нажатии на кнопку она плавно увеличивалась в размере и затем возвращалась обратно.

import { Pressable, StyleSheet, View, Text } from 'react-native';
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
      <View style={styles.buttonContainer}>
        <Pressable onPress={onAnimate}>
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.buttonText}>Ok Animate</Text>
          </Animated.View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#6366f1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#4f46e5',
    minWidth: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
