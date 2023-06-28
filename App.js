import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Task from './components/Task';
import AddTaskComponent from './components/AddTaskComponent';
import React, { useState } from 'react';
import styles from './static/styles/appStyleSheet';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();

  const addTask = () => {
    Keyboard.dismiss();
    setTask(null);

    setTasks([...tasks, task]);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);

    setTasks(itemsCopy);
  }

  return (
    <View style={styles.container}>

      <View name={'taskWrapper'} style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks!</Text>

        <View style={styles.items}>
          {
            tasks.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <AddTaskComponent task={task} setTask={setTask} addTask={addTask} />
    </View>
  );
}