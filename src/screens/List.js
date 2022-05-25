
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../api'
import RenderItem from '../components/RenderItem'
import TotalAmount from '../components/TotalAmount'
import { Layout, Colors } from "../constants"
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, setTotal } from "../redux/action"

const List = () => {
    const [data, setData] = useState([])
    const { basket, total } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])



    const getData = () => {
        api.allProducts().then(response => {
            if (response) {
                setData(response)
            } else {
                console.log("else error")
            }
        }).catch(e => console.log(e))
    }

    const addBasket = (item) => {
        console.log(item)
        dispatch(addToBasket(item))
        const totalPriceBasket = [...basket]



    }
    return (
        <View>
            <View
                style={[{ height: basket.length > 0 ? Layout.windowHeight / 2 + 150 : Layout.windowHeight }, styles.Card]}
            >
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <RenderItem data={data} basket={basket} item={item} addBasket={() => addBasket(item)} />

                    }
                />
            </View>
            {basket.length > 0 &&
                <TotalAmount />
            }



        </View>
    )
}

export default List

const styles = StyleSheet.create({
    Card: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryGray,
        marginHorizontal: 18
    }
})