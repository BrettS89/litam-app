import React from 'react';
import { View, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import Txt from '../Txt';
import TimeInput from './components/timeInput';
import Day from './components/day';
import colors from '../../shared/styles/colors';
import Button from '../../shared/components/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

const AddAlarmView = ({ setHour, setMinutes, ampm, setAmpm, days, setRepeat, addAlarm, publicOrPrivate, setPublicOrPrivate, song, navigate }) => {
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

  function renderPublic(x) {
    if (publicOrPrivate === x) {
      return (
        <TouchableOpacity style={styles.public}>
          <Icon name="earth" size={16} color={colors.white} style={styles.icon} />
          <Txt moreStyles={styles.publicText}>{x}</Txt>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.public} onPress={() => setPublicOrPrivate(x)}>
        <Icon name="earth" size={16} color={'gray'} style={styles.icon} />
        <Txt moreStyles={{...styles.publicText, color: 'gray' }}>{x}</Txt>
      </TouchableOpacity>
    );
  }

  function renderPrivate(x) {
    if (publicOrPrivate === x) {
      return (
        <TouchableOpacity style={styles.public}>
          <Icon2 name="user" size={16} color={colors.white} style={styles.icon} />
          <Txt moreStyles={styles.publicText}>{x}</Txt>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity style={styles.public} onPress={() => setPublicOrPrivate(x)}>
        <Icon2 name="user" size={16} color={'gray'} style={styles.icon} />
        <Txt moreStyles={{...styles.publicText, color: 'gray' }}>{x}</Txt>
      </TouchableOpacity>
    );
  }

  function renderSong() {
    if (song) {
      return (
        <View style={styles.addSongButton}>
          <Icon2 name="music" size={22} color={colors.main} />
          <Txt moreStyles={styles.songText}>
            Song added
          </Txt>
        </View>
      );
    }
    return (
      <TouchableOpacity onPress={() => navigate('PickSong2')} style={styles.addSongButton}>
        <Icon2 name="music" size={22} color={colors.main} />
        <Txt moreStyles={styles.songText}>
          Add default song for alarm
        </Txt>
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
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
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

      <View style={styles.ampm}>
        {renderPublic('Public')}
        <Txt moreStyles={[styles.ampmText, { color: colors.main }]}> / </Txt>
        {renderPrivate('Private')}
      </View>

      <View style={styles.daySection}>
        {renderDaysToRepeat()}
      </View>

      {renderSong()}

      <View style={styles.buttonView}>
        <Button text="Add alarm" buttonStyle={{ width: 160 }} onPress={addAlarm} />
      </View>
    </ScrollView>
  );
};

export default AddAlarmView;
