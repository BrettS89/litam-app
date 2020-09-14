import React from 'react';
import { Modal, View, SafeAreaView, Image } from 'react-native';
import Txt from '../Txt';
import styles from './styles';
import Button from '../../shared/components/Button';

const AlarmModalView = ({ alarmState, alarmState: { alarmMessage }, wakeUp }) => {
  return alarmMessage.user
    ? (
        <Modal visible={alarmState.alarmModalOpen} animated={true} animationType={'slide'}>
          <SafeAreaView style={styles.container}>
            <View style={styles.content}>
              <Image 
                source={{ uri: alarmMessage.user.photo }}
                style={styles.profileImage}
                resizeMode="cover"
              />
              <View style={styles.usernameView}>
                <Txt moreStyles={styles.fromText}>
                  From 
                </Txt>
                <Txt moreStyles={styles.nameText}>
                  {` ${alarmMessage.user.firstName} `} 
                </Txt>
                <Txt moreStyles={styles.nameText}>
                  {alarmMessage.user.lastName}
                </Txt>
              </View>

              <View style={styles.messageView}>
                <Txt moreStyles={styles.messageText}>
                  "{alarmMessage.message}"
                </Txt>
              </View>

              <View style={styles.songView}>
                <Image 
                  source={{ uri: alarmMessage.song.albumArt }}
                  style={styles.albumArt}
                  resizeMode="cover"
                />
                <View>
                  <Txt moreStyles={styles.songText}>
                    {alarmMessage.song.song}
                  </Txt>
                  <Txt moreStyles={styles.artistText}>
                    {alarmMessage.song.artist}
                  </Txt>
                </View>
              </View>
              
            </View>
            <View style={styles.buttonView}>
              <Button 
                buttonStyle={styles.buttonStyles}
                text="Wake up"
                onPress={wakeUp}
              />
            </View>
          </SafeAreaView>
        </Modal>
      )
    : null;
};

export default AlarmModalView;
