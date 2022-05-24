import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors, Layout } from '../constants'
import Stars from "../assets/svgs/Vectorstar.svg"
import Location from "../assets/svgs/Vectorlocation.svg"
import AddBasket from "../assets/svgs/VectorAdd.svg"


const RenderItem = ({ item }) => {
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
                <View style={[{ marginTop: 25 }, styles.flex]}>
                    <AddBasket width={24} height={24} />
                    <Text style={{ color: Colors.red }}>SEPETE EKLE</Text>
                </View>

            </View>

        </View>
    )
}

export default RenderItem

const styles = StyleSheet.create({
    Card: {
        flexDirection: "row",
        marginVertical: 40,
        marginHorizontal: 15
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
    }
})