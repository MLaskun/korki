import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const InputBar = (props:{textChange:(todoinput: string)=> void; todoInput?: string}) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                onChangeText={(todoInput) => props.textChange(todoInput)}
                value={props.todoInput}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#171717',
        shadowOpacity: .1
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#FF123a',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
    }
})

export default InputBar;