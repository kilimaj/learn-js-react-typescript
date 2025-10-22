/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Item from './components/Item/item';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Item name={'Table'} price={20} />
        <Item name={'Chair'} price={20} />
        <Item name={'Desk'} price={50} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
