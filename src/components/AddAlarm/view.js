import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Txt from '../Txt';
import TimeInput from './components/timeInput';
import Day from './components/day';
import colors from '../../shared/styles/colors';
import Button from '../../shared/components/Button';

const AddAlarmView = ({ setHour, setMinutes, ampm, setAmpm, days, setRepeat }) => {
  function renderAmpm(x) {
    if (ampm === x) {
      return (
        <TouchableOpacity>
          <Txt moreStyles={styles.ampmText}>{x}</Txt>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => setAmpm(x)}>
        <Txt moreStyles={{...styles.ampmText, color: 'gray' }}>{x}</Txt>
      </TouchableOpacity>
    );
  }

  function renderDaysToRepeat() {
    return days.map(d => {
      return (
        <Day day={d} key={d.day} setRepeat={setRepeat} />
      );
    });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
      <View style={styles.timeView}>
        <TimeInput placeholder="8" onChangeText={e => setHour(e)} autoFocus />
        <Txt moreStyles={{ fontSize: 52, fontWeight: '800', paddingBottom: 10 }}>:</Txt>
        <TimeInput placeholder="00" onChangeText={e => setMinutes(e)} />
      </View>
      <View style={styles.ampm}>
        {renderAmpm('AM')}
        <Txt moreStyles={[styles.ampmText, { color: colors.main }]}> / </Txt>
        {renderAmpm('PM')}
      </View>
      <View style={styles.daySection}>
        {renderDaysToRepeat()}
      </View>
      <View style={styles.buttonView}>
        <Button text="Add alarm" buttonStyle={{ width: 160 }} />
      </View>
    </ScrollView>
  );
};

export default AddAlarmView;
