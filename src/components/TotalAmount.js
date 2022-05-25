import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'

const TotalAmount = () => {
    return (
        <View style={styles.Card}>
            <Text style={styles.headerText}>Ürünlerin Toplamı :</Text>
            <Text style={styles.innerText}>Toplam:</Text>
            <Text style={styles.innerText}>Vergiler + Kargo:</Text>
            <Text style={styles.innerText}>Genel Toplam:</Text>
        </View>
    )
}

export default TotalAmount

const styles = StyleSheet.create({
    Card: {

        margin: 24
    },
    headerText: { fontSize: Fonts.f24, color: Colors.black, fontWeight: "700", marginVertical: 5 },
    innerText: { color: Colors.black, fontWeight: "400", marginVertical: 5 }
})