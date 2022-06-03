import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Router from './src/navigation/Router';
import { Provider } from "react-redux";
import { Store } from "./src/redux/Store";
import SplashScreen from 'react-native-splash-screen'

const App = () => {


  useEffect(() => {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }, [])

  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  )


}

export default App

const styles = StyleSheet.create({
  Card: {
    alignItems: "center",
  }
})