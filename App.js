import { View, Keyboard } from 'react-native';
import AddTaskComponent from './components/AddTaskComponent';
import React, { useState } from 'react';
import styles from './static/styles/appStyleSheet';
import TaskWrapper from './components/TaskWrapper';

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
      <TaskWrapper deleteTask={deleteTask} tasks={tasks} />

      <AddTaskComponent task={task} setTask={setTask} addTask={addTask} />
    </View>
  );
}