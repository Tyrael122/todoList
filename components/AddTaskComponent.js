import React from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import styles from '../static/styles/addTaskStyleSheet';

const Task = (properties) => {
    return (
      <KeyboardAvoidingView style={styles.addTaskWrapper} behavior="height">
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={properties.task}
          onChangeText={(text) => properties.setTask(text)}
        />
        <TouchableOpacity style={styles.addTaskButton} onPress={properties.addTask}>
          <Text style={styles.buttonTask}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

export default Task