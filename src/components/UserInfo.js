import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Colors, Fonts } from '../constants'


const UserInfo = () => {

    const { locale, userInfo, } = useSelector(state => state.SystemReducer)
    return (
        <View style={[styles.card]}>
            <Text style={styles.nameStyle}>
                Malik Ertuğrul
            </Text>
            <Text style={styles.textStyle}>
                E-mail: {userInfo.email}
            </Text>
            <Text style={styles.textStyle}>
                Password: {userInfo.password}
            </Text>
            <Text style={styles.textStyle}>
                Current locale: {locale}
            </Text>

        </View>
    )
}

export default UserInfo

const styles = StyleSheet.create({
    card: {
        paddingBottom: 30,
        marginTop: 34,
        borderBottomWidth: 1,
        borderColor: Colors.primaryGray
    },
    textStyle: {
        color: "#000",
        margin: 5
    }, nameStyle: {
        marginBottom: 32,
        fontSize: 32,
        color: Colors.black
    }

})