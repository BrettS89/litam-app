import { StyleSheet } from 'react-native';
import colors from '../../shared/styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black, 
    flex: 1,
  },
  content: {
    padding: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    height: 176,
    borderRadius: 88,
    width: 176,
    marginBottom: 15,
  },
  usernameSection: {
    marginBottom: 40,
  },
  usernameView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5
  },
  messageFrom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  fromText: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '800',
  },
  nameText: {
    fontSize: 20,
    fontWeight: '800',
  },
  messageView: {
    width: '100%',
    marginBottom: 40,
  },
  messageText: {
    fontWeight: '500',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  songView: {
    width: '100%',
    flexDirection: 'row'
  },
  albumArt: {
    width: 120,
    height: 120,
    borderRadius: 4,
    marginBottom: 0,
    marginRight: 10
  },
  songContent: {
    flex: 1,
    justifyContent: 'center'
  },
  songText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  artistText: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  buttonView: {
    alignItems: 'center',
  },
  buttonStyles: {
    width: 200,
    height: 45
  }
});
