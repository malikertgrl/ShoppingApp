import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants'

const Input = ({ placeholderText, value, onChangeText }) => {
    const [focus, setFocus] = useState(false)


    const reverseFocus = () => {
        setFocus(prevState => !prevState)
    }
    return (
        <View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={focus ? styles.onFocus : styles.input}
                placeholder={placeholderText}
                onFocus={() => reverseFocus()}
                onEndEditing={() => reverseFocus()}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginTop: 32,
        padding: 10,
        borderBottomWidth: 1,
    },
    onFocus: {
        height: 50,
        marginTop: 32,
        padding: 10,
        borderBottomColor: Colors.PrimaryTurquoise,
        borderBottomWidth: 2,

    }
})