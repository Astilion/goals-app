import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

type GoalInputProps = {
  onAddGoal: (enteredGoalText: string) => void;
  visible: boolean;
};
function GoalInput({ onAddGoal, visible }: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
