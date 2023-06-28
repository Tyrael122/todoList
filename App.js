import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED', 
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  addTaskWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    bottom: 40,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: 246,
    height: 45,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    marginLeft: 20,
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },
  addTaskButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 52,
    marginRight: 29,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  buttonTask: {
    fontSize: 30,
    color: '#C0C0C0',
  }
});
