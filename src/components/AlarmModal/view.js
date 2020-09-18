import React from 'react';
import { Modal, View, SafeAreaView, Image } from 'react-native';
import Txt from '../Txt';
import styles from './styles';
import Button from '../../shared/components/Button';
import { USER_DEFAULT } from '../../../assets/images/';

const AlarmModalView = ({ alarmState, alarmState: { alarmMessage }, wakeUp }) => {
  function renderMessage() {
    if (alarmMessage.message) {
      return (
          <View style={styles.messageView}>
            <Txt moreStyles={{ fontSize: 13, fontWeight: '700', textAlign: 'center', marginBottom: 7 }}>
              Message from {alarmMessage.user.firstName}:
            </Txt>
            <Txt moreStyles={styles.messageText}>
              "{alarmMessage.message}"
            </Txt>
          </View>
      );
    }
  }

  return alarmMessage.user
    ? (
        <Modal visible={alarmState.alarmModalOpen} animated={true} animationType={'slide'}>
          <SafeAreaView style={styles.container}>
            <View style={styles.content}>
              <Image 
                source={{ uri: alarmMessage.user.photo }}
                style={styles.profileImage}
                defaultSource={USER_DEFAULT}
                resizeMode="cover"
              />

              <View style={styles.usernameSection}>
                <View style={styles.messageFrom}>
                  <Txt moreStyles={styles.fromText}>
                    Song sent from
                  </Txt>

                </View>
                <View style={styles.usernameView}>
                  <Txt moreStyles={styles.nameText}>
                    {`${alarmMessage.user.firstName} `} 
                  </Txt>
                  <Txt moreStyles={styles.nameText}>
                    {alarmMessage.user.lastName}
                  </Txt>
                </View>
              </View>

              {renderMessage()}

              <View style={styles.songView}>
                <Image 
                  source={{ uri: alarmMessage.song.albumArt }}
                  style={styles.albumArt}
                  resizeMode="cover"
                />
                <View style={styles.songContent}>
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
