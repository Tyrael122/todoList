import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import styles from '../static/styles/editTaskModalStyleSheet';
import AddTaskComponent from '../components/AddTaskComponent';
import { BottomSheet } from 'react-native-btr';

const EditTaskModal = (properties) => {
  const hideBottomSheet = () => {
    properties.setVisible(false);
  };

  return (
    <BottomSheet
      visible={properties.visible}
      onBackButtonPress={hideBottomSheet}
      onBackdropPress={hideBottomSheet}
    >
      <View style={styles.bottomNavigationView}>
        <AddTaskComponent
          style={styles.addTaskWrapper}
          task={properties.task}
          setTask={properties.setTask}
          onPress={properties.saveEditedTask}
        />
      </View>
    </BottomSheet>
  );
}

export default EditTaskModal