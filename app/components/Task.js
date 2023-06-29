import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../static/styles/taskStyleSheet';
import appStyles from '../static/styles/appStyleSheet';


const Task = (properties) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity
            style={styles.square}
            onPress={properties.onPressComplete}
          />
          <Text
            style={[
              styles.text,
              properties.isCompleted && appStyles.strikedText,
            ]}
            onPress={properties.onPressEdit}
          >
            {properties.text}
          </Text>
        </View>
        <TouchableOpacity onPress={properties.onPressDelete}>
          <View style={styles.circularItem}></View>
        </TouchableOpacity>
      </View>
    );
}

export default Task