import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut, setLocale } from "../redux/action"
import { Colors } from '../constants';


const Localepicker = () => {
    const { locale, userInfo, } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch()
    return (
        <View style={styles.pickerStyle}>
            <Picker
                selectedValue={locale}
                onValueChange={(itemValue, itemIndex) =>
                    dispatch(setLocale(itemValue))
                }>
                <Picker.Item label="Türkçe" value="Tr" />
                <Picker.Item label="English" value="En" />
            </Picker>
        </View>
    )
}

export default Localepicker

const styles = StyleSheet.create({
    pickerStyle: {
        marginTop: 25, borderBottomWidth: 2, borderBottomColor: Colors.primaryGray
    }
})