import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15,
  },
  alarm: {
    marginVertical: 15,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  userPhoto: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 13
  },
  username: {
    fontWeight: '800',
    fontSize: 18,
    marginBottom: 3,
    color: colors.secondary
  },
  alarmText: {
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 3
  },
  cta: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 3,
    color: colors.white,
    fontStyle: 'italic'
  }
});
