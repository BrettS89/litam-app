import { Audio } from 'expo-av';

Audio.setAudioModeAsync({ 
  playsInSilentModeIOS: true,
  staysActiveInBackground: true,
  allowsRecordingIOS: false,
  interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
  shouldDuckAndroid: false,
  interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
  playThroughEarpieceAndroid: false,
});

export default new Audio.Sound();
