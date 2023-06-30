import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  addTaskWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "100%",
    bottom: 40,
    alignItems: "center",
  },
});

export default styles;