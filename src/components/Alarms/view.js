import React from 'react';
import { View, FlatList } from 'react-native';
import Txt from '../Txt';
import LogoHeader from '../../shared/components/LogoHeader';
import styles from './styles';
import Alarm from './components/alarm';

const AlarmsView = ({ alarms, navigateToPickSong }) => {
  return (
    <View style={styles.container}>
      <LogoHeader />
      <FlatList
        data={alarms}
        keyExtractor={alarm => alarm._id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Alarm alarm={item} navigateToPickSong={navigateToPickSong} />
        )}
      />
    </View>
  );
};

export default AlarmsView;
