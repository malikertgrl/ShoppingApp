import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from "../components/Input"
import Button from "../components/Button"
import UserInfo from '../components/UserInfo'
import Localepicker from '../components/Localepicker'
import CustomText from '../components/CustomText'
import Card from '../components/Card'
import { Colors, Fonts } from '../constants'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut, setLocale } from "../redux/action"

const Account = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const { locale, userInfo, } = useSelector(state => state.SystemReducer)

    const dispatch = useDispatch()

    //set user Method
    const setUserInfo = () => {
        const data = {
            email: mail,
            password: password,
            locale: locale
        }

        console.log("data", data)
        dispatch(logIn(data))

    }
    //logOut method
    const logOutUser = () => {
        setMail("")
        setPassword("")
        dispatch(logOut())
        dispatch(setLocale("Tr"))

    }


    return (

        <Card >
            <CustomText style={{ marginTop: 62 }} title="Account" fontSize={Fonts.f32} fontWeight={"600"} />
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
                        // UserInfo conponent
                        <UserInfo />


                }

            </View>
            {/* picker component */}
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
                            onPress={() => logOutUser()}
                            title="Log Out"
                            backgroundColor={Colors.white}
                            borderColor={Colors.red}
                            titleColor={Colors.red}
                        />
                    </View>


            }
        </Card>
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
        fontWeight: '400',
        color: Colors.black
    }
})