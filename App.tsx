/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AnimationButton } from './components/AnimationButton';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <AnimationButton />
    </SafeAreaProvider>
  );
}

export default App;
