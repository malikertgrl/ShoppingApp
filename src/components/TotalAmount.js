import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../constants'
import { useSelector, useDispatch } from 'react-redux'
import CustomText from "./CustomText"
const TotalAmount = () => {

    const { total } = useSelector(state => state.SystemReducer)

    const taxes = 124
    return (
        <View >
            <CustomText style={{ marginVertical: 20 }} title="Ürünlerin Toplamı :" fontSize={Fonts.f24} fontWeight={"700"} />
            <CustomText style={styles.text} title={`Toplam : ${total} TL`} fontSize={Fonts.f16} fontWeight={"400"} />
            <CustomText style={styles.text} title={`Vergiler + Kargo: ${taxes} TL`} fontSize={Fonts.f16} fontWeight={"400"} />
            <CustomText style={styles.text} title={`Genel Toplam: ${total + taxes} TL`} fontSize={Fonts.f18} fontWeight={"700"} />

        </View>
    )
}

export default TotalAmount

const styles = StyleSheet.create({

    text: {

        marginVertical: 5
    },

})