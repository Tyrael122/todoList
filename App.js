import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  tasks = []

  return (
    <View style={styles.container}>

      {/* Today's tasks! */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks!</Text>

        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          <Task text={'Taskweo fjnwe jnfwen fwenfi wenfioewn fowenffrrve rvwerong iieorng 1'} />
          <Task text={'Task 2'} />
        </View>
      </View>

      <KeyboardAvoidingView style={styles.addTaskWrapper} behavior='height'>
        <TextInput style={styles.input} placeholder={'Write a task'} />
        <TouchableOpacity style={styles.addTaskButton}>
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
  items: {

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
