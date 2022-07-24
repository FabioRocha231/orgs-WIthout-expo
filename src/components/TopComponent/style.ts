import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;

export const TopComponentStyles = StyleSheet.create({
  header: {
    width: '100%',
    height: (578 / 768) * width,
  },
  title: {
    width: '100%',
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    color: '#fff',
    padding: 16,
  },
});
