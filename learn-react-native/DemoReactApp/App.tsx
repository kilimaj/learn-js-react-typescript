/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyText from './components/MyText/MyText';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text
            style={{ color: 'yellow', backgroundColor: 'blue', height: 100 }}
          >
            This is going to be our header container
          </Text>
        </View>
        <View style={{ backgroundColor: 'gray' }}>
          <MyText />
          <MyText />
          <MyText />
        </View>
        <View>
          <Text style={{ color: 'blue' }}>All rights reserved</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
