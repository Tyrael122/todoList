import React from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import styles from '../static/styles/addTaskStyleSheet';

const AddTaskComponent = (properties) => {
    return (
      <KeyboardAvoidingView style={properties.style} behavior="height">
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={properties.task}
          onChangeText={(text) => properties.setTask(text)}
        />
        <TouchableOpacity
          style={styles.addTaskButton}
          onPress={properties.onPress}
        >
          <Text style={styles.buttonTask}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

export default AddTaskComponent