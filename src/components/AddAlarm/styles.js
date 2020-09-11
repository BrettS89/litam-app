import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15,
    alignItems: 'center'
  },
  timeView: {
    paddingTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  ampm: {
    flexDirection: 'row',
    marginBottom: 30
  },
  ampmText: {
    fontSize: 30,
    fontWeight: '800',
  },
  daySection: {
    width: '100%',
    paddingHorizontal: 15,
  },
  day: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomColor: colors.white,
    borderBottomWidth: 1
  },
  dayText: {
    fontSize: 14,
    fontWeight: '800',
    marginLeft: 6,
  }
});
