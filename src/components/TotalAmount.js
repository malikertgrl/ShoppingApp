import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { useSelector, useDispatch } from 'react-redux'
const TotalAmount = () => {

    const { total } = useSelector(state => state.SystemReducer)

    const taxes = 124
    return (
        <View style={styles.Card}>
            <Text style={styles.headerText}>Ürünlerin Toplamı :</Text>
            <Text style={styles.innerText}>Toplam: {total} TL</Text>
            <Text style={styles.innerText}>Vergiler + Kargo: {taxes} TL</Text>
            <Text style={[{ fontSize: 18, fontWeight: '700' }, styles.innerText]}>Genel Toplam: {total + taxes} tl</Text>
        </View>
    )
}

export default TotalAmount

const styles = StyleSheet.create({
    Card: {

        margin: 24
    },
    headerText: {
        fontSize: Fonts.f24,
        color: Colors.black,
        fontWeight: "700",
        marginVertical: 5
    },
    innerText: {
        color: Colors.black,
        fontWeight: "400",
        marginVertical: 5
    }
})