import React, { useMemo } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, Modal, View } from 'react-native';
import styles from '../static/styles/editTaskModalStyleSheet';
import BottomSheet from '@gorhom/bottom-sheet';


const EditTaskModal = (properties) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheet>
      </View>
    );
}

export default EditTaskModal