import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles';
import Icon from 'react-native-vector-icons/Entypo';
import Trash from 'react-native-vector-icons/FontAwesome5';
import Txt from '../../Txt';
import colors from '../../../shared/styles/colors';

const DeleteAlarmModal = ({ modalOpen, toggleModal, deleteAlarm }) => {
  return (
    <Modal
      visible={modalOpen}
      transparent
      animationType="fade"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>
          <View style={styles.exit}>
            <TouchableOpacity onPress={() => toggleModal(null)}>
              <Icon name="cross" size={32} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.deleteButton} onPress={deleteAlarm}>
            <Trash name="trash-alt" size={22} color={colors.red} />
            <Text style={styles.deleteText}>
              {' Delete alarm'}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default DeleteAlarmModal;
