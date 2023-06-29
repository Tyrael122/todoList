import React from 'react';
import { Text, ScrollView, View} from 'react-native';
import Task from './Task';
import styles from '../static/styles/taskWrapperStyleSheet';

const TaskWrapper = (properties) => {
    return (
      <View name={'taskWrapper'} style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks!</Text>
        <ScrollView style={styles.items}>
          {
            properties.tasks.map((item, index) => {
              return (
                <Task
                  text={item}
                  key={index}
                  onPressComplete={() => properties.onPressComplete(index)}
                  isCompleted={properties.isCompleted}
                  onPressDelete={() => properties.onPressDelete(index)}
                  onPressEdit={() => properties.onPressEdit(index)}
                />
              );
            })
          }
        </ScrollView>
      </View>
    );
}

export default TaskWrapper