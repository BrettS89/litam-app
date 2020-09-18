import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'debounce';
import View from './view';
import { GET_SONGS, SET_SONG_ID } from '../../redux/actions';
import audio from '../../utils/Audio';

const PickSong = props => {
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingId, setPlayingId] = useState(null);

  const searchSongsAction = debounce((e) => dispatch({ type: GET_SONGS, payload: e }), 400);

  function searchSongs(e) {
    searchSongsAction(e);
  }

  function setSelectedSong(songId) {
    dispatch({ type: SET_SONG_ID, payload: songId });
    setSelected(songId);
  }

  async function play(uri, id) {
    await audio.unloadAsync();
    await audio.loadAsync({ uri });
    await audio.playAsync();
    await audio.setIsLoopingAsync(true);
    setIsPlaying(true);
    if (id !== playingId) setPlayingId(id);
  }

  async function pause() {
    await audio.pauseAsync();
    setIsPlaying(false);
  }

  useEffect(() => {
    dispatch({ type: GET_SONGS });

    return () => {
      audio.unloadAsync();
    }
  }, []);

  return (
    <View
      songs={songs}
      selected={selected}
      setSelected={setSelectedSong}
      searchSongs={searchSongs}
      isPlaying={isPlaying}
      playingId={playingId}
      play={play}
      pause={pause}
    />
  );
};

export default PickSong;
