import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15
  },
  alarm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    alignItems: 'center'
  },
  time: {
    flexDirection: 'row',
    width: 87,
  },
  timeText: {
    fontSize: 30,
    marginRight: 5
  },
  ampmText: {
    fontSize: 18,
    paddingBottom: 3,
  },
  days: {
    flexDirection: 'row',
  },
  day: {
    marginHorizontal: 2,
  },
  dayIncluded: {
    marginHorizontal: 2,
    color: colors.main,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addAlarmButtonView: {
    position: 'absolute',
    width: '100%',
    left: '86%',
    right: 0,
    bottom: '3%',
  },
  addAlarmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
    width: 65,
    borderRadius: 50,
    backgroundColor: colors.main,
  }
});
