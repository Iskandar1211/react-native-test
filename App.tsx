/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';

import { AnimationButton } from './components/AnimationButton';
import Providers from './providers/Providers';
import WorkingByRestApi from './components/WorkingByRestApi';

function App() {
  return (
    <Providers>
      <StatusBar />
      <AnimationButton />
      <WorkingByRestApi />
    </Providers>
  );
}

export default App;
