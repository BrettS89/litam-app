import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 15
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
  },

  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center'
  },
  modalContentContainer: {
    width: '70%',
    backgroundColor: '#e0e0e0',
    padding: 20,
    paddingTop: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  exit: {
    width: '100%',
    alignItems: 'flex-end',
    height: 27
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  deleteText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.red,
  }
  // modalTitle: {
  //   fontWeight: '600',
  //   fontSize: 20,
  //   textAlign: 'center',
  //   marginBottom: 30
  // },
  // tokensIcon: {
  //   marginVertical: 25,
  // },
  // noThanksText: {
  //   fontWeight: '700',
  //   color: colors.main,
  //   fontSize: 15,
  // },


});
