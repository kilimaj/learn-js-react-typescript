/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

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
            margin: 10,
            // marginTop: 5,
            // marginLeft: 100,
            // marginRight: 100,
            // marginBottom: 100,
            marginHorizontal: 50,
            marginVertical: 50,
            padding: 10,
            // paddingTop: 50,
            // paddingLeft: 100,
            // paddingRight: 10,
            // paddingBottom: 10,
            paddingHorizontal: 50,
            paddingVertical: 50,
          }}
        >
          <Text>Hi, I just completed my first React Native Assignment</Text>
        </View>
        <View style={{ backgroundColor: 'red' }}>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
