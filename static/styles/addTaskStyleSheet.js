import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export default styles;