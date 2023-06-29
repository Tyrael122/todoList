import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import AddTaskComponent from './app/components/AddTaskComponent';
import EditTaskModal from './app/components/EditTaskModal';
import TaskWrapper from './app/components/TaskWrapper';
import styles from './app/static/styles/appStyleSheet';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState();
  const [isEditing, setEditionMode] = useState(true);

    const completeTask = (index) => {
      let itemsCopy = [...tasks];

      itemsCopy[index].isCompleted = !itemsCopy[index].isCompleted;
      setTasks(itemsCopy);
    };

  const addTask = () => {
    Keyboard.dismiss();
    setTaskText(null);

    let task = {text: taskText, isCompleted: false};

    setTasks([...tasks, task]);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);

    setTasks(itemsCopy);
  }
  
  const editTask = (index) => {
    let itemsCopy = [...tasks];

    setEditionMode(true);

    setTaskText(itemsCopy[index].text);
    deleteTask(index);
  }

  return (
    <View style={styles.container}>
      <TaskWrapper onPressDelete={deleteTask} onPressComplete={completeTask} onPressEdit={editTask} tasks={tasks} />

      <AddTaskComponent task={taskText} setTask={setTaskText} onPress={addTask} />

      <EditTaskModal visible={isEditing} />
    </View>
  );
}