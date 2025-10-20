/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyText from './components/MyText/MyText';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ position: 'relative', backgroundColor: 'green' }}>
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
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Text>Hi, I just completed my first React Native Assignment</Text>
          </View>
          <View
            style={{
              backgroundColor: 'red',
              position: 'absolute',
              top: 10,
              left: 5,
              right: 10,
              bottom: 10,
              zIndex: 1,
            }}
          >
            <Text>Hello World!</Text>
          </View>
        </View>
        <Text
          style={{
            color: '#ff0000',
            fontFamily: 'Arial',
            fontSize: 20,
            fontStyle: 'italic',
            fontWeight: '100',
            letterSpacing: 10,
            lineHeight: 50,
            textAlign: 'right',
          }}
        >
          Text Styling
        </Text>

        <MyText />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
