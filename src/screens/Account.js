import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Input from "../components/Input"
import Button from "../components/Button"
import { Colors, Fonts } from '../constants'
import { Picker } from '@react-native-picker/picker';
import { useSelector, useDispatch } from 'react-redux'

const Account = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [selectedLanguage, setSelectedLanguage] = useState();
    const { locale, userInfo } = useSelector(state => state.SystemReducer)
    // const [isLogin, setIsLogin] = useState = (false)
    const isLogin = false

    return (

        <View style={styles.Card}>
            <Text style={styles.text}>Account</Text>
            <View>
                {
                    !isLogin ?
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
                        <Text>
                            userInfo
                        </Text>}

            </View>
            <View style={{ marginTop: 25, borderBottomWidth: 2, borderBottomColor: Colors.primaryGray }}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Türkçe" value="Tr" />
                    <Picker.Item label="English" value="En" />
                </Picker>
            </View>

            {
                !isLogin ?
                    <Button
                        onPress={() => console.log("press")}
                        title="Sign Up"
                        backgroundColor={mail == "" ? Colors.primaryGray : Colors.red}
                        titleColor={Colors.white}
                        borderColor={mail == "" ? Colors.primaryGray : Colors.red}
                    />
                    :
                    <View >
                        <Button
                            onPress={() => console.log("press")}
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