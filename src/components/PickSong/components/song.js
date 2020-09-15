import React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import Txt from '../../Txt';
import styles from '../styles';
import Player from 'react-native-vector-icons/FontAwesome';
import Pause from 'react-native-vector-icons/MaterialIcons';

const Song = ({ song: { song, artist, albumArt, audio }, play, pause, playing, playingId }) => {
  const renderTitle = () => {
    return song.length > 37
      ? `${song.substring(0, 37)}...`
      : song;
  };

  const renderArtist = () => {
    return artist.length > 50
      ? `${artist.substring(0, 48)}...`
      : artist;
  };

  const renderPlayOrPause = () => {
    if (playing && playingId === song._id) {
      return  (
        <TouchableOpacity style={styles.actionButton} onPress={() => pause()}>
          <Pause name="pause-circle-filled" size={60} color={'rgba(255, 255, 255, 0.6)'} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => play({ _id: song._id, audio, genre, playlist_id: _id })}
      >
        <Player name="play-circle" size={55} color={'rgba(255, 255, 255, 0.7)'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.song}>
      <View style={{ flexDirection: 'row', width: '80%'  }}>
        <View style={styles.albumArtContainer}>
          <ImageBackground
            style={styles.albumArt}
            source={{ uri: albumArt }}
            imageStyle={{ borderRadius: 4 }}
          >
            {renderPlayOrPause()}
          </ImageBackground>
        </View>
        <View style={styles.textContainer}>
          <Txt moreStyles={styles.title}>{renderTitle()}</Txt>
          <Txt moreStyles={styles.artist}>{renderArtist()}</Txt>
        </View>
      </View>
    </View>
  );
};

export default Song;
