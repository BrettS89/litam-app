import React from 'react';
import { ScrollView, View, FlatList, Keyboard } from 'react-native';
import Txt from '../Txt';
import styles from './styles';
import Input from '../../shared/components/Input';
import Song from './components/song';

const PickSongView = ({ songs, selected, setSelected, searchSongs, play, pause, isPlaying, playingId }) => {
  return (
    <View style={styles.container}>
      <View>
        <Input
          labelText="music"
          placeholder="Search for a song"
          onChangeText={e => searchSongs(e)}
          onSubmitHandler={() => Keyboard.dismiss()}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          keyboardShouldPersistTaps="always"
          data={songs}
          keyExtractor={song => song.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Song
              song={item}
              selected={selected}
              setSelected={setSelected}
              play={play}
              pause={pause}
              isPlaying={isPlaying}
              playingId={playingId}
            />
          )}
        />
      </View>
    </View>
  );
};

export default PickSongView;
