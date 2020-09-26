import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// import Back from 'react-native-vector-icons/FontAwesome5';
import { withNavigation } from 'react-navigation';
import colors from '../styles/colors';
import Txt from '../../components/Txt';

const HeaderBack = ({ navigation, screen, moreStyles={} }) => {
  const songId = useSelector(state => state.songs.songId);

  function renderButton() {
    if (songId) {
      return (
        <TouchableOpacity style={[styles.button, moreStyles]} onPress={() => navigation.navigate(screen)}>
          <Txt moreStyles={styles.nextText}>
            Next
          </Txt>
        </TouchableOpacity>
      );
    }
    return (
      <View style={[styles.button]}>
        <Txt moreStyles={styles.nextText2}>
          Next
        </Txt>
      </View>
    );
  }

  return renderButton();
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.main,
  },
  nextText2: {
    fontSize: 20,
    fontWeight: '800',
    color: '#555555',
  },
});

export default withNavigation(HeaderBack);
