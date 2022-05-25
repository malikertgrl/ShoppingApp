import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors, Layout } from '../constants'
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
            <View>
                <Image
                    style={{ borderRadius: 12, width: Layout.windowWidth / 5, height: Layout.windowHeight / 5 - 75 }}
                    source={{
                        uri: item.avatar,
                    }}
                />
            </View>
            <View style={styles.innerCard}>
                <Text style={styles.nameStyle}>
                    {item.name}
                </Text>
                <Text style={styles.infoStyle}>
                    {item.ProductInfo}
                </Text>

                <View style={styles.viewStyle}>
                    <View style={styles.flex} >
                        <Stars width={24} height={24} />
                        <Text>
                            {item.star}
                        </Text>
                    </View>

                    <View style={styles.flex}>
                        <Location width={24} height={24} />

                        <Text>
                            {item.distance} km
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={addBasket}>
                    <View style={[{ marginTop: 25, }, styles.flex]}>
                        <AddBasket width={24} height={24} />
                        <Text style={styles.AddBasket}>SEPETE EKLE</Text>
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
        marginVertical: 40,

    },
    viewStyle: {
        marginTop: 8,
        flexDirection: "row",


    },
    innerCard: { marginLeft: 10 },
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
        paddingHorizontal: 10
    },
    AddBasket: { color: Colors.red, paddingLeft: 10 }
})