import { StyleSheet, View, Text, Pressable } from 'react-native'

type GoalItemProps = {
    text: string;
    onDeleteItem: (id:string) => void;
    id: string;
};

function GoalItem({text, onDeleteItem, id}: GoalItemProps) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            android_ripple={{color: '#210644'}} 
            onPress={() => onDeleteItem(id)}
            style={({pressed}) => pressed && styles.pressedItem}
            >
            <Text style={styles.goalText} >{text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',

    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
})