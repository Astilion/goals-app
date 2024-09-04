import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

type Goal = {
  text: string;
  id: string
}

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('')
  const [courseGoals, setCourseGoals] = useState<Goal[]>([])

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals} renderItem={
            itemData => {
              return (<GoalItem text={itemData.item.text} />)
            }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },

});
