import React from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import Task from './Task';
import styles from '../static/styles/taskWrapperStyleSheet';

const TaskWrapper = (properties) => {
    return (
      <View name={'taskWrapper'} style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks!</Text>

        <View style={styles.items}>
          {
            properties.tasks.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => properties.deleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    );
}

export default TaskWrapper