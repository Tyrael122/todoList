import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemLeft: {
        flexDirection: 'row',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    text: {
        maxWidth: '85%',
    },
    circularItem: {
        height: 12,
        width: 12,
        borderRadius: 5,
        borderColor: '#55BCF6',
        borderWidth: 2,
    },
})

export default Task