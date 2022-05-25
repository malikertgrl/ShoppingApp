import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Fonts, Layout } from '../constants'
import CustomText from './CustomText'
import Stars from "../assets/svgs/Vectorstar.svg"
import Location from "../assets/svgs/Vectorlocation.svg"
import AddBasket from "../assets/svgs/VectorAdd.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setTotal } from '../redux/action'



const RenderItem = ({ item, addBasket, basket, data }) => {
    const { total } = useSelector(state => state.SystemReducer)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setTotal(basket.reduce((acc, item) => {
            return acc + (data.find(product => product.id == item.id).price)
        }, 0)))
    }, [basket])



    return (
        <View style={styles.Card}>
            <Image
                style={{ borderRadius: 12, width: Layout.windowWidth / 5, height: Layout.windowHeight / 5 - 75 }}
                source={{
                    uri: item.avatar,
                }}
            />
            <View style={styles.innerCard}>
                <CustomText title={item.name} fontSize={Fonts.f16} fontWeight={"600"} />
                <CustomText title={item.ProductInfo} fontSize={Fonts.f12} color={Colors.primaryGray} />

                <View style={styles.viewStyle}>
                    <View style={styles.flex} >
                        <Stars width={24} height={24} />
                        <CustomText title={item.star} />
                    </View>

                    <View style={styles.flexPadding}>
                        <Location style={{ paddingLeft: 10 }} width={24} height={24} />

                        <CustomText title={item.distance + " km"} />
                    </View>
                </View>
                <TouchableOpacity onPress={addBasket}>
                    <View style={[{ marginTop: 25, }, styles.flex]}>
                        <AddBasket width={24} height={24} />
                        <CustomText style={styles.AddBasket} color={Colors.red} title={"SEPETE EKLE"} />
                    </View>

                </TouchableOpacity>

            </View>

        </View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    Card: {
        flexDirection: "row",
        marginBottom: 50,

    },
    viewStyle: {
        marginTop: 8,
        flexDirection: "row",


    },
    innerCard: { marginLeft: 25 },
    nameStyle: {
        fontSize: 16,
        color: Colors.black,
        fontWeight: "600"
    },
    infoStyle: {
        marginTop: 8,
        fontSize: 14,
        color: Colors.primaryGray,
        fontWeight: "400"

    }, flex: {
        flexDirection: "row",
    },

    flexPadding: {
        flexDirection: "row",
        paddingLeft: 20
    },
    AddBasket: { paddingLeft: 10 }
})