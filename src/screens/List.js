
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../api'
import RenderItem from '../components/RenderItem'
import { Layout } from '../constants'

const List = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        api.allProducts().then(response => {
            if (response) {
                console.log(response)
                setData(response)
            } else {
                console.log("else error")
            }
        }).catch(e => console.log(e))
    }
    return (
        <View>
            <View style={{ height: Layout.windowHeight / 2 + 150 }}>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <RenderItem item={item} />

                    }
                />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Text >
                    TOPLAM ÜCRETT
                </Text>
            </View>


        </View>
    )
}

export default List

const styles = StyleSheet.create({})