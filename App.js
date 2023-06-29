import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import AddTaskComponent from './app/components/AddTaskComponent';
import TaskWrapper from './app/components/TaskWrapper';
import styles from './app/static/styles/appStyleSheet';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();
  const [isCompleted, setIsStriked] = useState(false);

    const completeTask = () => {
        setIsStriked(!isCompleted);
    };

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
  
  const editTask = (index) => {
    let itemsCopy = [...tasks];

    setTask(itemsCopy[index]);
    deleteTask(index);
  }

  return (
    <View style={styles.container}>
      <TaskWrapper onPressDelete={deleteTask} onPressComplete={completeTask} isCompleted={isCompleted} onPressEdit={editTask} tasks={tasks} />

      <AddTaskComponent task={task} setTask={setTask} onPress={addTask} />
    </View>
  );
}