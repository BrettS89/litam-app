import React from 'react';
import { View, FlatList } from 'react-native';
import Txt from '../Txt';
import styles from './styles';
import Input from '../../shared/components/Input';
import Song from './components/song';

const PickSongView = ({ songs }) => {
  return (
    <View style={styles.container}>
      <View>
        <Input labelText="music" placeholder="Search for a song" newStyles={{ marginBottom: 8 }} />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={songs}
          keyExtractor={song => song.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Song song={item} />
          )}
        />
        {/* <Song />
        <Song />
        <Song />
        <Song />
        <Song /> */}
      </View>
    </View>
  );
};

export default PickSongView;
