import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './static/styles/taskStyleSheet';

const Task = (properties) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.text}>{properties.text}</Text>
            </View>
            <View style={styles.circularItem}></View>
        </View>
    )
}

export default Task