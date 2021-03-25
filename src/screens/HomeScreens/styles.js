import {Platform, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
export default StyleSheet.create({
  banner: {
    flex: 1,
    flexDirection: 'row',
    // marginHorizontal: 23,
    // marginTop: 16,
    // borderRadius: 8,
    // borderColor: 'rgba(128,128,128,0.2)',
    // borderWidth: 1,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: 'center',
  },
});