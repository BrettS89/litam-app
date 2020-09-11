import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

const LoadingModal = props => {
  const isLoading = useSelector(state => state.app.loading);

  if (!isLoading) return null;
  return (
    <View style={styles.modalContainer}>
      <Spinner />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

export default LoadingModal;
