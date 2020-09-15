import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'debounce';
import View from './view';
import { GET_SONGS, SET_SONG_ID } from '../../redux/actions';

const PickSong = props => {
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();
  
  const [selected, setSelected] = useState(null);  
  const searchSongsAction = debounce((e) => dispatch({ type: GET_SONGS, payload: e }), 300);

  function searchSongs(e) {
    searchSongsAction(e);
  }

  function setSelectedSong(songId) {
    dispatch({ type: SET_SONG_ID, payload: songId });
    setSelected(songId);
  }

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);

  return (
    <View
      songs={songs}
      selected={selected}
      setSelected={setSelectedSong}
      searchSongs={searchSongs}
    />
  );
};

export default PickSong;
