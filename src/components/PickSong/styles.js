import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  song: {
    flexDirection: 'row',
    paddingVertical: 4
  },
  albumArtContainer: {
    height: 80,
    width: 80,
    borderRadius: 4,
    marginRight: 10,
  },
  albumArt: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  actionButton: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    flexWrap: 'wrap',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 5,
  },
  artist: {
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: '700'
  },
});
