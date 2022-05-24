import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from "../components/Input"
import Button from "../components/Button"
import UserInfo from '../components/UserInfo'
import Localepicker from '../components/Localepicker'
import { Colors, Fonts } from '../constants'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut, setLocale } from "../redux/action"

const Account = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const { locale, userInfo, } = useSelector(state => state.SystemReducer)
    // const [isLogin, setIsLogin] = useState = (false)

    const dispatch = useDispatch()

    const setUserInfo = () => {
        const data = {
            email: mail,
            password: password,
            locale: locale
        }

        console.log("data", data)
        dispatch(logIn(data))

    }

    const log_out = () => {
        setMail("")
        setPassword("")
        dispatch(logOut())
        dispatch(setLocale("Tr"))

    }
    useEffect(() => {
        console.log("değişti", userInfo)
    }, [userInfo])


    return (

        <View style={styles.Card}>
            <Text style={styles.text}>Account</Text>
            <View>
                {
                    !userInfo.email ?
                        <View>
                            <Input
                                placeholderText="E-mail"
                                value={mail}
                                onChangeText={(text) => setMail(text)} />
                            <Input
                                placeholderText="Password"
                                value={password}
                                onChangeText={(text) => setPassword(text)} />
                        </View>
                        :
                        <UserInfo />


                }

            </View>
            <Localepicker />

            {
                !userInfo.email ?
                    <Button
                        onPress={() => setUserInfo()}
                        title="Sign Up"
                        backgroundColor={mail == "" ? Colors.primaryGray : Colors.red}
                        titleColor={Colors.white}
                        borderColor={mail == "" ? Colors.primaryGray : Colors.red}
                    />
                    :
                    <View style={{ marginTop: 200 }}>
                        <Button
                            onPress={() => log_out()}
                            title="Log Out"
                            backgroundColor={Colors.white}
                            borderColor={Colors.red}
                            titleColor={Colors.red}
                        />
                    </View>


            }
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    Card: {
        margin: 24,
    },
    text: {
        marginTop: 62,
        fontSize: 32,
        // fontFamily: "Nunito Sans",
        fontWeight: '400',
        color: Colors.black
    }
})