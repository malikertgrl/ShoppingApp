import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ children }) => {
    return (
        <View style={styles.Card}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({

    Card: { margin: 24 }
})