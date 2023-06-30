import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED', 
    },
    strikedText: {
        textDecorationLine: 'line-through',
    },
    addTaskWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: '100%',
        bottom: 40,
        alignItems: 'center',
    },
});

export default styles;