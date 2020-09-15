import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import View from './view';
import { GET_SONGS } from '../../redux/actions';

const PickSong = props => {
  const songs = useSelector(state => state.songs.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);

  return (
    <View
      songs={songs}
    />
  );
};

export default PickSong;
