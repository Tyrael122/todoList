import { KeyboardAvoidingView, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';
import styles from './static/styles/appStyleSheet';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState();

  const handleAddTask = () => {
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

      <KeyboardAvoidingView style={styles.addTaskWrapper} behavior='height'>
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity style={styles.addTaskButton}
          onPress={handleAddTask}>
          <Text style={styles.buttonTask}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}