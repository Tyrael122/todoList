import { StyleSheet } from 'react-native';

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

export default styles;