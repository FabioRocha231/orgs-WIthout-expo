import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Cest} from './src/screens/Cest';
import {CestData} from './src/mocks/CestData';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Cest data={CestData} />
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
