/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar } from 'react-native';

import Navigation from './navigation/Navigation';
import Providers from './providers/Providers';

function App() {
  return (
    <Providers>
      <StatusBar />
      <Navigation/>
    </Providers>
  );
}

export default App;
