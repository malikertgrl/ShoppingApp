import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from "../constants"

const CustomText = ({ title, fontSize, fontWeight, color, style }) => {


    return <Text style={{ ...style, fontSize: fontSize, fontWeight: fontWeight, color: color ? color : Colors.black }}>{title} </Text>

}

export default CustomText

