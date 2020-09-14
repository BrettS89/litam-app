import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { useDispatch } from 'react-redux';
import { CHECK_IS_LOGGED_IN } from '../../redux/actions';

const Auth = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CHECK_IS_LOGGED_IN, payload: navigate });
  }, []);

  function navigate (screen) {
    props.navigation.navigate(screen);
  }

  return (
    <AppLoading />
  );
}

export default Auth;
