import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 15,
    // alignItems: 'center'
  },
  timeView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0
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
    marginBottom: 27
  },
  day: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: colors.white,
    borderBottomWidth: 1
  },
  dayText: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 6,
  },
  buttonView: {
    marginBottom: 70,
  },
  public: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 6,
  },
  publicText: {
    fontSize: 18,
    fontWeight: '800'
  },
  addSongButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 27
  },
  songText: {
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 9
  }
});
