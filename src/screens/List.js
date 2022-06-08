
import { StyleSheet, Text, View, FlatList, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import api from '../api'
import Card from '../components/Card'
import RenderItem from '../components/RenderItem'
import TotalAmount from '../components/TotalAmount'
import Spinner from '../components/Spinner'
import { Layout, Colors } from "../constants"
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, setTotal, setLoading } from "../redux/action"

const List = () => {
    const [data, setData] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const { basket, total, loading } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
        dispatch(setLoading(true))
    }, [])


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }


    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const getData = () => {
        api.allProducts().then(response => {
            if (response) {
                setData(response)
                dispatch(setLoading(false))
            } else {
                dispatch(setLoading(false))
                console.log("else error")
            }
        }).catch(e => {
            dispatch(setLoading(false))
            console.log(e)
        })
    }

    const addBasket = (item) => {
        console.log(item)
        dispatch(addToBasket(item))



    }
    return (
        <Card>
            {loading && <Spinner />}
            <View
                style={[{ height: basket.length > 0 ? Layout.windowHeight / 2 + 100 : Layout.windowHeight }, styles.Card]}
            >

                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <RenderItem data={data} basket={basket} item={item} addBasket={() => addBasket(item)} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>
            {basket.length > 0 &&
                <TotalAmount />
            }



        </Card>
    )
}

export default List

const styles = StyleSheet.create({
    Card: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.primaryGray,
    }
})