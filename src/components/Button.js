import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../constants'


const Button = ({ title, backgroundColor, onPress, titleColor, borderColor, style }) => {
    return (

        <TouchableOpacity onPress={onPress}>
            <View style={[{ borderColor: borderColor, backgroundColor: backgroundColor }, styles.buttonStyle]}>
                <Text style={{ color: titleColor }}>{title} </Text>
            </View>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: "center",
        padding: 18,
        marginTop: 30,
        // margin: 20,
        borderRadius: 12,
    },
    text: {
        // fontSize: 14
    }
})