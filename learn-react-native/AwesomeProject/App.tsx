/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { white } from 'colorette';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            borderWidth: 1,
            borderTopWidth: 15,
            borderBottomWidth: 15,
            borderLeftWidth: 10,
            borderRightWidth: 15,
            borderColor: '#15099d',
            backgroundColor: 'white',
            borderRadius: 10,
          }}
        >
          <Text>Hi, I just completed my first React Native Assignment</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
