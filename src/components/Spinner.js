
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { Layout } from '../constants'

const Spinner = () => {
    return <ActivityIndicator style={styles.spinner} size="large" />
}

export default Spinner

const styles = StyleSheet.create({
    spinner: { flex: 1, alignItems: "center", marginTop: Layout.windowHeight / 2 }
})

